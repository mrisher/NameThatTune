const { Firestore } = require('@google-cloud/firestore');
const { Database } = require('duckdb-async');
const fs = require('fs');
const path = require('path');

async function analyze() {
  console.log("Starting difficulty analysis...");

  // 1. Initialize Firestore
  const firestore = new Firestore({
    ignoreUndefinedProperties: true,
    projectId: 'dudle-488408',
    databaseId: 'dudle'
  });

  // 2. Initialize DuckDB
  const db = await Database.create(':memory:');
  const parquetPath = path.join(__dirname, 'billboard_aggregates.parquet');
  await db.run(`CREATE TABLE billboard_aggregates AS SELECT * FROM '${parquetPath}'`);

  // 3. Parse History from config.js
  const configContent = fs.readFileSync(path.join(__dirname, 'client/src/config.js'), 'utf8');
  const matches = [...configContent.matchAll(/"day":\s*"([^"]+)",\s*"songTitle":\s*"([^"]+)",\s*"artistName":\s*"([^"]+)"/g)];
  const history = matches.map(m => ({
    day: m[1],
    title: Buffer.from(m[2], 'base64').toString(),
    artist: Buffer.from(m[3], 'base64').toString()
  }));

  console.log(`Found ${history.length} historical songs in config.js`);

  // 4. Fetch Stats from Firestore
  const statsSnap = await firestore.collection('daily_stats').get();
  const dailyStats = {};
  statsSnap.forEach(doc => {
    dailyStats[doc.id] = doc.data();
  });

  console.log(`Fetched stats for ${Object.keys(dailyStats).length} days from Firestore`);

  const results = [];

  for (const song of history) {
    const stats = dailyStats[song.day];
    if (!stats) continue;

    // Get Billboard metadata
    const metadata = await db.all(
      `SELECT highest_rank, weeks_on_chart, peak_year, obscurity 
       FROM billboard_aggregates 
       WHERE (lower(artist) = lower(?) AND lower(song_title) = lower(?))
          OR (lower(song_title) = lower(?) AND lower(artist) LIKE ?)
       LIMIT 1`,
      song.artist, song.title, song.title, `%${song.artist.split(' ')[0]}%`
    );

    const m = metadata[0] || {};
    
    // Calculate difficulty metrics
    const scores = stats.scores || {};
    const totalPlays = Object.values(scores).reduce((a, b) => a + b, 0);
    const winRate = totalPlays > 0 ? ( (totalPlays - (scores['X'] || 0)) / totalPlays * 100).toFixed(1) : 0;
    const avgScore = totalPlays > 0 ? (Object.entries(scores).reduce((acc, [s, count]) => {
        if (s === 'X') return acc + (7 * count);
        return acc + (parseInt(s) * count);
    }, 0) / totalPlays).toFixed(2) : 0;

    results.push({
      day: song.day,
      artist: song.artist,
      title: song.title,
      peak: m.highest_rank,
      year: m.peak_year,
      weeks: m.weeks_on_chart,
      obscurity: m.obscurity,
      plays: totalPlays,
      winRate: parseFloat(winRate),
      avgScore: parseFloat(avgScore)
    });
  }

  // 5. Output Report
  console.log("\n--- Difficulty Correlation Report ---");
  console.log("Day        | Win% | Avg | Peak | Year | Song");
  console.log("-----------|------|-----|------|------|----------------------------------");
  results.sort((a, b) => a.winRate - b.winRate).forEach(r => {
    const winRate = (r.winRate || 0).toString().padStart(4);
    const avgScore = (r.avgScore || 0).toString().padEnd(3);
    const peak = (r.peak || "???").toString().padStart(4);
    const year = r.year || "????";
    console.log(`${r.day} | ${winRate}% | ${avgScore} | ${peak} | ${year} | ${r.artist} - ${r.title}`);
  });

  // Calculate Era Win Rates
  const eras = {};
  results.forEach(r => {
      if (!r.year) return;
      const era = Math.floor(r.year / 10) * 10;
      if (!eras[era]) eras[era] = { totalWinRate: 0, count: 0 };
      eras[era].totalWinRate += r.winRate;
      eras[era].count++;
  });

  console.log("\n--- Era Analysis ---");
  Object.entries(eras).sort().forEach(([era, data]) => {
      console.log(`${era}s: Average Win Rate ${(data.totalWinRate / data.count).toFixed(1)}% (${data.count} songs)`);
  });

  // Calculate Peak Rank vs Win Rate
  const peakBuckets = { "Top 10": { win: 0, c: 0 }, "11-40": { win: 0, c: 0 } };
  results.forEach(r => {
      if (r.peak <= 10) { peakBuckets["Top 10"].win += r.winRate; peakBuckets["Top 10"].c++; }
      else { peakBuckets["11-40"].win += r.winRate; peakBuckets["11-40"].c++; }
  });

  console.log("\n--- Peak Rank Analysis ---");
  Object.entries(peakBuckets).forEach(([b, d]) => {
      if (d.c > 0) console.log(`${b}: Average Win Rate ${(d.win / d.c).toFixed(1)}%`);
  });

  // 6. Simulation with New Weights
  console.log("\n--- Simulation: 5 Examples Per Tier ---");
  
  function calcWeight(row) {
    const peak_year = typeof row.peak_year === 'bigint' ? Number(row.peak_year) : row.peak_year;
    const highest_rank = typeof row.highest_rank === 'bigint' ? Number(row.highest_rank) : row.highest_rank;
    const weeks_on_chart = typeof row.weeks_on_chart === 'bigint' ? Number(row.weeks_on_chart) : row.weeks_on_chart;

    let w = 1.0;
    
    // Major Hits Boost (Across all eras)
    if (highest_rank <= 10) {
        w *= 4.0;
    } else if (highest_rank <= 20) {
        w *= 2.0;
    }

    // Longevity as Proxy for "Radio Popularity"
    // Songs that stayed on the chart for a long time are much more likely to be recognizable.
    if (weeks_on_chart >= 20) {
        w *= 3.0;
    } else if (weeks_on_chart >= 10) {
        w *= 1.5;
    }

    // Slight era preference (1980-2005) but no hard penalty for newer stuff
    if (peak_year >= 1980 && peak_year <= 2005) {
        w *= 1.5;
    }

    return w;
  }

  const rawAllSongs = await db.all("SELECT * FROM billboard_aggregates");
  const allSongs = rawAllSongs.map(s => {
      const newS = { ...s };
      for (const key in newS) {
          if (typeof newS[key] === 'bigint') newS[key] = Number(newS[key]);
      }
      return newS;
  });
  
  const tiers = [1, 2, 3, 4, 5];

  for (const t of tiers) {
      const candidates = allSongs.filter(s => s.obscurity === t);
      if (candidates.length === 0) {
          console.log(`\nNo candidates for Tier ${t}`);
          continue;
      }

      // Calculate weights and sample
      const weighted = candidates.map(s => ({ ...s, weight: calcWeight(s) }));
      const totalWeight = weighted.reduce((acc, s) => acc + s.weight, 0);
      
      console.log(`\nTier ${t} (Total Candidates: ${candidates.length}):`);
      
      const sampled = [];
      const usedIndices = new Set();
      for (let i = 0; i < Math.min(5, candidates.length); i++) {
          let roll = Math.random() * totalWeight;
          for (let j = 0; j < weighted.length; j++) {
              roll -= weighted[j].weight;
              if (roll <= 0) {
                  sampled.push(weighted[j]);
                  break;
              }
          }
      }

      sampled.forEach(s => {
          console.log(`- ${s.artist} - ${s.song_title} (${s.peak_year}, Peak: #${s.highest_rank}, Weeks: ${s.weeks_on_chart})`);
      });
  }

  process.exit(0);
}

analyze().catch(err => {
  console.error(err);
  process.exit(1);
});
