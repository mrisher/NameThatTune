export function getAverage(arr) {
    if (!arr || arr.length === 0) return 0;
    const sum = arr.reduce((acc, val) => acc + val, 0);
    return sum / arr.length;
}

export function getMedian(arr) {
    if (!arr || arr.length === 0) return 0;
    const sorted = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
        return (sorted[mid - 1] + sorted[mid]) / 2;
    }
    return sorted[mid];
}

export function getMode(arr) {
    if (!arr || arr.length === 0) return 0;
    const counts = {};
    let maxCount = 0;
    let mode = arr[0];

    for (const num of arr) {
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] > maxCount) {
            maxCount = counts[num];
            mode = num;
        }
    }
    return mode;
}

export function getStdDev(arr, mean) {
    if (!arr || arr.length === 0) return 0;
    if (mean === undefined) mean = getAverage(arr);

    const squareDiffs = arr.map(value => {
        const diff = value - mean;
        return diff * diff;
    });

    const avgSquareDiff = getAverage(squareDiffs);
    return Math.sqrt(avgSquareDiff);
}

export function getCoV(arr) {
    if (!arr || arr.length === 0) return 0;
    const mean = getAverage(arr);
    if (mean === 0) return 0; // Avoid division by zero

    const stdDev = getStdDev(arr, mean);
    return stdDev / mean;
}

// Helper to get date string in Paris timezone
export function getParisDateString(date = new Date()) {
    return new Intl.DateTimeFormat("en-CA", {
        timeZone: "Europe/Paris",
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    }).format(date); // YYYY-MM-DD
}

// Friendly Paris date for sharing
export function getFriendlyParisDate(date = new Date()) {
    return new Intl.DateTimeFormat("en-US", {
        timeZone: "Europe/Paris",
        month: "short",
        day: "numeric",
        year: "numeric"
    }).format(date);
}

export function calculateDaysBetween(dateString1, dateString2) {
    // Expects YYYY-MM-DD format
    const [y1, m1, d1] = dateString1.split('-').map(Number);
    const [y2, m2, d2] = dateString2.split('-').map(Number);

    // Use UTC to avoid daylight saving time 23-hour differences rounding down to 0 days
    const date1 = Date.UTC(y1, m1 - 1, d1);
    const date2 = Date.UTC(y2, m2 - 1, d2);

    const diffTime = Math.abs(date2 - date1);
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}
