import React, { useState, useEffect, useRef } from "react";
import Webamp from "webamp";
import Search from "./Search";
import Fuse from "fuse.js";
import { validateGuess, STOPWORDS } from "./searchLogic";
import {
    getParisDateString,
    getFriendlyParisDate,
    calculateDaysBetween,
    getAverage,
} from "../utils/stats";
import { getSeededRandom } from "../utils/random";


const DURATION_MAP = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    4: 5,
    5: 5,
};

const getStatusIcon = (status) => {
    switch (status) {
        case "green":
            return "🟩";
        case "yellow":
            return "🟨";
        case "red":
            return "🟥";
        case "skipped":
            return "⏩";
        case "jumped":
            return "🟡";
        case "jump_penalty":
            return "⬛";
        case "hint":
            return "❓";
        default:
            return "⬜";
    }
};

const Game = () => {
    const [guesses, setGuesses] = useState([]);
    const [gameState, setGameState] = useState("playing"); // playing, won, lost
    const [unlockDuration, setUnlockDuration] = useState(1);
    const [targetSong, setTargetSong] = useState(null);
    const [hasJumped, setHasJumped] = useState(false);
    const [jumpOffset, setJumpOffset] = useState(0);
    const [songDuration, setSongDuration] = useState(0);
    const [showShareModal, setShowShareModal] = useState(false);
    const [shareText, setShareText] = useState("");
    const [yesterdayStats, setYesterdayStats] = useState(null);
    const [userName, setUserName] = useState(localStorage.getItem("dudle_name") || "");
    const [isSavingName, setIsSavingName] = useState(false);
    const [showNameModal, setShowNameModal] = useState(false);
    const [showHintModal, setShowHintModal] = useState(false);
    const [currentHint, setCurrentHint] = useState("");
    const [currentDay, setCurrentDay] = useState(null);

    const webampRef = useRef(null);
    const webampContainerRef = useRef(null);
    const unlockDurationRef = useRef(unlockDuration);
    const jumpOffsetRef = useRef(jumpOffset);
    const gameStateRef = useRef(gameState);
    const startTimeRef = useRef(Date.now());
    const playCountRef = useRef(0);
    const winSecondsRef = useRef(null);
    const winPlaysRef = useRef(null);

    useEffect(() => {
        gameStateRef.current = gameState;
    }, [gameState]);

    useEffect(() => {
        unlockDurationRef.current = unlockDuration;
    }, [unlockDuration]);

    useEffect(() => {
        jumpOffsetRef.current = jumpOffset;
    }, [jumpOffset]);

    useEffect(() => {
        // Ensure UUID exists
        if (!localStorage.getItem("dudle_uuid")) {
            const uuid = typeof crypto !== 'undefined' && crypto.randomUUID
                ? crypto.randomUUID()
                : 'test-uuid-' + Math.random().toString(36).substring(2, 15);
            localStorage.setItem("dudle_uuid", uuid);
        }

        const handleResize = () => {
            let currentScale = 1;
            if (window.innerWidth <= 600) {
                currentScale = window.innerWidth / 275;
            }
            document.documentElement.style.setProperty(
                "--webamp-scale",
                currentScale,
            );
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (gameState === "won" || gameState === "lost") {
            const today = getParisDateString();
            const storedData = localStorage.getItem("dudle_stats");
            let statsData = storedData ? JSON.parse(storedData) : {
                lastPlayedDate: null,
                streak: 0,
                scores: []
            };

            // Only record if we haven't recorded for today already
            if (statsData.lastPlayedDate !== today) {
                const score = gameState === "won" ? guesses.length : 7;

                // Determine streak
                if (gameState === "won") {
                    if (statsData.lastPlayedDate) {
                        const daysDiff = calculateDaysBetween(statsData.lastPlayedDate, today);
                        if (daysDiff === 1) {
                            statsData.streak += 1; // Continue streak
                        } else if (daysDiff > 1) {
                            statsData.streak = 1; // Reset streak
                        }
                    } else {
                        statsData.streak = 1; // First win
                    }
                } else {
                    statsData.streak = 0; // Lost breaks the streak
                }

                statsData.lastPlayedDate = today;
                statsData.scores.push(score);

                localStorage.setItem("dudle_stats", JSON.stringify(statsData));

                // Send to backend
                const wrongGuesses = guesses
                    .filter(g => g.status !== "green" && g.status !== "skipped")
                    .map(g => `${g.artistName} - ${g.trackName}`);

                fetch('/api/stats', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        date: today,
                        score: gameState === "won" ? guesses.length : "X",
                        wrongGuesses,
                        uuid: localStorage.getItem("dudle_uuid"),
                        name: localStorage.getItem("dudle_name") || "Anonymous"
                    })
                }).catch(err => console.error("Error saving game stats:", err));

                if (!localStorage.getItem("dudle_name") || localStorage.getItem("dudle_name") === "Anonymous") {
                    setShowNameModal(true);
                }
            }
        }
    }, [gameState, guesses]); // guesses is stable when gameState changes to won/lost in this app's flow

    const handleSaveName = async () => {
        setIsSavingName(true);
        localStorage.setItem("dudle_name", userName);
        const uuid = localStorage.getItem("dudle_uuid");

        try {
            await fetch('/api/user', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ uuid, name: userName })
            });
        } catch (err) {
            console.error("Error updating user name:", err);
        } finally {
            setIsSavingName(false);
            setShowNameModal(false);
            handleShare();
        }
    };

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        // setIsDebug(params.get("debug") === "1");

        const parts = new Intl.DateTimeFormat("en-US", {
            timeZone: "Europe/Paris",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        }).formatToParts(new Date());
        const year = parts.find((p) => p.type === "year").value;
        const month = parts.find((p) => p.type === "month").value;
        const day = parts.find((p) => p.type === "day").value;
        const today = `${year}-${month}-${day}`;

        const isForceCold = params.get("forceCold") === "1";
        const apiUrl = `/api/daily?date=${today}${isForceCold ? '&forceCold=1' : ''}`;

        fetch(apiUrl)
            .then(res => res.json())
            .then(todaysSong => {
                if (todaysSong.error) {
                    setTargetSong({ outOfService: true });
                    return;
                }
                setTargetSong(todaysSong);
                setCurrentDay(today);

                const savedStateJson = localStorage.getItem("dudle_saved_state");
                if (savedStateJson) {
                    try {
                        const savedState = JSON.parse(savedStateJson);
                        if (savedState.date === today) {
                            setGuesses(savedState.guesses);
                            setGameState(savedState.gameState);
                            setHasJumped(savedState.hasJumped);
                            setJumpOffset(savedState.jumpOffset);
                            setUnlockDuration(savedState.unlockDuration);
                        } else {
                            localStorage.removeItem("dudle_saved_state");
                        }
                    } catch (e) {
                        console.error("Error parsing saved state", e);
                    }
                }
            })
            .catch(err => {
                console.error("Error fetching daily song:", err);
                setTargetSong({ outOfService: true });
            });

        // Fetch yesterday's stats
        const yesterdayDate = new Date();
        yesterdayDate.setDate(yesterdayDate.getDate() - 1);
        const yesterdayStr = getParisDateString(yesterdayDate);
        fetch(`/api/stats?date=${yesterdayStr}`)
            .then(res => res.json())
            .then(data => {
                if (data && data.winners && data.winners.length > 0) {
                    setYesterdayStats(data);
                }
            })
            .catch(err => console.error("Error fetching yesterday's stats:", err));

    }, []);

    useEffect(() => {
        if (currentDay) {
            const stateToSave = {
                date: currentDay,
                guesses,
                gameState,
                hasJumped,
                jumpOffset,
                unlockDuration,
            };
            localStorage.setItem("dudle_saved_state", JSON.stringify(stateToSave));
        }
    }, [currentDay, guesses, gameState, hasJumped, jumpOffset, unlockDuration]);

    useEffect(() => {
        if (targetSong && !webampRef.current && webampContainerRef.current) {
            const isMobile = window.innerWidth <= 600;

            const webamp = new Webamp({
                initialTracks: [
                    {
                        url: targetSong.audioUrl,
                        metaData: {
                            artist: gameState === "playing" ? "?????" : targetSong.artistName,
                            title: gameState === "playing" ? "?????" : targetSong.songTitle,
                        },
                    },
                ],
                __initialWindowLayout: {
                    main: { position: { x: 0, y: 0 } },
                    playlist: { position: { x: 0, y: 0 }, closed: true },
                    equalizer: { position: { x: 0, y: 116 }, closed: isMobile },
                    milkdrop: { position: { x: 0, y: 0 }, closed: true },
                },
                windowLayout: {
                    main: { position: { left: 0, top: 0 } },
                    playlist: { position: { left: 0, top: 0 }, closed: true },
                    equalizer: { position: { left: 0, top: 116 }, closed: isMobile },
                    milkdrop: { position: { left: 0, top: 0 }, closed: true },
                },
            });

            webamp.renderWhenReady(webampContainerRef.current);
            webampRef.current = webamp;

            let lastSeekTime = 0;
            let lastStatus = null;
            let lastTimeElapsed = -1;
            let lastTimeChangeTimestamp = null;

            // Stall detector: if playhead fails to advance while PLAYING, it's a broken URL
            const stallInterval = setInterval(() => {
                if (!webampRef.current) return;
                const state = webampRef.current.store.getState();
                // ONLY check for stalls if the user has actually attempted to play at least once
                if (state.media.status === "PLAYING" && playCountRef.current > 0) {
                    const now = Date.now();
                    if (lastTimeChangeTimestamp === null) {
                        lastTimeChangeTimestamp = now;
                    }
                    if (state.media.timeElapsed !== lastTimeElapsed) {
                        lastTimeElapsed = state.media.timeElapsed;
                        lastTimeChangeTimestamp = now;
                    } else if (now - lastTimeChangeTimestamp > 6000) { // 6s threshold
                        console.error("Audio playback stalled for 6s (URL likely invalid). Triggering Out of Service.");
                        setTargetSong(prev => ({ ...prev, outOfService: true }));
                        clearInterval(stallInterval);
                    }
                } else {
                    lastTimeChangeTimestamp = null;
                }
            }, 1000);

            // Subscribe to state changes to handle playback duration
            const unsubscribe = webamp.store.subscribe(() => {
                const state = webamp.store.getState();
                if (state.media.length && state.media.length > 0) {
                    setSongDuration(state.media.length);
                }
                if (state.media.status === "PLAYING" && lastStatus !== "PLAYING") {
                    playCountRef.current += 1;
                }
                lastStatus = state.media.status;
                // Webamp stores time in seconds
                if (state.media.status === "PLAYING") {
                    if (gameStateRef.current === "won" || gameStateRef.current === "lost") {
                        return;
                    }

                    const expectedStart = (targetSong.offset || 0) + jumpOffsetRef.current;
                    const expectedEnd = expectedStart + unlockDurationRef.current;
                    const now = Date.now();

                    // If we are before the expected start by a significant amount, seek to start
                    if (state.media.timeElapsed < expectedStart - 0.2) {
                        // Debounce seek to avoid spamming the Redux store while audio loads
                        if (now - lastSeekTime > 800) {
                            lastSeekTime = now;
                            webamp.seekToTime(expectedStart);
                        }
                    } else if (state.media.timeElapsed >= expectedEnd) {
                        webamp.pause();
                        webamp.seekToTime(expectedStart);
                    }
                }
            });

            // Initial seek to offset
            webamp.skinIsLoaded().then(() => {
                webamp.seekToTime((targetSong.offset || 0) + jumpOffsetRef.current);
            });

            return () => {
                clearInterval(stallInterval);
                unsubscribe();
                webamp.dispose();
                webampRef.current = null;
            };
        }
    }, [targetSong, jumpOffset, unlockDuration, gameState]);

    useEffect(() => {
        if ((gameState === "won" || gameState === "lost") && targetSong && webampRef.current) {
            try {
                webampRef.current.setTracksToPlay([
                    {
                        url: targetSong.audioUrl,
                        metaData: {
                            artist: targetSong.artistName,
                            title: targetSong.songTitle,
                        },
                    }
                ]);
            } catch (e) {
                console.error("Failed to update track info:", e);
            }
        }
    }, [gameState, targetSong]);

    const handleGuess = (selectedTrack) => {
        if (!targetSong) return;

        const status = validateGuess(targetSong, selectedTrack, Fuse);

        const newGuesses = [...guesses, { ...selectedTrack, status }];
        setGuesses(newGuesses);

        if (status === "green") {
            if (newGuesses.length === 1) {
                winSecondsRef.current = Math.round((Date.now() - startTimeRef.current) / 1000);
                winPlaysRef.current = playCountRef.current;
            }
            setGameState("won");
            setUnlockDuration(15);
        } else {
            if (newGuesses.length >= 6) {
                setGameState("lost");
                setUnlockDuration(15);
            } else {
                setUnlockDuration(DURATION_MAP[newGuesses.length] || 5);
            }
        }
    };

    const handleSkip = () => {
        const newGuesses = [
            ...guesses,
            { trackName: "Skipped", artistName: "-", status: "skipped" },
        ];
        setGuesses(newGuesses);
        if (newGuesses.length >= 6) {
            setGameState("lost");
            setUnlockDuration(15);
        } else {
            setUnlockDuration(DURATION_MAP[newGuesses.length] || 5);
        }
    };

    const handleHint = () => {
        if (!targetSong) return;

        // Title words
        const titleWords = targetSong.songTitle
            .replace(/[^\w\s]/g, "")
            .split(/\s+/)
            .filter(word => word.length > 0 && !STOPWORDS.includes(word.toLowerCase()));

        // Artist hint
        let artistForHint = targetSong.artistName;
        if (artistForHint.toLowerCase().startsWith("the ")) artistForHint = artistForHint.substring(4);
        if (artistForHint.toLowerCase().startsWith("a ")) artistForHint = artistForHint.substring(2);
        const artistFirstLetter = artistForHint.charAt(0).toUpperCase();

        // Word counts
        const countWords = (str) => str.replace(/\([^)]*\)/g, "").replace(/\[[^\]]*\]/g, "").trim().split(/\s+/).filter(w => w.length > 0).length;

        const possibleHints = [
            `Artist starts with: ${artistFirstLetter}`,
            `Artist has ${countWords(targetSong.artistName)} word(s)`,
            `Title has ${countWords(targetSong.songTitle)} word(s)`,
            ...titleWords.map(w => `Title word: ${w}`)
        ];

        // Deduplicate
        const uniqueHints = Array.from(new Set(possibleHints));

        // Seeded shuffle so everyone gets the same hints in the same order
        const seedStr = targetSong.songTitle + targetSong.artistName;
        const rng = getSeededRandom(seedStr);

        for (let i = uniqueHints.length - 1; i > 0; i--) {
            const j = Math.floor(rng() * (i + 1));
            [uniqueHints[i], uniqueHints[j]] = [uniqueHints[j], uniqueHints[i]];
        }

        const previousHints = guesses.filter(g => g.status === "hint").length;

        let hintText = "No more hints available";
        if (previousHints < uniqueHints.length) {
            hintText = uniqueHints[previousHints];
        }

        setCurrentHint(hintText);
        setShowHintModal(true);

        const newGuesses = [
            ...guesses,
            { trackName: hintText, artistName: "-", status: "hint" },
        ];
        setGuesses(newGuesses);
        if (newGuesses.length >= 6) {
            setGameState("lost");
            setUnlockDuration(15);
        } else {
            setUnlockDuration(DURATION_MAP[newGuesses.length] || 5);
        }
    };

    const handleJump = () => {
        setHasJumped(true);
        const newOffset = 15 + guesses.length;
        setJumpOffset(newOffset);
        jumpOffsetRef.current = newOffset; // Update ref synchronously
        const newGuesses = [
            ...guesses,
            { trackName: "Jumped +15s", artistName: "-", status: "jumped" },
        ];
        setGuesses(newGuesses);
        if (newGuesses.length >= 6) {
            setGameState("lost");
            setUnlockDuration(15);
        } else {
            setUnlockDuration(DURATION_MAP[newGuesses.length] || 5);
        }

        if (webampRef.current) {
            webampRef.current.seekToTime((targetSong.offset || 0) + newOffset);
        }
    };

    const handleShare = () => {
        let resultEmoji = "";
        guesses.forEach((g) => {
            resultEmoji += getStatusIcon(g.status);
        });

        const score = gameState === "won" ? guesses.length : "X";

        if (
            gameState === "won" &&
            guesses.length === 1 &&
            winSecondsRef.current !== null &&
            winPlaysRef.current !== null
        ) {
            const playsLabel = winPlaysRef.current === 1 ? "play" : "plays";
            resultEmoji = `🟩 (in ${winSecondsRef.current} seconds with just ${winPlaysRef.current} ${playsLabel})`;
        }

        let statsText = "";
        const storedData = localStorage.getItem("dudle_stats");
        if (storedData) {
            const statsData = JSON.parse(storedData);
            const { streak, scores } = statsData;
            if (scores && scores.length > 0) {
                const last7 = scores.slice(-7);
                const avg7 = getAverage(last7).toFixed(1);

                statsText = `\nWin Streak: ${streak}\n7-Day Avg: ${avg7}`;
            }
        }

        const friendlyDate = getFriendlyParisDate();

        const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
        let verb = "played";
        if (gameState === "won") {
            if (score === 1) verb = getRandom(["was in perfect harmony with", "hit a high note on", "composed a masterpiece on", "was instrumental in beating", "conducted a clinic on", "hit a grand slam (not the baseball kind) on", "played first chair on", "was pitch-perfect on", "cranked the volume to 11 on", "unlocked the secret track on", "never missed a beat in", "started on a high note in", "rocked the world in", "flaunted my flawless scales in", "drummed up some excitement in"]);
            else if (score <= 3) verb = getRandom(["found the rhythm on", "stayed on beat for", "soundchecked", "tuned up on", "headlined", "remixed", "amplified", "orchestrated a win on", "jammed out to", "trebled my way through", "made sound decisions in", "scaled up"]);
            else if (score === 4) verb = getRandom(["stayed in the groove on", "didn't miss a beat on", "slow-danced through", "found the right key on", "harmonized with", "improvised a win on", "kept the tempo on", "scratched the surface of", "played it by ear in", "rolled with the rhythm in"]);
            else if (score === 5) verb = getRandom(["barely made the encore on", "survived the mosh pit on", "strummed past", "limped to the finish line on", "beat the drum for", "was a bit sharp/flat on", "almost hit a sour note on", "fumbled the sheet music for", "bassed it out in", "strummed up some courage for"]);
            else if (score === 6) verb = getRandom(["narrowly escaped the gong on", "pulled a miracle out of the hat on", "clutched the final chord on", "barely heard the music on", "just about stayed in tune for", "sweated through the solo on", "found the hidden track on", "survived the feedback on", "dodged the flat notes in", "conducted myself even in treble during"]);
        } else {
            verb = getRandom(["got gonged by", "was totally tone-deaf on", "broke a string on", "forgot the lyrics to", "hit a sour note on", "got stage fright on", "was out of sync with", "lost the beat on", "tanked the audition for", "got booed off the stage on", "experienced technical difficulties with", "got stuck in a loop on", "lost the sheet music for", "fumbled the mic on", "got upstaged by", "was a one-hit wonder on", "got drowned out by", "faced the music in", "missed the cue for", "was off-key for", "got skipped on", "blew the speakers on", "was in treble during", "hit a flat note in", "was out of tune in", "couldn't handle the pitch of", "sang the blues after", "took a wrong turn at B-flat in", "was tuning the wrong instrument in"]);
        }

        let yesterdayText = "";
        if (yesterdayStats && yesterdayStats.winners && yesterdayStats.winners.length > 0) {
            const winnersList = yesterdayStats.winners
                .map(w => `${w.name} (${w.score})`)
                .join(", ");
            yesterdayText = `\n\nwinners yesterday: ${winnersList}`;
        }

        const textToShare = `I ${verb} today's Dudle (${friendlyDate}) ${score}/6:\n\n${resultEmoji}\n\n${window.location.href}${statsText}${yesterdayText}`;
        setShareText(textToShare);
        setShowShareModal(true);

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(textToShare).catch(err => {
                console.warn("Could not copy to clipboard", err);
            });
        }
    };

    if (!targetSong) {
        return (
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#000',
                color: '#00ff00',
                fontFamily: 'monospace',
                zIndex: 9999
            }}>
                <div className="unicode-spinner" style={{ fontSize: '24px', marginBottom: '10px' }}>
                   ◌
                </div>
                <div>fetching today's song...</div>
                <style>{`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                    .unicode-spinner {
                        animation: spin 1s linear infinite;
                    }
                `}</style>
            </div>
        );
    }


    if (targetSong.outOfService || targetSong.audioUrl === "MISSING" || targetSong.audioUrl === "REPLACE_ME") {
        return (
            <>
                <h1 className="dudle-header">DUDLE</h1>
                <div style={{ color: "#00ff00", textAlign: "center", marginTop: "50px" }}>
                    <h2>UNDER CONSTRUCTION</h2>
                    <p>The Dudle is currently out of songs for today.</p>
                    <p>Please come back later!</p>
                </div>
            </>
        );
    }

    return (
        <>
            <h1 className="dudle-header">DUDLE</h1>
            <div className="dudle-container">
                <div className="left-column">
                    <div id="webamp-container" ref={webampContainerRef}></div>
                </div>

                <div className="right-column">
                    <div className="playlist-window">
                        <div className="playlist-titlebar">
                            <span>GUESSES</span>
                        </div>
                        <div className="playlist-content">
                            {guesses.map((g, i) => (
                                <div
                                    key={i}
                                    className={`playlist-entry ${g.status}`}
                                >
                                    <span>
                                        {i + 1}. {getStatusIcon(g.status)}{" "}
                                        {g.trackName}
                                    </span>
                                    <span>{g.artistName}</span>
                                </div>
                            ))}
                            {[...Array(Math.max(0, 6 - guesses.length))].map(
                                (_, i) => (
                                    <div
                                        key={i + guesses.length}
                                        className="playlist-entry"
                                    >
                                        <span>
                                            {i + guesses.length + 1}. ⬜
                                            ------------------
                                        </span>
                                    </div>
                                ),
                            )}
                        </div>
                        <div className="playlist-footer">
                            <span>{guesses.length}/6 GUESSES</span>
                            <div style={{ display: "flex", gap: "4px" }}>
                                <span>ADD</span>
                                <span>REM</span>
                                <span>SEL</span>
                                <span>MISC</span>
                            </div>
                        </div>
                    </div>

                    <div className="controls-window">
                        {gameState === "playing" ? (
                            <>
                                <Search onSelect={handleGuess} correctTrack={targetSong} />
                                <button
                                    className="winamp-btn"
                                    onClick={handleSkip}
                                    style={{ width: "100%", marginTop: "4px" }}
                                >
                                    SKIP (+1s)
                                </button>
                                <button
                                    className="winamp-btn"
                                    onClick={handleJump}
                                    disabled={hasJumped || guesses.length >= 6 || (songDuration > 0 && (targetSong.offset || 0) + 15 >= songDuration)}
                                    style={{ width: "100%", marginTop: "4px" }}
                                >
                                    JUMP +15s
                                </button>
                                <button
                                    className="winamp-btn"
                                    onClick={handleHint}
                                    disabled={guesses.length >= 6}
                                    style={{ width: "100%", marginTop: "4px" }}
                                >
                                    HINT
                                </button>
                            </>
                        ) : (
                            <div
                                style={{
                                    textAlign: "center",
                                    color: "#00ff00",
                                }}
                            >
                                <div>
                                    {gameState === "won"
                                        ? "*** YOU WON! ***"
                                        : "--- GAME OVER ---"}
                                </div>
                                <div
                                    style={{
                                        fontSize: "12px",
                                        margin: "4px 0",
                                    }}
                                >
                                    {targetSong.songTitle} -{" "}
                                    {targetSong.artistName}
                                </div>
                                {(gameState === "won" || gameState === "lost") && (
                                    <button
                                        className="winamp-btn"
                                        onClick={handleShare}
                                        disabled={showNameModal || !localStorage.getItem("dudle_name") || localStorage.getItem("dudle_name") === "Anonymous"}
                                        style={{
                                            width: "100%",
                                            marginBottom: "4px",
                                        }}
                                    >
                                        SHARE RESULTS
                                    </button>
                                )}
                                <button
                                    className="winamp-btn"
                                    onClick={() => window.location.href = '/connectunes'}
                                    style={{ width: "100%" }}
                                >
                                    PLAY CONNECTUNES
                                </button>
                                {yesterdayStats && yesterdayStats.winners && yesterdayStats.winners.length > 0 && (
                                    <div style={{ marginTop: "16px", textAlign: "left", fontSize: "11px", color: "#00ff00", borderTop: "1px dotted #00ff00", paddingTop: "8px" }}>
                                        <div style={{ marginBottom: "4px" }}>winners yesterday:</div>
                                        <div style={{ color: "#fff" }}>
                                            {yesterdayStats.winners
                                                .map(w => `${w.name} (${w.score})`)
                                                .join(", ")}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {showNameModal && (
                <div className="share-modal-overlay">
                    <div className="share-modal">
                        <div className="share-modal-titlebar">
                            <span>ENTER NAME</span>
                            <span
                                className="close-btn"
                                onClick={() => setShowNameModal(false)}
                            >
                                🗙
                            </span>
                        </div>
                        <div className="share-modal-content">
                            <div style={{ marginBottom: "12px", fontSize: "12px" }}>
                                Enter a name for the leaderboard!
                            </div>
                            <div style={{ display: "flex", gap: "8px" }}>
                                <input
                                    type="text"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && !isSavingName && userName.trim()) {
                                            handleSaveName();
                                        }
                                    }}
                                    style={{ flex: 1, background: "#000", color: "#00ff00", border: "1px solid #00ff00", fontFamily: "inherit", padding: "4px 8px" }}
                                    maxLength={20}
                                    autoFocus
                                />
                                <button
                                    className="winamp-btn"
                                    onClick={handleSaveName}
                                    disabled={isSavingName || !userName.trim()}
                                >
                                    {isSavingName ? "..." : "SAVE"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showShareModal && (
                <div className="share-modal-overlay">
                    <div className="share-modal">
                        <div className="share-modal-titlebar">
                            <span>SHARE RESULTS</span>
                            <span
                                className="close-btn"
                                onClick={() => setShowShareModal(false)}
                            >
                                🗙
                            </span>
                        </div>
                        <div className="share-modal-content">
                            <div>Copied to clipboard!</div>
                            <div
                                style={{
                                    marginTop: "12px",
                                    padding: "8px",
                                    background: "#000",
                                    border: "1px solid #00ff00",
                                    whiteSpace: "pre-wrap",
                                    wordBreak: "break-word",
                                    fontSize: "12px",
                                }}
                            >
                                {shareText}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showHintModal && (
                <div className="share-modal-overlay">
                    <div className="share-modal">
                        <div className="share-modal-titlebar">
                            <span>HINT</span>
                            <span
                                className="close-btn"
                                onClick={() => setShowHintModal(false)}
                            >
                                🗙
                            </span>
                        </div>
                        <div className="share-modal-content">
                            <div>{currentHint}</div>
                            <button
                                className="winamp-btn"
                                onClick={() => setShowHintModal(false)}
                                style={{ marginTop: "12px", width: "100%" }}
                            >
                                CLOSE
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Game;
