# Difficulty Calibration & Data Analysis Plan

## Objective
Analyze historical play data from Firestore and correlate it with the previously played songs in `config.js` to determine the actual difficulty of past songs. We will use these insights to calibrate the new song selection weighting parameters.

## Key Files & Context
- `client/src/config.js`: Contains the history of manually selected songs.
- `server.js`: Connects to the `dudle` Firestore database, specifically the `daily_stats` collection which contains scores and winners.
- `billboard_aggregates.parquet`: Contains the dataset of all Billboard songs and their metrics (peak, weeks on chart, year).

## Implementation Steps

1. **Create Analysis Script (`analyze_difficulty.js`)**:
   - Write a Node.js script that fetches all documents from the `daily_stats` Firestore collection.
   - Parse `client/src/config.js` to extract the historical list of songs and their dates.
   - For each date, join the song metadata (Title, Artist) with the daily stats (Number of players, Average score, Win rate).
   - Look up the song's metrics (Peak Rank, Year, Weeks on Chart, Obscurity tier) in `billboard_aggregates.parquet` (using DuckDB).
   
2. **Analyze & Calibrate**:
   - Run the script and output a report showing how different metrics (Era, Peak Rank) correlate with high win rates (easy) vs. low win rates/high wrong guesses (hard).
   - Use these empirical findings to define the exact weighting parameters for the new daily song selection logic (e.g., exactly how much to boost 1980-2000 songs, and what the penalty should be for post-2000 songs).

3. **Implement Weighted Selection**:
   - Update `server.js` `/api/daily` to use a seeded, weighted random selection based on the calibrated parameters.
   - Add an `obscurity` query parameter to bypass the random roll for testing.

## Verification & Testing
- The analysis script will output 5 simulated song selections for each obscurity tier based on the final calibrated weights, allowing us to manually verify the tuning.
- Test the `/api/daily?obscurity=1` endpoint locally.