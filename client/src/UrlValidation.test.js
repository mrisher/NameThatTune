import { songs } from './config';
import { connectunesSongs } from './connectunesConfig';
import fs from 'fs';
import path from 'path';

describe('URL Validation', () => {
  const allSongs = [
    ...songs.map(s => ({ ...s, source: 'config.js' })),
    ...connectunesSongs.flatMap(d => d.songs.map(s => ({ ...s, day: d.day, source: 'connectunesConfig.js' })))
  ];

  const PLACEHOLDER_KEYWORDS = [
    'REPLACE_ME',
    'MISSING',
    'TODO',
    'EXAMPLE',
    'localhost',
    '127.0.0.1',
    'INSERT',
    'FIXME',
    'DUMMY',
    'TEST_URL'
  ];

  const isSuspicious = (url) => {
    if (!url) return 'URL is empty or null';
    
    // Check for explicit placeholders (case-insensitive)
    const upperUrl = url.toUpperCase();
    for (const keyword of PLACEHOLDER_KEYWORDS) {
      if (upperUrl.includes(keyword)) {
        return `Contains placeholder keyword: ${keyword}`;
      }
    }

    // Check for repetitive characters in path (e.g., 33333333)
    // We look for 6 or more identical characters in a row
    const repetitiveMatch = url.match(/([^/])\1{5,}/);
    if (repetitiveMatch) {
      return `Contains repetitive characters: ${repetitiveMatch[0]}`;
    }

    // Check for repetitive path segments like /33/33/33/
    // iTunes actually uses /xx/xx/ paths legitimately (e.g., /59/59/),
    // so we only flag if a segment is repeated 3 or more times.
    const repetitiveSegmentMatch = url.match(/\/(\w+)\/\1\/\1\//);
    if (repetitiveSegmentMatch) {
      return `Contains repetitive path segments: /${repetitiveSegmentMatch[1]}/${repetitiveSegmentMatch[1]}/${repetitiveSegmentMatch[1]}/`;
    }

    // Check for valid iTunes preview URL structure
    if (!url.startsWith('https://audio-ssl.itunes.apple.com/') && 
        !url.startsWith('https://video-ssl.itunes.apple.com/')) {
      return 'Does not start with a valid iTunes preview domain (must be audio-ssl or video-ssl.itunes.apple.com)';
    }

    // Basic length check (iTunes URLs are usually long)
    if (url.length < 50) {
      return 'URL is suspiciously short for an iTunes preview URL';
    }

    // Check for common non-valid URL patterns
    if (url.includes(' ') || url.includes('<') || url.includes('>')) {
      return 'Contains invalid characters (space, <, or >)';
    }

    return null;
  };

  test('Static Analysis: All song URLs should be valid and not placeholders', () => {
    const failures = [];

    allSongs.forEach(song => {
      const reason = isSuspicious(song.audioUrl);
      if (reason) {
        failures.push({
          day: song.day,
          source: song.source,
          url: song.audioUrl,
          reason: reason
        });
      }
    });

    if (failures.length > 0) {
      const failureMessage = failures.map(f => 
        `[${f.source} ${f.day}] ${f.reason}: ${f.url}`
      ).join('\n');
      throw new Error(`Found ${failures.length} invalid or suspicious URLs:\n${failureMessage}\n\nPlease fix these URLs in the respective config files.`);
    }
  });

  /**
   * Integration Test: Performs HEAD requests to verify URLs are actually reachable.
   * Uses a local cache file (.validated_urls.json) to remember known-good URLs, 
   * thus avoiding unnecessary network requests and rate limits on subsequent runs.
   */
  test('Integration: Check newly added song URLs for reachability', async () => {
    const cachePath = path.join(__dirname, '.validated_urls.json');
    let validatedUrls = [];

    if (fs.existsSync(cachePath)) {
      try {
        validatedUrls = JSON.parse(fs.readFileSync(cachePath, 'utf-8'));
      } catch (e) {
        console.warn('Could not parse .validated_urls.json, starting fresh.', e.message);
      }
    }

    const uniqueUrls = Array.from(new Set(allSongs.map(s => s.audioUrl)));
    const newUrls = uniqueUrls.filter(url => !validatedUrls.includes(url));

    if (newUrls.length === 0) {
      // Nothing to do, all URLs are cached and valid.
      return;
    }

    console.log(`Checking ${newUrls.length} newly added or unvalidated URLs...`);

    const failures = [];
    const newlyValidated = [];

    for (const url of newUrls) {
      try {
        // Using fetch from Node.js environment
        const response = await fetch(url, { method: 'HEAD' });
        if (response.status === 200) {
          newlyValidated.push(url);
        } else if (response.status === 403) {
          // If 403, we might be hitting rate limits. But we'll treat it as a failure for now to be safe.
          failures.push(`${url} (Status: ${response.status} Forbidden - possibly rate limited or geo-blocked)`);
        } else {
          failures.push(`${url} (Status: ${response.status})`);
        }
      } catch (error) {
        failures.push(`${url} (Error: ${error.message})`);
      }
      
      // Delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 800));
    }

    // Save newly validated ones back to cache so we don't repeat them
    if (newlyValidated.length > 0) {
      const updatedCache = Array.from(new Set([...validatedUrls, ...newlyValidated])).sort();
      fs.writeFileSync(cachePath, JSON.stringify(updatedCache, null, 2), 'utf-8');
      console.log(`Saved ${newlyValidated.length} new URLs to cache.`);
    }

    if (failures.length > 0) {
      throw new Error(`Found ${failures.length} unreachable URLs:\n${failures.join('\n')}`);
    }
  }, 600000); // 10 minute timeout
});

