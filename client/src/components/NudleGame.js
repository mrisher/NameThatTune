import React, { useState, useEffect, useRef } from "react";
import Webamp from "webamp";
import Fuse from "fuse.js";
import { validateGuess } from "./searchLogic";
import { getFriendlyParisDate } from "../utils/stats";

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
        default:
            return "⬜";
    }
};

const TARGET_MOVIE = {
    songTitle: "Wild Things", // mapped to songTitle for validateGuess compatibility
    artistName: "1998",       // mapped to artistName for validateGuess compatibility
    year: 1998
};

const validateNudleGuess = (selectedMovie) => {
    const targetTitle = "Wild Things";
    const targetYear = "1998";

    const guessTitle = selectedMovie.trackName || "";
    const guessYear = selectedMovie.artistName || "";

    const clean = (str) => str.toLowerCase().replace(/[^a-z0-9\s]/g, "").trim();

    const targetTitleClean = clean(targetTitle);
    const guessTitleClean = clean(guessTitle);

    // Green: Perfect match of title and year
    if (guessTitleClean === targetTitleClean && guessYear === targetYear) {
        return "green";
    }

    // Yellow: Shares a title word with target title ("wild" or "things")
    const targetWords = ["wild", "things"];
    const guessWords = guessTitleClean.split(/\s+/).filter(w => w.length > 0);

    const hasTitleWordMatch = guessWords.some(w => targetWords.includes(w)) || 
                              guessTitleClean.includes("wild things");

    if (hasTitleWordMatch) {
        return "yellow";
    }

    // Red: Otherwise (even if year matches 1998)
    return "red";
};

const HINTS_POOL = [
    "Released in 1998.",
    "Genres: Crime, Drama, Mystery, Thriller.",
    "Stars Neve Campbell, Denise Richards, Kevin Bacon, and Matt Dillon.",
    "It is a notorious Florida-set noir thriller featuring a series of wild plot twists and double-crosses.",
    "Directed by John McNaughton."
];

// NudleSearch: client-side fuzzy search on local nudle_movies.json list
const NudleSearch = ({ onSelect, disabled }) => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [fuse, setFuse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);

    useEffect(() => {
        fetch("/nudle_movies.json")
            .then(res => res.json())
            .then(data => {
                const f = new Fuse(data, {
                    keys: ["trackName"],
                    threshold: 0.35,
                    limit: 5
                });
                setFuse(f);
            })
            .catch(err => console.error("Error loading nudle movies:", err));
    }, []);

    useEffect(() => {
        if (!query || query.length < 2 || !fuse) {
            setResults([]);
            setHasSearched(false);
            return;
        }

        setLoading(true);
        const timer = setTimeout(() => {
            const searchResults = fuse.search(query).map(r => r.item);
            setResults(searchResults);
            setLoading(false);
            setHasSearched(true);
        }, 150);

        return () => clearTimeout(timer);
    }, [query, fuse]);

    const handleSelect = (movie) => {
        setQuery("");
        setResults([]);
        setHasSearched(false);
        onSelect(movie);
    };

    return (
        <div style={{ position: "relative", width: "100%" }}>
            <input
                type="text"
                placeholder="Guess the movie..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                disabled={disabled}
                className="winamp-input"
            />

            {(results.length > 0 || hasSearched) && (
                <ul className="search-menu">
                    {results.length > 0 ? (
                        results.map((movie) => (
                            <li
                                key={`${movie.trackName}-${movie.artistName}`}
                                onClick={() => handleSelect(movie)}
                            >
                                <div style={{ fontSize: "14px" }}>
                                    <strong>{movie.trackName}</strong>
                                    <br />
                                    <span style={{ fontSize: "12px", opacity: 0.7 }}>{movie.artistName}</span>
                                </div>
                            </li>
                        ))
                    ) : (
                        <li>
                            <div style={{ fontSize: "14px", textAlign: "center", opacity: 0.7 }}>
                                No results
                            </div>
                        </li>
                    )}
                </ul>
            )}
            {loading && <div style={{ position: "absolute", right: "10px", top: "8px", color: "#00ff00", fontSize: "12px" }}>[LOADING...]</div>}
        </div>
    );
};

const NudleGame = () => {
    const [guesses, setGuesses] = useState([]);
    const [gameState, setGameState] = useState("playing"); // playing, won, lost
    const [showCropModal, setShowCropModal] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [timeLeft, setTimeLeft] = useState(0);
    const [showShareModal, setShowShareModal] = useState(false);
    const [shareText, setShareText] = useState("");
    const [unlockedHintsCount, setUnlockedHintsCount] = useState(0);
    const [showHintModal, setShowHintModal] = useState(false);
    const [showResultModal, setShowResultModal] = useState(false);

    const webampRef = useRef(null);
    const webampContainerRef = useRef(null);

    const gameStateRef = useRef(gameState);
    useEffect(() => { gameStateRef.current = gameState; }, [gameState]);

    const guessesRef = useRef(guesses);
    useEffect(() => { guessesRef.current = guesses; }, [guesses]);

    // Handle mobile Webamp resizing scale
    useEffect(() => {
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

    // Persisted state loading
    useEffect(() => {
        const savedStateJson = localStorage.getItem("nudle_saved_state");
        if (savedStateJson) {
            try {
                const savedState = JSON.parse(savedStateJson);
                setGuesses(savedState.guesses || []);
                setGameState(savedState.gameState || "playing");
                setUnlockedHintsCount(savedState.unlockedHintsCount || 0);
                if (savedState.gameState === "won" || savedState.gameState === "lost") {
                    setShowResultModal(true);
                }
            } catch (e) {
                console.error("Error parsing nudle saved state:", e);
            }
        }
    }, []);

    // Persisted state saving
    useEffect(() => {
        const stateToSave = {
            guesses,
            gameState,
            unlockedHintsCount
        };
        localStorage.setItem("nudle_saved_state", JSON.stringify(stateToSave));
    }, [guesses, gameState, unlockedHintsCount]);

    // Initialize Webamp component
    useEffect(() => {
        if (!webampRef.current && webampContainerRef.current) {
            const isMobile = window.innerWidth <= 600;

            const webamp = new Webamp({
                initialTracks: [
                    {
                        url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/2b/41/65/2b4165ca-f51e-8a76-b753-ed2f68ebe7a6/mzaf_7306756370131904318.plus.aac.p.m4a",
                        metaData: {
                            artist: gameStateRef.current === "playing" ? "NUDLE SIGHT LEVEL" : "John McNaughton",
                            title: gameStateRef.current === "playing" ? "PRESS PLAY FOR CROP" : "Wild Things (1998)",
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

            // Ensure Webamp is paused on launch to prevent auto-triggering the crop viewer modal
            webamp.skinIsLoaded().then(() => {
                webamp.pause();
                webamp.seekToTime(0);
            });

            // Subscribe to Webamp state changes to open/close the crop viewer.
            // We only react to play/pause *transitions* — the crop viewer's own
            // countdown timer (see useEffect below) handles the visible countdown
            // and auto-close. Reacting to every timeupdate/playing event re-rendered
            // the modal several times per second, which (a) left the countdown stuck
            // on mobile where timeupdate stalls, and (b) drowned the close button in
            // a re-render storm so its tap never registered as a click on touch.
            let lastStatus = null;
            const unsubscribe = webamp.store.subscribe(() => {
                const state = webamp.store.getState();
                const status = state.media.status;

                if (status === "PLAYING") {
                    if (gameStateRef.current !== "playing") {
                        lastStatus = status;
                        return; // Let them listen to audio freely if they won/lost!
                    }
                    if (lastStatus !== "PLAYING") {
                        setIsPlaying(true);
                        setShowCropModal(true);
                    }
                } else {
                    setIsPlaying(false);
                    setShowCropModal(false);
                }
                lastStatus = status;
            });

            return () => {
                unsubscribe();
                webamp.dispose();
                webampRef.current = null;
            };
        }
    }, [webampContainerRef]);

    // Self-contained countdown timer for the crop viewer modal. Decoupling the
    // countdown from Webamp's `timeupdate` events keeps it ticking reliably on
    // mobile (where timeupdate can stall) and stops the modal from re-rendering
    // several times per second. This single effect owns the countdown AND the
    // auto-close, so there's no race with a stale `timeLeft` on the opening render.
    useEffect(() => {
        if (!showCropModal) return;
        const duration = DURATION_MAP[guessesRef.current.length] || 5;
        let remaining = duration;
        setTimeLeft(remaining);
        const id = setInterval(() => {
            remaining -= 1;
            setTimeLeft(Math.max(0, remaining));
            if (remaining <= 0) {
                clearInterval(id);
                if (webampRef.current) {
                    try {
                        webampRef.current.pause();
                        webampRef.current.seekToTime(0);
                    } catch (e) {
                        console.error("Failed to auto-close crop viewer:", e);
                    }
                }
                setShowCropModal(false);
                setIsPlaying(false);
            }
        }, 1000);
        return () => clearInterval(id);
    }, [showCropModal]);

    // When gameState changes, update the Webamp track title metadata
    useEffect(() => {
        if (webampRef.current) {
            try {
                webampRef.current.setTracksToPlay([
                    {
                        url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/2b/41/65/2b4165ca-f51e-8a76-b753-ed2f68ebe7a6/mzaf_7306756370131904318.plus.aac.p.m4a",
                        metaData: {
                            artist: gameState === "playing" ? "NUDLE SIGHT LEVEL" : "John McNaughton",
                            title: gameState === "playing" ? "PRESS PLAY FOR CROP" : "Wild Things (1998)",
                        },
                    }
                ]);
            } catch (e) {
                console.error("Failed to update Webamp track info:", e);
            }
        }
    }, [gameState]);

    const getScaleFactor = () => {
        const round = guesses.length;
        if (gameState !== "playing") return 1.0;
        switch (round) {
            case 0: return 12;   // Tightest crop
            case 1: return 8;    // Tight crop
            case 2: return 5;    // Medium crop
            case 3: return 3;    // Medium-wide crop
            case 4: return 1.8;  // Wide crop
            case 5: return 1.0;  // Full image view
            default: return 1.0;
        }
    };

    const handleGuess = (selectedMovie) => {
        if (gameState !== "playing") return;

        const status = validateNudleGuess(selectedMovie);
        const newGuesses = [...guesses, { ...selectedMovie, status }];
        setGuesses(newGuesses);

        if (status === "green") {
            setGameState("won");
            recordResult(true, newGuesses.length);
            setShowResultModal(true);
        } else {
            if (newGuesses.length >= 6) {
                setGameState("lost");
                recordResult(false, 7);
                setShowResultModal(true);
            }
        }
    };

    const handleSkip = () => {
        if (gameState !== "playing") return;

        const newGuesses = [...guesses, { trackName: "Skipped", artistName: "-", status: "skipped" }];
        setGuesses(newGuesses);

        if (newGuesses.length >= 6) {
            setGameState("lost");
            recordResult(false, 7);
            setShowResultModal(true);
        }
    };

    const handleHint = () => {
        if (gameState !== "playing") return;

        let nextHintsCount = unlockedHintsCount;
        if (unlockedHintsCount < HINTS_POOL.length) {
            nextHintsCount = unlockedHintsCount + 1;
            setUnlockedHintsCount(nextHintsCount);
        }

        const newGuesses = [...guesses, { trackName: "Hint Revealed", artistName: "Hint", status: "skipped" }];
        setGuesses(newGuesses);
        setShowHintModal(true);

        if (newGuesses.length >= 6) {
            setGameState("lost");
            recordResult(false, 7);
            setShowResultModal(true);
        }
    };

    const recordResult = (won, score) => {
        const stored = localStorage.getItem("nudle_stats");
        let stats = stored ? JSON.parse(stored) : { plays: 0, wins: 0, history: [] };
        stats.plays += 1;
        if (won) stats.wins += 1;
        stats.history.push(score);
        localStorage.setItem("nudle_stats", JSON.stringify(stats));
    };

    const handleCloseViewer = () => {
        if (webampRef.current) {
            try {
                webampRef.current.pause();
                webampRef.current.seekToTime(0);
            } catch (e) {
                console.error("Failed to pause/reset Webamp on viewer close:", e);
            }
        }
        setShowCropModal(false);
        setIsPlaying(false);
    };

    const handleShare = () => {
        const friendlyDate = getFriendlyParisDate(new Date());
        const score = gameState === "won" ? guesses.length : "X";
        const resultEmoji = guesses
            .map((g) => getStatusIcon(g.status))
            .join("");
        const blankEmoji = "⬜".repeat(Math.max(0, 6 - guesses.length));
        
        const textToShare = `I solved today's NUDLE (${friendlyDate}) ${score}/6:\n\n${resultEmoji}${blankEmoji}\n\n${window.location.origin}/nudle`;
        
        setShareText(textToShare);
        setShowShareModal(true);
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(textToShare)
                .catch((e) => console.error("Failed to copy share text:", e));
        }
    };

    return (
        <>
            <h1 className="dudle-header">NUDLE</h1>
            <div className="obscurity-rating">
                Sight Level: {"🔍".repeat(guesses.length + 1)}
            </div>

            <div className="dudle-container">
                <div className="left-column">
                    <div id="webamp-container" ref={webampContainerRef}></div>
                </div>

                <div className="right-column">
                    <div className="playlist-window">
                        <div className="playlist-titlebar">
                            <span>MOVIE GUESSES</span>
                        </div>
                        <div className="playlist-content">
                            {guesses.map((g, i) => (
                                <div key={i} className={`playlist-entry ${g.status}`}>
                                    <span>
                                        {i + 1}. {getStatusIcon(g.status)}{" "}
                                        {g.trackName}
                                    </span>
                                    <span>{g.artistName}</span>
                                </div>
                            ))}
                            {[...Array(Math.max(0, 6 - guesses.length))].map((_, i) => (
                                <div key={i + guesses.length} className="playlist-entry">
                                    <span>
                                        {i + guesses.length + 1}. ⬜
                                        ------------------
                                    </span>
                                </div>
                            ))}
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
                                <NudleSearch onSelect={handleGuess} disabled={isPlaying} />
                                <button
                                    className="winamp-btn"
                                    onClick={handleSkip}
                                    disabled={isPlaying}
                                    style={{ width: "100%", marginTop: "4px" }}
                                >
                                    SKIP (+1 Round)
                                </button>
                                <button
                                    className="winamp-btn"
                                    onClick={handleHint}
                                    disabled={isPlaying}
                                    style={{ width: "100%", marginTop: "4px" }}
                                >
                                    HINT
                                </button>
                            </>
                        ) : (
                            <div style={{ textAlign: "center", color: "#00ff00" }}>
                                <div>
                                    {gameState === "won"
                                        ? "*** SENSE OF SIGHT WON! ***"
                                        : "--- OUT OF GUESSES ---"}
                                </div>
                                <div style={{ fontSize: "12px", margin: "4px 0" }}>
                                    Wild Things (1998)
                                </div>
                                <button
                                    className="winamp-btn"
                                    onClick={() => setShowResultModal(true)}
                                    style={{ width: "100%", marginBottom: "4px" }}
                                >
                                    VIEW FILM POSTER
                                </button>
                                <button
                                    className="winamp-btn"
                                    onClick={handleShare}
                                    style={{ width: "100%", marginBottom: "4px" }}
                                >
                                    SHARE RESULTS
                                </button>
                                <button
                                    className="winamp-btn"
                                    onClick={() => window.location.href = "/"}
                                    style={{ width: "100%" }}
                                >
                                    PLAY ORIGINAL DUDLE
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Hint Modal */}
            {showHintModal && (
                <div className="share-modal-overlay">
                    <div className="share-modal">
                        <div className="share-modal-titlebar">
                            <span>NUDLE HINT</span>
                            <span className="close-btn" onClick={() => setShowHintModal(false)}>🗙</span>
                        </div>
                        <div className="share-modal-content">
                            <div style={{ fontSize: "13px", color: "#00ff00", marginBottom: "12px", textAlign: "center" }}>
                                Hint Field {unlockedHintsCount} of {HINTS_POOL.length}:
                            </div>
                            <div style={{ fontSize: "14px", color: "#fff", lineHeight: "1.4", textAlign: "center", margin: "16px 0", minHeight: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                {unlockedHintsCount > 0 ? (
                                    <strong>{HINTS_POOL[unlockedHintsCount - 1]}</strong>
                                ) : (
                                    <span style={{ opacity: 0.7 }}>
                                        No hints unlocked yet. Click HINT in the control panel to reveal one!
                                    </span>
                                )}
                            </div>
                            <button
                                className="winamp-btn"
                                onClick={() => setShowHintModal(false)}
                                style={{ marginTop: "16px", width: "100%" }}
                            >
                                CLOSE
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Share Results Modal */}
            {showShareModal && (
                <div className="share-modal-overlay" style={{ zIndex: 10300 }}>
                    <div className="share-modal">
                        <div className="share-modal-titlebar">
                            <span>SHARE RESULTS</span>
                            <span className="close-btn" onClick={() => setShowShareModal(false)}>🗙</span>
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

            {/* Crop Viewer Modal (Countdown style) */}
            {showCropModal && (
                <div className="share-modal-overlay" style={{ zIndex: 10100 }}>
                    <div className="share-modal" style={{ width: "400px", maxWidth: "95vw" }}>
                        <div className="share-modal-titlebar">
                            <span>NUDLE CROP VIEWER</span>
                            <span style={{ color: "#00ff00", fontSize: "11px", fontWeight: "bold" }}>
                                CLOSING IN {timeLeft}s
                            </span>
                        </div>
                        <div className="share-modal-content" style={{ padding: 0 }}>
                            <div style={{
                                width: "100%",
                                height: "250px",
                                background: "#000",
                                borderBottom: "1px solid #555",
                                overflow: "hidden",
                                position: "relative"
                            }}>
                                <img
                                    src="/wild_things.jpg"
                                    alt="Nudle Crop"
                                    style={{
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: `translate(-46.6406%, -84.4697%) scale(${getScaleFactor()})`,
                                        transformOrigin: "46.6406% 84.4697%",
                                        maxWidth: "none",
                                        width: "100%",
                                        height: "auto"
                                    }}
                                />
                            </div>
                            <div style={{ display: "flex", justifyContent: "center", padding: "8px", background: "#2b2b35" }}>
                                <button className="winamp-btn" onClick={handleCloseViewer}>
                                    CLOSE VIEWER
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Game Over / Poster Reward Modal */}
            {showResultModal && (
                <div className="share-modal-overlay" style={{ zIndex: 10200 }}>
                    <div className="share-modal" style={{ width: "380px", maxWidth: "95vw" }}>
                        <div className="share-modal-titlebar">
                            <span>NUDLE RESULTS</span>
                            <span className="close-btn" onClick={() => setShowResultModal(false)}>🗙</span>
                        </div>
                        <div className="share-modal-content" style={{ textAlign: "center" }}>
                            <div style={{ fontSize: "15px", color: "#00ff00", fontWeight: "bold", marginBottom: "12px" }}>
                                {gameState === "won"
                                    ? "*** SENSE OF SIGHT WON! ***"
                                    : "--- OUT OF GUESSES ---"}
                            </div>
                            
                            <div style={{ 
                                width: "100%", 
                                height: "200px", 
                                overflow: "hidden", 
                                border: "2px solid #555", 
                                background: "#000",
                                position: "relative",
                                margin: "12px 0"
                            }}>
                                <img
                                    src="/wild_things.jpg"
                                    alt="Today's Movie"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "contain",
                                        display: "block"
                                    }}
                                />
                            </div>

                            <div style={{ fontSize: "14px", color: "#fff", fontWeight: "bold", marginBottom: "16px" }}>
                                TODAY'S FILM: WILD THINGS (1998)
                            </div>

                            <button
                                className="winamp-btn"
                                onClick={handleShare}
                                style={{ width: "100%", marginBottom: "8px" }}
                            >
                                SHARE RESULTS
                            </button>

                            <button
                                className="winamp-btn"
                                onClick={() => setShowResultModal(false)}
                                style={{ width: "100%" }}
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

export default NudleGame;
