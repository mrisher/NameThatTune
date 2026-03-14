import React, { useState, useEffect, useRef } from "react";
import Webamp from "webamp";
import Search from "./Search";
import { songs } from "../config";
import Fuse from "fuse.js";

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
            return "⬛";
        default:
            return "⬜";
    }
};

const Game = () => {
    const [guesses, setGuesses] = useState([]);
    const [gameState, setGameState] = useState("playing"); // playing, won, lost
    const [unlockDuration, setUnlockDuration] = useState(1);
    const [targetSong, setTargetSong] = useState(null);
    const [isDebug, setIsDebug] = useState(false);
    const [showShareModal, setShowShareModal] = useState(false);
    const [shareText, setShareText] = useState("");
    const [scale, setScale] = useState(1);

    const webampRef = useRef(null);
    const webampContainerRef = useRef(null);
    const unlockDurationRef = useRef(unlockDuration);

    useEffect(() => {
        unlockDurationRef.current = unlockDuration;
    }, [unlockDuration]);

    useEffect(() => {
        const handleResize = () => {
            let currentScale = 1;
            if (window.innerWidth <= 600) {
                currentScale = window.innerWidth / 275;
            }
            setScale(currentScale);
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
        const params = new URLSearchParams(window.location.search);
        setIsDebug(params.get("debug") === "1");

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

        const todaysSong = songs.find((s) => s.day === today) || songs[0];
        setTargetSong(todaysSong);
    }, []);

    useEffect(() => {
        if (targetSong && !webampRef.current && webampContainerRef.current) {
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
                    equalizer: { position: { x: 0, y: 116 }, closed: false },
                    milkdrop: { position: { x: 0, y: 0 }, closed: true },
                },
                windowLayout: {
                    main: { position: { left: 0, top: 0 } },
                    playlist: { position: { left: 0, top: 0 }, closed: true },
                    equalizer: { position: { left: 0, top: 116 } },
                    milkdrop: { position: { left: 0, top: 0 }, closed: true },
                },
            });

            webamp.renderWhenReady(webampContainerRef.current);
            webampRef.current = webamp;

            // Subscribe to state changes to handle playback duration
            const unsubscribe = webamp.store.subscribe(() => {
                const state = webamp.store.getState();
                // Webamp stores time in seconds
                if (state.media.status === "PLAYING") {
                    const elapsedSinceOffset =
                        state.media.timeElapsed - (targetSong.offset || 0);
                    if (elapsedSinceOffset >= unlockDurationRef.current) {
                        webamp.stop();
                        webamp.seekToTime(targetSong.offset || 0);
                    }
                }
            });

            // Initial seek to offset
            webamp.skinIsLoaded().then(() => {
                webamp.seekToTime(targetSong.offset || 0);
            });

            return () => {
                unsubscribe();
                webamp.dispose();
                webampRef.current = null;
            };
        }
    }, [targetSong]);

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

        const normalizeFuzzy = (str) =>
            str
                .toLowerCase()
                .replace(/\([^)]*\)/g, "")
                .replace(/\[[^\]]*\]/g, "")
                .replace(/[^\w\s]/g, "")
                .trim();

        const normalizeExact = (str) => str.toLowerCase().trim();

        const targetArtistFuzzy = normalizeFuzzy(targetSong.artistName);
        const targetTitleFuzzy = normalizeFuzzy(targetSong.songTitle);
        const guessArtistFuzzy = normalizeFuzzy(selectedTrack.artistName || "");
        const guessTitleFuzzy = normalizeFuzzy(selectedTrack.trackName || "");

        const targetArtistExact = normalizeExact(targetSong.artistName);
        const targetTitleExact = normalizeExact(targetSong.songTitle);
        const guessArtistExact = normalizeExact(selectedTrack.artistName || "");
        const guessTitleExact = normalizeExact(selectedTrack.trackName || "");

        const options = { includeScore: true, threshold: 0.4 };

        const artistFuse = new Fuse([targetArtistFuzzy], options);
        const titleFuse = new Fuse([targetTitleFuzzy], options);

        const isArtistFuzzy =
            targetArtistFuzzy === guessArtistFuzzy ||
            targetArtistFuzzy.includes(guessArtistFuzzy) ||
            guessArtistFuzzy.includes(targetArtistFuzzy) ||
            artistFuse.search(guessArtistFuzzy).length > 0;

        const isTitleFuzzy =
            targetTitleFuzzy === guessTitleFuzzy ||
            targetTitleFuzzy.includes(guessTitleFuzzy) ||
            guessTitleFuzzy.includes(targetTitleFuzzy) ||
            titleFuse.search(guessTitleFuzzy).length > 0;

        const isArtistExact = targetArtistExact === guessArtistExact;
        const isTitleExact = targetTitleExact === guessTitleExact;

        let status = "red";
        if (isTitleExact && isArtistExact) {
            status = "green";
        } else if (isArtistFuzzy || isTitleFuzzy) {
            status = "yellow";
        }

        const newGuesses = [...guesses, { ...selectedTrack, status }];
        setGuesses(newGuesses);

        if (status === "green") {
            setGameState("won");
            setUnlockDuration(15);
            recordScore(newGuesses.length);
        } else {
            if (newGuesses.length >= 6) {
                setGameState("lost");
                setUnlockDuration(15);
                recordScore(7); // Loss/skip penalty score
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
            recordScore(7); // Loss/skip penalty score
        } else {
            setUnlockDuration(DURATION_MAP[newGuesses.length] || 5);
        }
    };

    const recordScore = (scoreNumber) => {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-GB', {
            timeZone: 'Europe/Paris',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
        const parts = formatter.formatToParts(now);
        let y, m, d;
        for (const p of parts) {
            if (p.type === 'year') y = p.value;
            if (p.type === 'month') m = p.value;
            if (p.type === 'day') d = p.value;
        }
        const dateString = `${y}-${m}-${d}`;

        const cookieName = 'dudle_history=';
        let historyStr = "";
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let c = cookies[i].trim();
            if (c.indexOf(cookieName) === 0) {
                historyStr = c.substring(cookieName.length, c.length);
            }
        }

        let historyObj = historyStr ? JSON.parse(decodeURIComponent(historyStr)) : {};

        // Fill in missed days with a penalty of 7 (X)
        const sortedDates = Object.keys(historyObj).sort();
        const lastDateStr = sortedDates.length > 0 ? sortedDates[sortedDates.length - 1] : null;
        if (lastDateStr) {
            const lastDateParts = lastDateStr.split('-');
            const lastDate = new Date(Date.UTC(lastDateParts[0], lastDateParts[1] - 1, lastDateParts[2]));
            const currentDateParts = dateString.split('-');
            const currentDate = new Date(Date.UTC(currentDateParts[0], currentDateParts[1] - 1, currentDateParts[2]));

            const daysDiff = Math.round((currentDate - lastDate) / (1000 * 60 * 60 * 24));
            for (let i = 1; i < daysDiff; i++) {
                const missedDate = new Date(lastDate.getTime() + (i * 1000 * 60 * 60 * 24));
                const my = missedDate.getUTCFullYear();
                const mm = ('0' + (missedDate.getUTCMonth() + 1)).slice(-2);
                const md = ('0' + missedDate.getUTCDate()).slice(-2);
                const missedDateString = `${my}-${mm}-${md}`;
                historyObj[missedDateString] = 7; // penalty
            }
        }

        if (!historyObj.hasOwnProperty(dateString)) {
            historyObj[dateString] = scoreNumber;
            document.cookie = cookieName + encodeURIComponent(JSON.stringify(historyObj)) + "; max-age=31536000; path=/";
        }
    };

    const handleShare = () => {
        let resultEmoji = "";
        guesses.forEach((g) => {
            resultEmoji += getStatusIcon(g.status);
        });

        const score = gameState === "won" ? guesses.length : "X";

        // Generate friendly date string
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-GB', {
            timeZone: 'Europe/Paris',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
        const parts = formatter.formatToParts(now);
        let y, m, d;
        for (const p of parts) {
            if (p.type === 'year') y = p.value;
            if (p.type === 'month') m = p.value;
            if (p.type === 'day') d = p.value;
        }
        const friendlyDateString = `${d}/${m}/${y}`;

        // Read history for stats
        const cookieName = 'dudle_history=';
        let historyStr = "";
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let c = cookies[i].trim();
            if (c.indexOf(cookieName) === 0) {
                historyStr = c.substring(cookieName.length, c.length);
            }
        }

        let historyObj = historyStr ? JSON.parse(decodeURIComponent(historyStr)) : {};
        const dates = Object.keys(historyObj).sort();
        const values = dates.map(dt => historyObj[dt]);

        // Calculate Streak (win is < 7)
        let streak = 0;
        for (let i = values.length - 1; i >= 0; i--) {
            if (values[i] < 7) streak++;
            else break;
        }

        // Calculate 7-Day Average
        const last7Values = values.slice(Math.max(values.length - 7, 0));
        const sum7 = last7Values.reduce((a, b) => a + b, 0);
        const avg7 = last7Values.length > 0 ? (sum7 / last7Values.length).toFixed(1) : 0;

        // Calculate Median
        const sortedValues = [...values].sort((a, b) => a - b);
        let median = 0;
        if (sortedValues.length > 0) {
            const mid = Math.floor(sortedValues.length / 2);
            median = sortedValues.length % 2 !== 0 ? sortedValues[mid] : ((sortedValues[mid - 1] + sortedValues[mid]) / 2).toFixed(1);
        }

        // Calculate StdDev (sigma)
        const mean = values.reduce((a, b) => a + b, 0) / values.length;
        const variance = values.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / values.length;
        const stddev = Math.sqrt(variance).toFixed(1);

        // Calculate Kurtosis (nerdy stat: beta_2)
        const m4 = values.reduce((a, b) => a + Math.pow(b - mean, 4), 0) / values.length;
        const kurtosis = variance > 0 ? (m4 / Math.pow(variance, 2)).toFixed(2) : 0;

        let textToShare = `Dudle - ${friendlyDateString}\n`;
        textToShare += `Today's score: ${score}/6 ${resultEmoji}\n`;
        textToShare += `🔥 Win Streak: ${streak}\n`;
        textToShare += `📅 7-Day Avg: ${avg7}\n`;
        textToShare += `🎯 Median: ${median}\n`;
        textToShare += `📏 StdDev (σ): ${stddev}\n`;
        textToShare += `⛰️ Kurtosis (β₂): ${kurtosis}\n`;
        textToShare += `\n${window.location.href}`;

        navigator.clipboard.writeText(textToShare).then(() => {
            setShareText(textToShare);
            setShowShareModal(true);
        });
    };

    if (!targetSong) return <div style={{ color: "#00ff00" }}>LOADING...</div>;

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
                                <Search onSelect={handleGuess} />
                                <button
                                    className="winamp-btn"
                                    onClick={handleSkip}
                                    style={{ width: "100%", marginTop: "4px" }}
                                >
                                    SKIP (+{DURATION_MAP[guesses.length] || 1}s)
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
                                    onClick={() => window.location.reload()}
                                    style={{ width: "100%" }}
                                >
                                    PLAY AGAIN
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

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
        </>
    );
};

export default Game;
