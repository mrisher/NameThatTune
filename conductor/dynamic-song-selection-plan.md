# Dynamic Song Selection & Search Overhaul

## Objective
Migrate Dudle from a static `config.js` array to a dynamic backend-driven song selection using the Billboard Parquet dataset. Implement a cooldown system seeded with the last 4 weeks of history, overhaul the search feature to use backend lexical search, populate iTunes audio URLs on-demand into the database using lexical matching, and establish an automated background update mechanism for the dataset.

## Key Files & Context
- `server.js`: Will host new endpoints, DuckDB integration, and the background update trigger.
- `client/src/config.js`: Will be used to seed the initial cooldown window before being deprecated.
- `client/src/components/Search.js` & `searchLogic.js`: Will point to the new backend search API.
- `billboard_aggregates.parquet` & `billboard_1980_2026.parquet`: The datasets serving as the source of truth for songs and history.
- `process_billboard.py`: The script used to fetch and regenerate the Parquet files.

## Implementation Steps

### Phase 1: Backend Database & Search API
1. **Dependencies**: Install `duckdb` (or a suitable wrapper like `duckdb-async`) in the root project.
2. **Search Endpoint**: Add `GET /api/search?q=...` to `server.js`.
   - Use DuckDB to query `billboard_aggregates.parquet`.
   - Implement lexical matching (e.g., using DuckDB's text search extensions or simple ILIKE) returning the top 5 results.
3. **Frontend Update**: Update `client/src/components/searchLogic.js` and `Search.js` to call `/api/search` instead of the iTunes API, streamlining the duplicate filtering logic since the database is already clean.

### Phase 2: Daily Song Generation & Cooldown
1. **Seeded PRNG**: Implement a deterministic random number generator (e.g., using the `seedrandom` package or a custom hash function seeded by the `YYYY-MM-DD` date string).
2. **Cooldown Logic**: 
   - Parse `client/src/config.js` to load the last 28 days (4 weeks) of songs as the initial cooldown blacklist.
   - When generating a song for date $D$, the PRNG picks a song from the Parquet dataset (e.g., restricted to Quartile 2 for medium difficulty).
   - To ensure no repeats within 'n' days, the system will dynamically simulate the previous 'n' days using the seeded PRNG. If the song picked for date $D$ appears in the dynamically generated past or the initial blacklist, the PRNG advances/re-rolls to pick a new track.
3. **Daily Endpoint**: Add `GET /api/daily?date=YYYY-MM-DD` to `server.js` to serve the selected track.

### Phase 3: On-Demand iTunes URL Caching
1. **On-Demand Fetching**: When `/api/daily` is called for a new date, check if the `audioUrl` is already present in `billboard_aggregates.parquet` for the selected song.
2. **iTunes Integration**: If not cached, execute a `curl` subprocess to query the iTunes Search API for the artist + title.
3. **Filtration via Lexical Matching**: Parse the top 5 iTunes results and use string similarity/lexical matching to find the result whose track name most closely matches the exact Billboard title. Prefer the shortest exact or near-exact match to naturally filter out "Live", "Remix", or "Radio Edit" variants.
4. **Storage**: Save the selected `audioUrl` and `trackId` back into `billboard_aggregates.parquet` so it is permanently cached.
5. **Frontend Update**: Update `client/src/components/Game.js` to fetch today's song configuration from `/api/daily` instead of importing `config.js`.

### Phase 4: Automated Dataset Updates
1. **Timestamp Tracking**: Create a simple tracking mechanism (e.g., a small JSON file or a query to the Parquet file's max date) to record when the Billboard dataset was last updated.
2. **Background Trigger**: In `server.js`, add middleware or logic to the main app load or `/api/daily` endpoint that checks this timestamp.
3. **Update Process**: If it has been more than 'n' days (e.g., 7 days) since the last update, spawn a non-blocking background process to run the `process_billboard.py` script.
4. **Data Refresh**: The script will download the latest `hot-100-current.csv` from the UT GitHub repo, regenerate the Parquet files, and seamlessly replace the old ones, ensuring the game always has access to the newest hits.

## Verification & Testing
- **Search**: Verify that searching for popular tracks yields clean results from the Billboard dataset without iTunes duplicates.
- **Consistency**: Ensure hitting `/api/daily?date=2026-05-26` multiple times returns the exact same song.
- **Cooldown**: Verify that the PRNG successfully skips any song played in the seeded `config.js` history or within the dynamically calculated 'n' day window.
- **Audio Loading & Storage**: Confirm the on-demand `curl` subprocess successfully fetches valid iTunes preview URLs, correctly identifies the cleanest version via lexical matching, and saves it to the Parquet file.
- **Background Update**: Verify that simulating an expired timestamp triggers the Python script in the background and successfully updates the Parquet files without interrupting the user request.