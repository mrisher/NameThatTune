/**
 * Integration tests that hit the real iTunes Search API. These verify that
 * processSearchResults produces sensible output against live data. Because they
 * depend on iTunes' catalog and ranking, expected matches are intentionally
 * loose. If the network is restricted (e.g. a sandbox where iTunes is blocked,
 * or CI without egress), the suite skips itself after a startup probe rather
 * than failing every test.
 */
import https from 'https';
import { processSearchResults, ITUNES_SEARCH_URL, MAX_RESULTS } from './searchLogic';

const TIMEOUT_MS = 15000;

function search(query) {
  return new Promise((resolve, reject) => {
    https.get(ITUNES_SEARCH_URL(query), (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`iTunes responded ${res.statusCode}`));
        res.resume();
        return;
      }
      let body = '';
      res.setEncoding('utf8');
      res.on('data', chunk => { body += chunk; });
      res.on('end', () => {
        try {
          resolve(JSON.parse(body).results || []);
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

let iTunesReachable = false;
beforeAll(async () => {
  try {
    await search('madonna');
    iTunesReachable = true;
  } catch (e) {
    console.warn(`[Search.integration] iTunes unreachable, skipping suite: ${e.message}`);
  }
}, TIMEOUT_MS);

const requireReachable = () => {
  if (!iTunesReachable) {
    // eslint-disable-next-line jest/no-conditional-expect
    expect(true).toBe(true);
    return false;
  }
  return true;
};

describe('Search integration (real iTunes API)', () => {
  test('returns at most MAX_RESULTS for "Madonna"', async () => {
    if (!requireReachable()) return;
    const fetched = await search('Madonna');
    const out = processSearchResults(fetched, 'Madonna');
    expect(out.length).toBeGreaterThan(0);
    expect(out.length).toBeLessThanOrEqual(MAX_RESULTS);
  }, TIMEOUT_MS);

  test('"super Mario" with Koji Kondo correctTrack surfaces the original theme', async () => {
    if (!requireReachable()) return;
    const fetched = await search('super Mario');
    const correctTrack = { songTitle: 'Super Mario Bros. Theme', artistName: 'Koji Kondo' };
    const out = processSearchResults(fetched, 'super Mario', correctTrack);
    const hasKoji = out.some(t => t.artistName.toLowerCase() === 'koji kondo');
    expect(hasKoji).toBe(true);
  }, TIMEOUT_MS);

  test('"I wanna dance with somebody" returns Whitney Houston in the top results', async () => {
    if (!requireReachable()) return;
    const fetched = await search('I wanna dance with somebody');
    const out = processSearchResults(fetched, 'I wanna dance with somebody');
    const hasWhitney = out.some(t => t.artistName.toLowerCase().includes('whitney houston'));
    expect(hasWhitney).toBe(true);
  }, TIMEOUT_MS);

  test('every returned result has a trackName and artistName', async () => {
    if (!requireReachable()) return;
    const fetched = await search('Vogue Madonna');
    const out = processSearchResults(fetched, 'Vogue Madonna');
    expect(out.length).toBeGreaterThan(0);
    out.forEach(t => {
      expect(typeof t.trackName).toBe('string');
      expect(t.trackName.length).toBeGreaterThan(0);
      expect(typeof t.artistName).toBe('string');
      expect(t.artistName.length).toBeGreaterThan(0);
    });
  }, TIMEOUT_MS);

  test('does not return duplicate variants from the same artist for "Stayin Alive"', async () => {
    if (!requireReachable()) return;
    const fetched = await search('Stayin Alive');
    const out = processSearchResults(fetched, 'Stayin Alive');
    const seen = new Set();
    out.forEach(t => {
      const key = t.artistName.toLowerCase();
      const cleanTitle = t.trackName
        .replace(/\s*\([^)]*\)/g, '')
        .replace(/\s*\[[^\]]*\]/g, '')
        .split(' - ')[0]
        .split(': ')[0]
        .trim()
        .toLowerCase();
      const dedupKey = `${key}|${cleanTitle}`;
      expect(seen.has(dedupKey)).toBe(false);
      seen.add(dedupKey);
    });
  }, TIMEOUT_MS);
});
