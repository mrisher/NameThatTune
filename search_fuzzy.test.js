const request = require('supertest');
const { app, initDb } = require('./server');

async function runIntegrationTests() {
    console.log("--- Starting REAL Integration Tests for Fuzzy Search ---");
    process.env.NODE_ENV = 'test';
    await initDb();

    const testCases = [
        { query: 'nwa', expected: 'N.W.A' },
        { query: 'staying', expected: "Stayin' Alive" },
        { query: 'motley crue', expected: "Motley Crue" }
    ];

    const rankingCases = [
        { query: 'prince', expectedTopArtist: 'Prince' },
        { query: 'heart', expectedTopArtist: 'Heart' }
    ];

    let passed = 0;
    const normalize = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '');

    console.log("\n--- Part 1: Fuzzy Matching ---");
    for (const test of testCases) {
        const response = await request(app).get(`/api/search?q=${encodeURIComponent(test.query)}`);
        const results = response.body;
        const found = results.some(r => normalize(r.artistName).includes(normalize(test.expected)) || normalize(r.trackName).includes(normalize(test.expected)));
        if (found) {
            console.log(`✅ PASS: "${test.query}" found "${test.expected}" (Best: ${results[0]?.artistName})`);
            passed++;
        } else {
            console.log(`❌ FAIL: "${test.query}" did NOT find "${test.expected}"`);
        }
    }

    console.log("\n--- Part 2: Ranking Precision ---");
    let rankPassed = 0;
    for (const test of rankingCases) {
        const response = await request(app).get(`/api/search?q=${encodeURIComponent(test.query)}`);
        const results = response.body;
        const top = results[0];
        
        console.log(`Query "${test.query}" -> Top: ${top?.artistName} - ${top?.trackName} (Score: ${top?.score})`);
        
        const isCorrect = top && (normalize(top.artistName) === normalize(test.expectedTopArtist) || normalize(top.trackName) === normalize(test.expectedTopArtist));
        if (isCorrect) {
            console.log(`✅ PASS: "${test.query}" correctly ranked "${test.expectedTopArtist}" at #1`);
            rankPassed++;
        } else {
            console.log(`❌ FAIL: "${test.query}" ranked "${top?.artistName}" at #1 (Expected "${test.expectedTopArtist}")`);
        }
    }

    if (passed === testCases.length && rankPassed === rankingCases.length) {
        console.log("\nAll integration tests passed!");
        process.exit(0);
    } else {
        console.log("\nSome tests failed.");
        process.exit(1);
    }
}

runIntegrationTests();
