import pandas as pd
import subprocess
import os

# Download latest if not present or for update
CSV_URL = "https://raw.githubusercontent.com/utdata/rwd-billboard-data/main/data-out/hot-100-current.csv"
TEMP_DIR = "/tmp" if os.path.exists("/tmp") else "."
CSV_FILE = os.path.join(TEMP_DIR, "billboard_hot_100.csv")

def download_csv():
    print(f"Downloading {CSV_URL} to {CSV_FILE}...")
    subprocess.run(["curl", "-L", CSV_URL, "-o", CSV_FILE], check=True)

def process():
    if not os.path.exists(CSV_FILE):
        download_csv()
        
    # Load the data
    df = pd.read_csv(CSV_FILE)
    df['chart_week'] = pd.to_datetime(df['chart_week'])

    # Filter for 1980 to present
    # We use a dynamic upper bound to include the latest data
    max_date = df['chart_week'].max()
    df_filtered = df[(df['chart_week'] >= '1980-01-01')].copy()

    # Add Chart Points (Peak-Weighted: 500 / (Rank + 4))
    df_filtered['points'] = 500 / (df_filtered['current_week'] + 4)

    # 1. Raw Filtered Data
    df_filtered.to_parquet(os.path.join(TEMP_DIR, 'billboard_1980_present.parquet'), index=False)

    # 2. Aggregates for All Songs
    # Add a helper for weeks in Top 40
    df_filtered['is_top_40'] = (df_filtered['current_week'] <= 40).astype(int)

    aggregates = df_filtered.groupby(['performer', 'title']).agg(
        highest_rank=('current_week', 'min'),
        weeks_on_chart=('current_week', 'count'),
        weeks_in_top_40=('is_top_40', 'sum'),
        total_points=('points', 'sum'),
        average_rank=('current_week', 'mean'),
        first_appeared=('chart_week', 'min'),
        last_appeared=('chart_week', 'max'),
    ).reset_index()

    # Fix peak_date
    idx_peak = df_filtered.groupby(['performer', 'title'])['points'].idxmax()
    peak_dates = df_filtered.loc[idx_peak, ['performer', 'title', 'chart_week']]
    aggregates = aggregates.merge(peak_dates, on=['performer', 'title']).rename(columns={'chart_week': 'peak_date'})

    # Filter for Top 40 hits only
    aggregates = aggregates[aggregates['highest_rank'] <= 40].copy()

    # Add Artist Halo: calculate total points per artist
    import numpy as np
    artist_total_points = aggregates.groupby('performer')['total_points'].transform('sum')
    
    # Peak Rank Multiplier: peak #1-10 gets 2x, #11-20 gets 1.5x, #21-30 gets 1.2x
    def get_peak_multiplier(rank):
        if rank <= 10: return 2.0
        if rank <= 20: return 1.5
        if rank <= 30: return 1.2
        return 1.0
    
    aggregates['peak_multiplier'] = aggregates['highest_rank'].apply(get_peak_multiplier)
    
    # Combined Score: (Song Points * Peak Multiplier) + (Fraction of Artist Fame)
    # We use a linear fraction of artist fame to ensure big artists truly pull up their minor hits
    aggregates['popularity_score_raw'] = (aggregates['total_points'] * aggregates['peak_multiplier']) + (artist_total_points * 0.1)

    # Add Popularity score and obscurity (1-5, where 1 is most popular)
    max_pts = aggregates['popularity_score_raw'].max()
    aggregates['popularity_score'] = (aggregates['popularity_score_raw'] / max_pts * 100).round(2)
    aggregates['obscurity'] = pd.qcut(aggregates['popularity_score'], 5, labels=[5, 4, 3, 2, 1]).astype(int)
    aggregates['peak_year'] = pd.to_datetime(aggregates['peak_date']).dt.year

    # Save aggregates
    aggregates.columns = ['artist', 'song_title', 'highest_rank', 'weeks_on_chart', 'weeks_in_top_40', 'total_points', 'average_rank', 'first_appeared', 'last_appeared', 'peak_date', 'peak_multiplier', 'popularity_score_raw', 'popularity_score', 'obscurity', 'peak_year']
    aggregates.to_parquet(os.path.join(TEMP_DIR, 'billboard_aggregates.parquet'), index=False)

    print(f"Data range: {df_filtered.chart_week.min()} to {df_filtered.chart_week.max()}")
    print(f"Processed {len(aggregates)} unique songs.")
    print(f"Saved billboard_1980_present.parquet and billboard_aggregates.parquet to {TEMP_DIR}")
    
    # Cleanup CSV
    if os.path.exists(CSV_FILE):
        os.remove(CSV_FILE)

if __name__ == "__main__":
    process()
