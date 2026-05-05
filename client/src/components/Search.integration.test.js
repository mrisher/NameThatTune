/**
 * Integration tests that hit the real iTunes Search API. Each case calls
 * processSearchResults with real iTunes response data and asserts the
 * resulting behavior.
 *
 * Behavior depending on environment:
 *  - Locally / in sandboxes without iTunes egress: the suite probes once and
 *    silently skips every case if iTunes is unreachable.
 *  - In GitHub Actions (process.env.GITHUB_ACTIONS === 'true'): a probe
 *    failure throws from beforeAll, failing the entire suite. A green CI
 *    check therefore proves the assertions ran against live iTunes.
 *
 * Add a new case by appending to `cases` below — keep assertions loose
 * enough to survive Apple's catalog drift but tight enough to catch
 * regressions in our own pruning/promote logic.
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

const cleanTitle = (s) => s
  .replace(/\s*\([^)]*\)/g, '')
  .replace(/\s*\[[^\]]*\]/g, '')
  .split(' - ')[0]
  .split(': ')[0]
  .trim()
  .toLowerCase();

let iTunesReachable = false;
beforeAll(async () => {
  try {
    await search('madonna');
    iTunesReachable = true;
    process.stdout.write('[Search.integration] iTunes reachable — assertions will run against live API\n');
  } catch (e) {
    if (process.env.GITHUB_ACTIONS === 'true') {
      throw new Error(
        `iTunes unreachable in GitHub Actions — integration tests must run for real. ` +
        `Probe failed: ${e.message}`
      );
    }
    process.stdout.write(`[Search.integration] iTunes unreachable, skipping suite locally: ${e.message}\n`);
  }
}, TIMEOUT_MS);

const cases = [
  {
    description: 'top results for "Madonna"',
    query: 'Madonna',
    correctTrack: null,
    assert: (out) => {
      expect(out.length).toBeGreaterThan(0);
      expect(out.length).toBeLessThanOrEqual(MAX_RESULTS);
    },
  },
  {
    description: 'every result is well-formed for "Vogue Madonna"',
    query: 'Vogue Madonna',
    correctTrack: null,
    assert: (out) => {
      expect(out.length).toBeGreaterThan(0);
      out.forEach(t => {
        expect(typeof t.trackName).toBe('string');
        expect(t.trackName.length).toBeGreaterThan(0);
        expect(typeof t.artistName).toBe('string');
        expect(t.artistName.length).toBeGreaterThan(0);
      });
    },
  },
  {
    description: '"I wanna dance with somebody" returns Whitney Houston in the top results',
    query: 'I wanna dance with somebody',
    correctTrack: null,
    assert: (out) => {
      expect(out.some(t => t.artistName.toLowerCase().includes('whitney houston'))).toBe(true);
    },
  },
  {
    description: '"Koji Kondo" with Super Mario Bros. Theme correctTrack surfaces the answer at slot 0 (full artist coverage)',
    query: 'Koji Kondo',
    correctTrack: { songTitle: 'Super Mario Bros. Theme', artistName: 'Koji Kondo' },
    assert: (out) => {
      expect(out.length).toBeGreaterThan(0);
      expect(out[0].artistName.toLowerCase()).toBe('koji kondo');
    },
  },
  {
    description: '"super Mario kondo" with correctTrack promotes the answer (2 title tokens + 1 artist token all match)',
    query: 'super Mario kondo',
    correctTrack: { songTitle: 'Super Mario Bros. Theme', artistName: 'Koji Kondo' },
    assert: (out) => {
      expect(out.length).toBeGreaterThan(0);
      expect(out[0].artistName.toLowerCase()).toBe('koji kondo');
    },
  },
  {
    description: '"Mario" alone with correctTrack does NOT promote (only 1 meaningful matching word — too easy)',
    query: 'Mario',
    correctTrack: { songTitle: 'Super Mario Bros. Theme', artistName: 'Koji Kondo' },
    assert: (out) => {
      expect(out.some(t => t.isSynthetic)).toBe(false);
      expect(out.some(t =>
        t.artistName.toLowerCase().includes('koji kondo') &&
        t.trackName.toLowerCase().includes('super mario bros')
      )).toBe(false);
    },
  },
  {
    description: '"He\'s a Pirate" with Hans Zimmer correctTrack surfaces the original at slot 0',
    query: "He's a Pirate",
    correctTrack: { songTitle: "He's a Pirate", artistName: 'Hans Zimmer' },
    assert: (out) => {
      expect(out.length).toBeGreaterThan(0);
      expect(cleanTitle(out[0].trackName)).toBe("he's a pirate");
      expect(out[0].artistName.toLowerCase()).toContain('hans zimmer');
    },
  },
  {
    description: '"pirates of the caribbean" with He\'s a Pirate correctTrack does not leak the answer (organic ranking suppression)',
    query: 'pirates of the caribbean',
    correctTrack: { songTitle: "He's a Pirate", artistName: 'Hans Zimmer' },
    assert: (out) => {
      expect(out.some(t => cleanTitle(t.trackName) === "he's a pirate")).toBe(false);
    },
  },
  {
    description: '"i love pirate ships" with He\'s a Pirate correctTrack does not promote via loose substring match',
    query: 'i love pirate ships',
    correctTrack: { songTitle: "He's a Pirate", artistName: 'Hans Zimmer' },
    assert: (out) => {
      // No synthetic injection from a tangential query.
      expect(out.some(t => t.isSynthetic)).toBe(false);
      // And no organic Hans Zimmer "He's a Pirate" surfacing as an unfair hint.
      expect(out.some(t =>
        cleanTitle(t.trackName) === "he's a pirate" &&
        t.artistName.toLowerCase().includes('hans zimmer')
      )).toBe(false);
    },
  },
  {
    description: '"Hello" preserves multiple distinct artists (no collapse below 3 same-titled entries)',
    query: 'Hello',
    correctTrack: null,
    assert: (out) => {
      // The top results for "Hello" should include at least two distinct
      // artist names — the cross-artist collapse must not flatten them when
      // fewer than 3 entries share a title.
      const artists = new Set(out.map(t => t.artistName.toLowerCase()));
      expect(artists.size).toBeGreaterThanOrEqual(2);
    },
  },
  {
    description: 'no within-artist variant duplicates for "Stayin Alive"',
    query: 'Stayin Alive',
    correctTrack: null,
    assert: (out) => {
      const seen = new Set();
      out.forEach(t => {
        const dedupKey = `${t.artistName.toLowerCase()}|${cleanTitle(t.trackName)}`;
        expect(seen.has(dedupKey)).toBe(false);
        seen.add(dedupKey);
      });
    },
  },
  {
    description: 'no cross-artist title appears 3+ times for "Mario theme" (3+ collapse rule)',
    query: 'Mario theme',
    correctTrack: null,
    assert: (out) => {
      const counts = new Map();
      out.forEach(t => {
        const k = cleanTitle(t.trackName);
        counts.set(k, (counts.get(k) || 0) + 1);
      });
      counts.forEach((count) => {
        expect(count).toBeLessThan(3);
      });
    },
  },
  {
    description: 'every case respects the MAX_RESULTS cap for "music"',
    query: 'music',
    correctTrack: null,
    assert: (out) => {
      expect(out.length).toBeLessThanOrEqual(MAX_RESULTS);
    },
  },
];

describe('Search integration (real iTunes API)', () => {
  cases.forEach(({ description, query, correctTrack, assert }) => {
    test(description, async () => {
      if (!iTunesReachable) {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(true).toBe(true);
        return;
      }
      const fetched = await search(query);
      const out = processSearchResults(fetched, query, correctTrack);
      assert(out);
    }, TIMEOUT_MS);
  });
});
