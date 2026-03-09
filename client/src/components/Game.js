import React, { useState, useEffect, useRef } from "react";
import Webamp from "webamp";
import Search from "./Search";
import { songs } from "../config";
import Fuse from "fuse.js";
import {
    getParisDateString,
    getFriendlyParisDate,
    calculateDaysBetween,
    getAverage,
    getMedian,
    getMode,
    getStdDev,
    getCoV
} from "../utils/stats";

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
            }
        }
    }, [gameState]);

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

    const handleShare = () => {
        let resultEmoji = "";
        guesses.forEach((g) => {
            resultEmoji += getStatusIcon(g.status);
        });

        const score = gameState === "won" ? guesses.length : "X";

        let statsText = "";
        const storedData = localStorage.getItem("dudle_stats");
        if (storedData) {
            const statsData = JSON.parse(storedData);
            const { streak, scores } = statsData;
            if (scores && scores.length > 0) {
                const last7 = scores.slice(-7);
                const avg7 = getAverage(last7).toFixed(1);

                const median = getMedian(scores);
                const mode = getMode(scores);
                const stdDev = getStdDev(scores).toFixed(2);
                const cov = getCoV(scores).toFixed(2);

                statsText = `\nWin Streak: ${streak}\n7-Day Avg: ${avg7}\nMed: ${median}\nMo: ${mode}\nσ: ${stdDev}\nCoV: ${cov}`;
            }
        }

        const friendlyDate = getFriendlyParisDate();

        const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
        let verb = "played";
        if (gameState === "won") {
            if (score === 1) verb = getRandom(["crushed", "demolished", "destroyed", "aced", "nailed", "obliterated", "dominated", "totally qwerted"]);
            else if (score <= 3) verb = getRandom(["won", "beat", "conquered", "solved", "bested", "triumphed over"]);
            else if (score === 4) verb = getRandom(["eeked by on", "squeaked by on", "scraped by on", "managed to beat"]);
            else if (score === 5) verb = getRandom(["barely made it on", "survived", "just about got", "limped past"]);
            else if (score === 6) verb = getRandom(["narrowly escaped defeat on", "pulled off a miracle on", "escaped by the skin of my teeth on", "clutched up on"]);
        } else {
            verb = getRandom(["whiffed on", "got housed by", "screwed the pooch on", "did a Jeter on", "bombed", "got completely stumped by", "took an L on"]);
        }

        const textToShare = `I ${verb} today's Dudle (${friendlyDate}) ${score}/6: ${resultEmoji} ${window.location.href}${statsText}`;
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
