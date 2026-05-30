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

    # Add Chart Points (101 - Rank)
    df_filtered['points'] = 101 - df_filtered['current_week']

    # 1. Raw Filtered Data
    df_filtered.to_parquet(os.path.join(TEMP_DIR, 'billboard_1980_present.parquet'), index=False)

    # 2. Aggregates for All Songs
    aggregates = df_filtered.groupby(['performer', 'title']).agg(
        highest_rank=('current_week', 'min'),
        weeks_on_chart=('current_week', 'count'),
        total_points=('points', 'sum'),
        average_rank=('current_week', 'mean'),
        first_appeared=('chart_week', 'min'),
        last_appeared=('chart_week', 'max'),
    ).reset_index()

    # Fix peak_date
    idx_peak = df_filtered.groupby(['performer', 'title'])['points'].idxmax()
    peak_dates = df_filtered.loc[idx_peak, ['performer', 'title', 'chart_week']]
    aggregates = aggregates.merge(peak_dates, on=['performer', 'title']).rename(columns={'chart_week': 'peak_date'})

    # Add Popularity score and quartile
    max_pts = aggregates['total_points'].max()
    aggregates['popularity_score'] = (aggregates['total_points'] / max_pts * 100).round(2)
    aggregates['popularity_quartile'] = pd.qcut(aggregates['popularity_score'], 4, labels=[1, 2, 3, 4]).astype(int)
    aggregates['peak_year'] = pd.to_datetime(aggregates['peak_date']).dt.year

    # Save aggregates
    aggregates.columns = ['artist', 'song_title', 'highest_rank', 'weeks_on_chart', 'total_points', 'average_rank', 'first_appeared', 'last_appeared', 'peak_date', 'popularity_score', 'popularity_quartile', 'peak_year']
    aggregates.to_parquet(os.path.join(TEMP_DIR, 'billboard_aggregates.parquet'), index=False)

    print(f"Data range: {df_filtered.chart_week.min()} to {df_filtered.chart_week.max()}")
    print(f"Processed {len(aggregates)} unique songs.")
    print(f"Saved billboard_1980_present.parquet and billboard_aggregates.parquet to {TEMP_DIR}")
    
    # Cleanup CSV
    if os.path.exists(CSV_FILE):
        os.remove(CSV_FILE)

if __name__ == "__main__":
    process()
