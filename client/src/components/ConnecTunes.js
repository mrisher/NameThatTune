import React, { useState, useEffect, useRef } from "react";
import { connectunesSongs } from "../connectunesConfig";
import { getFriendlyParisDate } from "../utils/stats";

const SAMPLE_LENGTH_MS = 2500;

export default function ConnecTunes() {
  const [targetDay, setTargetDay] = useState(null);
  const [selected, setSelected] = useState([]);
  const [playingIndex, setPlayingIndex] = useState(null);
  const [gameState, setGameState] = useState("playing"); // playing, won, lost
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareText, setShareText] = useState("");
  const [currentDay, setCurrentDay] = useState(null);
  const [playCounts, setPlayCounts] = useState([0, 0, 0, 0]);

  const audioRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
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
    setCurrentDay(today);

    const savedStateJson = localStorage.getItem("connectunes_saved_state");
    if (savedStateJson) {
      try {
        const savedState = JSON.parse(savedStateJson);
        if (savedState.date === today) {
          setSelected(savedState.selected);
          setGameState(savedState.gameState);
          if (savedState.playCounts) {
            setPlayCounts(savedState.playCounts);
          }
        } else {
          localStorage.removeItem("connectunes_saved_state");
        }
      } catch (e) {
        console.error("Error parsing saved state", e);
      }
    }

    const todaysConfig = connectunesSongs.find((s) => s.day === today) || connectunesSongs[0];
    setTargetDay(todaysConfig);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (currentDay) {
      const stateToSave = {
        date: currentDay,
        selected,
        gameState,
        playCounts,
      };
      localStorage.setItem("connectunes_saved_state", JSON.stringify(stateToSave));
    }
  }, [currentDay, selected, gameState, playCounts]);

  const handlePlay = (index) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setPlayingIndex(null);

    const song = targetDay.songs[index];

    if (!audioRef.current) {
      audioRef.current = new Audio();
    }
    audioRef.current.src = song.audioUrl;
    audioRef.current.currentTime = 0;

    const playPromise = audioRef.current.play();

    if (playPromise !== undefined) {
      playPromise.then(() => {
        setPlayCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] += 1;
          return newCounts;
        });
        setPlayingIndex(index);
        timerRef.current = setTimeout(() => {
          if (audioRef.current) {
            audioRef.current.pause();
          }
          setPlayingIndex(null);
        }, SAMPLE_LENGTH_MS);
      }).catch(err => {
        console.error("Audio play failed:", err);
      });
    } else {
      setPlayCounts(prev => {
        const newCounts = [...prev];
        newCounts[index] += 1;
        return newCounts;
      });
      setPlayingIndex(index);
      timerRef.current = setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.pause();
        }
        setPlayingIndex(null);
      }, SAMPLE_LENGTH_MS);
    }
  };

  const handleSelect = (index) => {
    if (gameState !== "playing") return;

    if (selected.includes(index)) {
      setSelected(selected.filter(i => i !== index));
    } else {
      if (selected.length < 2) {
        setSelected([...selected, index]);
      }
    }
  };

  const getWords = (str) => {
    const stopWords = ['a', 'an', 'the', 'and', 'or', 'but', 'is', 'are', 'in', 'on', 'at', 'to', 'for', 'with', 'of', 'me', 'my', 'you', 'your', 'it', 'i'];
    return str.toLowerCase().replace(/[^\w\s]/g, "").split(/\s+/).filter(w => w.length > 0 && !stopWords.includes(w));
  };

  const checkWin = (idx1, idx2) => {
    const title1 = targetDay.songs[idx1].songTitle;
    const title2 = targetDay.songs[idx2].songTitle;
    const words1 = getWords(title1);
    const words2 = getWords(title2);

    for (let word of words1) {
      if (words2.includes(word)) {
        return true;
      }
    }
    return false;
  };

  const handleSubmit = () => {
    if (selected.length !== 2) return;
    const isWin = checkWin(selected[0], selected[1]);
    setGameState(isWin ? "won" : "lost");
    if (audioRef.current) {
      audioRef.current.pause();
      setPlayingIndex(null);
    }
  };

  const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const handleShare = () => {
    const friendlyDate = getFriendlyParisDate();
    const extraPlays = playCounts.reduce((acc, count) => acc + Math.max(0, count - 1), 0);
    
    let verb = "";
    if (gameState === "won") {
      if (extraPlays === 0) {
        verb = getRandom([
          "crushed", "aced", "dominated", "totally qwerted", "pulled a Rafael Devers on",
          "went deep over the Green Monster on", "hit a grand slam on"
        ]);
      } else if (extraPlays <= 2) {
        verb = getRandom([
          "solved", "figured out", "managed to beat", "got a solid hit on",
          "singled on", "doubled on"
        ]);
      } else {
        verb = getRandom([
          "survived", "barely survived", "squeaked by", "eventually solved",
          "ground out a win on", "eked out a win on"
        ]);
      }
    } else {
      if (extraPlays === 0) {
        verb = getRandom([
          "whiffed on", "blindly guessed and failed at", "rushed and bombed", "struck out on three pitches against"
        ]);
      } else if (extraPlays <= 2) {
        verb = getRandom([
          "struck out looking on", "couldn't figure out", "got bested by", "swung and missed on", "did a Jeter on"
        ]);
      } else {
        verb = getRandom([
          "agonized over and still failed", "overthought and bombed", "struggled mightily with", "got tortured by", "got Giancarlo Stanton'd by"
        ]);
      }
    }

    const resultEmoji = gameState === "won" ? "🟩" : "🟥";
    const yellows = "🟨".repeat(extraPlays);

    const textToShare = `I ${verb} today's ConnecTunes (${friendlyDate}):\n${yellows}${resultEmoji}\n${window.location.origin}/connectunes`;
    setShareText(textToShare);
    setShowShareModal(true);

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToShare).catch(err => {
        console.warn("Could not copy to clipboard", err);
      });
    }
  };

  if (!targetDay) return <div style={{ color: "#00ff00" }}>LOADING CONNECTUNES...</div>;

  return (
    <>
      <h1 className="dudle-header">CONNECTUNES</h1>
      <div className="dudle-container" style={{ flexDirection: 'column', alignItems: 'center' }}>

        <div style={{ marginBottom: "16px", color: "#ccc", textAlign: "center", maxWidth: "300px" }}>
          Find the 2 songs that share a word in their title!
        </div>

        <div className="connectunes-grid">
          {targetDay.songs.map((song, i) => {
            const label = ["A", "B", "C", "D"][i];
            const isSelected = selected.includes(i);
            const isPlaying = playingIndex === i;

            let btnClass = "connectunes-btn";
            if (gameState !== "playing") {
              if (isSelected) {
                btnClass += gameState === "won" ? " correct" : " incorrect";
              } else {
                 btnClass += " unselected";
              }
            } else if (isSelected) {
              btnClass += " selected";
            }

            return (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <div style={{ position: "relative" }}>
                  <button
                    className={btnClass}
                    onClick={() => {
                      handlePlay(i);
                    }}
                  >
                    {label}
                    {isPlaying && <div className="playing-indicator">🔊</div>}
                    {playCounts[i] > 0 && (
                      <div style={{ position: 'absolute', bottom: '5px', left: '5px', display: 'flex', gap: '4px' }}>
                        {Array.from({ length: playCounts[i] }).map((_, dotIndex) => (
                          <div
                            key={dotIndex}
                            style={{
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              backgroundColor: 'currentColor'
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </button>
                  {gameState === "playing" && (
                    <div
                      className="connectunes-select-box"
                      onClick={(e) => {
                        e.stopPropagation(); // prevent play
                        handleSelect(i);
                      }}
                    >
                      {isSelected ? "✔" : ""}
                    </div>
                  )}
                </div>
                {gameState !== "playing" && (
                  <div className="connectunes-song-info">
                    <div style={{fontWeight: "bold"}}>{song.songTitle}</div>
                    <div style={{fontSize: "12px", color: "#888"}}>{song.artistName}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="controls-window" style={{ marginTop: "20px" }}>
          {gameState === "playing" ? (
             <button
               className="winamp-btn"
               onClick={handleSubmit}
               disabled={selected.length !== 2}
               style={{ width: "100%" }}
             >
               SUBMIT
             </button>
          ) : (
             <div style={{ textAlign: "center", color: "#00ff00" }}>
               <div style={{ marginBottom: "8px" }}>
                 {gameState === "won" ? "*** YOU WON! ***" : "--- GAME OVER ---"}
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
                 onClick={() => window.location.href = '/'}
                 style={{ width: "100%" }}
               >
                 PLAY DUDLE
               </button>
             </div>
          )}
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
}
