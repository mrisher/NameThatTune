import React, { useState, useEffect, useRef } from "react";
import { chordleSongs } from "../chordleConfig";
import { getFriendlyParisDate } from "../utils/stats";

export default function Chordle() {
  const [targetDay, setTargetDay] = useState(null);
  const [selected, setSelected] = useState([]);
  const [playingIndex, setPlayingIndex] = useState(null);
  const [gameState, setGameState] = useState("playing"); // playing, won, lost
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareText, setShareText] = useState("");

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

    const todaysConfig = chordleSongs.find((s) => s.day === today) || chordleSongs[0];
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

  const handlePlay = (index) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setPlayingIndex(null);

    const song = targetDay.songs[index];

    // Instead of instantiating a new Audio each time which might be blocked by browsers,
    // we manage a single Audio object.
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }
    audioRef.current.src = song.audioUrl;
    audioRef.current.currentTime = 0;

    audioRef.current.play().then(() => {
      setPlayingIndex(index);
      timerRef.current = setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.pause();
        }
        setPlayingIndex(null);
      }, 3000);
    }).catch(err => {
      console.error("Audio play failed:", err);
    });
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
    return str.toLowerCase().replace(/[^\w\s]/g, "").split(/\s+/).filter(w => w.length > 0);
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
    let verb = "";
    if (gameState === "won") {
      verb = getRandom([
        "crushed", "aced", "dominated", "totally qwerted", "pulled a Rafael Devers on",
        "went deep over the Green Monster on", "hit a grand slam on"
      ]);
    } else {
      verb = getRandom([
        "whiffed on", "did a Jeter on", "bombed", "got Aaron Judge'd by",
        "struck out looking against Gerrit Cole on", "got Giancarlo Stanton'd by"
      ]);
    }

    const labels = ["A", "B", "C", "D"];
    const emojiGrid = [0, 1, 2, 3].map(i => {
      if (selected.includes(i)) {
        return gameState === "won" ? "🟩" : "🟥";
      }
      return "⬜";
    });

    const gridStr = emojiGrid.slice(0,2).join("") + "\n" + emojiGrid.slice(2,4).join("");

    const textToShare = `I ${verb} today's Chordle (${friendlyDate}):\n${gridStr}\n${window.location.origin}/chordle`;
    setShareText(textToShare);
    setShowShareModal(true);

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToShare).catch(err => {
        console.warn("Could not copy to clipboard", err);
      });
    }
  };

  if (!targetDay) return <div style={{ color: "#00ff00" }}>LOADING CHORDLE...</div>;

  return (
    <>
      <h1 className="dudle-header">CHORDLE</h1>
      <div className="dudle-container" style={{ flexDirection: 'column', alignItems: 'center' }}>

        <div style={{ marginBottom: "16px", color: "#ccc", textAlign: "center", maxWidth: "300px" }}>
          Find the 2 songs that share a word in their title!
        </div>

        <div className="chordle-grid">
          {targetDay.songs.map((song, i) => {
            const label = ["A", "B", "C", "D"][i];
            const isSelected = selected.includes(i);
            const isPlaying = playingIndex === i;

            let btnClass = "chordle-btn";
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
                <button
                  className={btnClass}
                  onClick={() => {
                    handlePlay(i);
                  }}
                >
                  {label}
                  {isPlaying && <div className="playing-indicator">🔊</div>}
                  {gameState === "playing" && (
                    <div
                      className="chordle-select-box"
                      onClick={(e) => {
                        e.stopPropagation(); // prevent play
                        handleSelect(i);
                      }}
                    >
                      {isSelected ? "✔" : ""}
                    </div>
                  )}
                </button>
                {gameState !== "playing" && (
                  <div className="chordle-song-info">
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