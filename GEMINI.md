# Dudle vs ConnecTunes

This codebase contains two different games:

1. **Dudle (Primary Game)**:
   - **Configuration**: Dynamic (via `/api/daily` and `/api/search`)
   - **Component**: `client/src/components/Game.js`
   - **Description**: A "Heardle" clone where users guess a song based on progressively longer audio snippets.
   - **Song Selection**: Backend-driven using the Billboard Top 100 dataset.

2. **ConnecTunes**:
   - **Configuration**: `client/src/connectunesConfig.js`
   - **Component**: `client/src/components/ConnecTunes.js`
   - **Description**: A game where users find two songs that share a word in their title from a grid of four.
   - **Song Selection**: Uses the `connectunesSongs` array from `connectunesConfig.js`.

## Dynamic Song Selection & Search (Dudle)
- **Primary Database**: `billboard_aggregates.parquet`. Contains Billboard Top 100 songs from 1980 to present with calculated popularity scores and quartiles.
- **Backend Querying**: Uses **DuckDB** in `server.js` for lexical search and song selection.
- **Daily Selection**: Deterministic PRNG seeded by date (`seedrandom`).
- **Difficulty Control**: Automatically picks songs from the **2nd Quartile** (Moderate difficulty).
- **Cooldown**: Prevents song repeats within a 28-day window (initially seeded from `client/src/config.js` history).
- **Search API**: `/api/search` provides clean, non-duplicate Billboard-validated results.
- **Audio Cache**: iTunes preview URLs are fetched on-demand and cached in **Firestore** (`song_cache` collection) using hex-encoded `artist|title` as the key.
- **Auto-Updates**: Every 7 days, the app triggers a background run of `process_billboard.py` to fetch the latest Billboard charts and refresh the Parquet files.

## iTunes API Fetching (Lessons Learned)
- **403 Forbidden Errors**: The iTunes Search API frequently returns 403 Forbidden when requested via standard libraries.
- **Successful Strategy**: Using `curl` via `subprocess` or `execSync` with the default `curl` User-Agent works reliably. 
- **Search Logic**: For dynamic daily songs, we prioritize the **shortest** matching track name from iTunes to naturally avoid "Live", "Remix", or "Radio Edit" variants.
