# Dudle vs ConnecTunes

This codebase contains two different games:

1. **Dudle (Primary Game)**:
   - **Configuration**: `client/src/config.js`
   - **Component**: `client/src/components/Game.js`
   - **Description**: A "Heardle" clone where users guess a song based on progressively longer audio snippets.
   - **Song Selection**: Uses the `songs` array from `config.js`, mapping specific dates to single songs.

2. **ConnecTunes**:
   - **Configuration**: `client/src/connectunesConfig.js`
   - **Component**: `client/src/components/ConnecTunes.js`
   - **Description**: A game where users find two songs that share a word in their title from a grid of four.
   - **Song Selection**: Uses the `connectunesSongs` array from `connectunesConfig.js`, mapping dates to sets of four songs.

**Important**: When adding daily songs, ensure you are updating the correct configuration file for the intended game.

## iTunes API Fetching (Lessons Learned)
- **403 Forbidden Errors**: The iTunes Search API frequently returns 403 Forbidden when requested via standard libraries like Python's `urllib` or `requests` in this environment. 
- **Successful Strategy**: Using `curl` via `subprocess` with the default `curl` User-Agent worked reliably. 
- **Rate Limiting**: A delay of at least 2 seconds between requests is recommended to avoid CDN-level blocks.
- **VPN Impact**: Stability significantly improved when using a VPN, suggesting IP-based reputation or regional rate limiting.
- **Search Logic**: To avoid live/remix tracks, the script fetches 5 results and picks the first one that doesn't contain "live", "remix", or "karaoke" in the title.
