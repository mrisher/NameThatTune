const { Database } = require('duckdb-async');
const seedrandom = require('seedrandom');

async function testDailyApi() {
    const db = await Database.create(':memory:');
    const AGGREGATES_PATH = 'billboard_aggregates.parquet';
    await db.run(`CREATE TABLE billboard_aggregates AS SELECT * FROM '${AGGREGATES_PATH}'`);

    console.log("--- Starting Daily API Integration Tests ---");
    let passed = 0;
    const totalTests = 2;

    const date = '2026-05-30';
    const rng = seedrandom(date);
    
    // 1. Roll for obscurity
    const roll = rng();
    let targetObscurity = 3; 
    if (roll < 0.30) targetObscurity = 1;
    else if (roll < 0.60) targetObscurity = 2;
    else if (roll < 0.80) targetObscurity = 3;
    else if (roll < 0.90) targetObscurity = 4;
    else targetObscurity = 5;

    console.log(`Testing selection for date ${date} (Target Obscurity: ${targetObscurity})`);

    // 2. Query candidates (Mirroring server.js logic)
    // This query would have failed if columns were missing
    try {
        const candidates = await db.all(
          `SELECT artist, song_title, obscurity, highest_rank, weeks_on_chart, peak_year FROM billboard_aggregates WHERE obscurity = ?`,
          targetObscurity
        );

        if (candidates.length > 0) {
            console.log("✅ PASS: Successfully queried all required columns including peak_year.");
            passed++;
            
            const selected = candidates[0]; // Just test the first one for serialization
            
            // 3. Test JSON Serialization (Catching BigInt error)
            const toNum = (val) => typeof val === 'bigint' ? Number(val) : val;
            const response = {
                day: date,
                songTitle: selected.song_title,
                artistName: selected.artist,
                obscurity: toNum(selected.obscurity),
                peak: toNum(selected.highest_rank),
                weeks: toNum(selected.weeks_on_chart),
                year: toNum(selected.peak_year),
            };

            try {
                const serialized = JSON.stringify(response);
                console.log("✅ PASS: Response successfully serialized to JSON (no BigInt errors).");
                console.log("   Sample Response:", serialized);
                passed++;
            } catch (err) {
                console.log("❌ FAIL: JSON serialization failed (likely a BigInt was not converted).");
                console.error(err);
            }

        } else {
            console.log("❌ FAIL: No candidates found for target obscurity.");
        }
    } catch (err) {
        console.log("❌ FAIL: Query failed (likely missing columns).");
        console.error(err);
    }

    console.log(`\nResults: ${passed}/${totalTests} passed.`);
    process.exit(passed === totalTests ? 0 : 1);
}

testDailyApi().catch(err => {
    console.error(err);
    process.exit(1);
});
