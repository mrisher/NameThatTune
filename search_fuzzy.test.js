const { Database } = require('duckdb-async');
const path = require('path');

async function testFuzzySearch() {
    const db = await Database.create(':memory:');
    const AGGREGATES_PATH = 'billboard_aggregates.parquet';
    
    // Load RapidFuzz
    await db.run("INSTALL rapidfuzz FROM community; LOAD rapidfuzz;");
    await db.run(`CREATE TABLE billboard_aggregates AS SELECT * FROM '${AGGREGATES_PATH}'`);

    const testCases = [
        { query: 'nwa', expected: 'N.W.A' },
        { query: 'staying', expected: "Stayin' Alive" },
        { query: 'guns and roses', expected: "Guns N' Roses" },
        { query: 'motley crue', expected: "Motley Crue" },
        { query: 'kesha', expected: "Kesha" }
    ];

    console.log("--- Starting Fuzzy Search Tests (Implementation Verification) ---");
    let passed = 0;

    const normalize = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '');

    for (const test of testCases) {
        const q = test.query;
        const cleanQ = q.toLowerCase().replace(/[^a-z0-9\s]/g, '');
        
        const results = await db.all(
          `SELECT artist as artistName, song_title as trackName, total_points,
              greatest(
                rapidfuzz_partial_ratio(regexp_replace(lower(artistName), '[^a-z0-9\\s]', '', 'g'), ?),
                rapidfuzz_partial_ratio(regexp_replace(lower(trackName), '[^a-z0-9\\s]', '', 'g'), ?),
                rapidfuzz_token_set_ratio(regexp_replace(lower(artistName), '[^a-z0-9\\s]', '', 'g'), ?),
                rapidfuzz_token_set_ratio(regexp_replace(lower(trackName), '[^a-z0-9\\s]', '', 'g'), ?)
              ) as score
           FROM billboard_aggregates 
           WHERE score > 80 OR (artistName ILIKE ? OR trackName ILIKE ?)
           ORDER BY score DESC, total_points DESC 
           LIMIT 5`,
          cleanQ, cleanQ, cleanQ, cleanQ, `%${q}%`, `%${q}%`
        );

        const found = results.some(r => 
            normalize(r.artistName).includes(normalize(test.expected)) || 
            normalize(r.trackName).includes(normalize(test.expected)) ||
            normalize(test.expected).includes(normalize(r.artistName)) ||
            normalize(test.expected).includes(normalize(r.trackName))
        );

        if (found) {
            console.log(`✅ PASS: "${test.query}" found "${test.expected}" (Best score: ${results[0]?.score || 0})`);
            passed++;
        } else {
            console.log(`❌ FAIL: "${test.query}" did NOT find "${test.expected}"`);
            console.log(`   Top 3 results:`, results.slice(0, 3).map(r => `${r.artistName} - ${r.trackName} (${r.score})`).join(', ') || 'None');
        }
    }

    console.log(`\nResults: ${passed}/${testCases.length} passed.`);
    process.exit(passed === testCases.length ? 0 : 1);
}

testFuzzySearch().catch(err => {
    console.error(err);
    process.exit(1);
});
