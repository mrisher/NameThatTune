# Varying Obscurity Selection Plan

## Objective
Implement a daily song selection algorithm that deterministically provides varying obscurity levels (1-5) day over day, with a strong weighting towards more recognizable hits (e.g., 80% levels 1-3). This must respect the 28-day cooldown without creating an inefficient or infinite reshuffling loop.

## The Strategy: "Roll for Obscurity First"
Instead of picking a random song from the entire database and hoping it fits the obscurity profile, we will split the PRNG usage into two distinct steps:

1.  **Determine Today's Obscurity:**
    *   Initialize the PRNG with the daily seed (`rng = seedrandom(date)`).
    *   Make the *first* roll (`rng()`) to determine today's target obscurity based on a defined probability distribution.
    *   *Example Distribution:*
        *   Obscurity 1 (Mega Hits): 40%
        *   Obscurity 2 (Major Hits): 40%
        *   Obscurity 3 (Moderate Hits): 10%
        *   Obscurity 4 (Lesser Hits): 5%
        *   Obscurity 5 (Deep Cuts): 5%

2.  **Select the Song:**
    *   Query DuckDB to fetch *only* the candidates that match the `targetObscurity` for today.
    *   Use subsequent rolls of the same `rng` to pick an index from this specific candidate list.
    *   If the selected song is in the 28-day cooldown history, we simply roll again to pick a different song from the *same* obscurity tier.

## Why this solves the problem
By deciding the obscurity tier *first*, we guarantee the statistical distribution over time. The cooldown check only has to loop within a pre-filtered list of songs that already match the desired obscurity, preventing messy logic or performance issues.

## Implementation Steps (`server.js`)
1.  Define the probability thresholds.
2.  Perform the initial `rng()` roll to set `targetObscurity`.
3.  Update the DuckDB query to `WHERE obscurity = targetObscurity`.
4.  Proceed with the existing cooldown loop.