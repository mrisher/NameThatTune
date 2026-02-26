import React, { useState, useEffect, useRef } from 'react';
import Webamp from 'webamp';
import Search from './Search';
import { songs } from '../config';
import Fuse from 'fuse.js';

const DURATION_MAP = {
  0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 5
};

const getStatusIcon = (status) => {
  switch (status) {
    case 'green': return '🟩';
    case 'yellow': return '🟨';
    case 'red': return '🟥';
    case 'skipped': return '⬛';
    default: return '⬜';
  }
};

const Game = () => {
  const [guesses, setGuesses] = useState([]);
  const [gameState, setGameState] = useState('playing'); // playing, won, lost
  const [unlockDuration, setUnlockDuration] = useState(1);
  const [targetSong, setTargetSong] = useState(null);
  const [isDebug, setIsDebug] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareText, setShareText] = useState("");
  const [scale, setScale] = useState(1);
  
  const webampRef = useRef(null);
  const webampContainerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      let currentScale = 1;
      if (window.innerWidth <= 600) {
        currentScale = window.innerWidth / 275;
      }
      setScale(currentScale);
      document.documentElement.style.setProperty('--webamp-scale', currentScale);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setIsDebug(params.get('debug') === '1');

    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Europe/Paris',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).formatToParts(new Date());
    const year = parts.find(p => p.type === 'year').value;
    const month = parts.find(p => p.type === 'month').value;
    const day = parts.find(p => p.type === 'day').value;
    const today = `${year}-${month}-${day}`;

    const todaysSong = songs.find(s => s.day === today) || songs[0];
    setTargetSong(todaysSong);
  }, []);

  useEffect(() => {
    if (targetSong && !webampRef.current && webampContainerRef.current) {
      const webamp = new Webamp({
        initialTracks: [{
          url: targetSong.audioUrl,
          metaData: {
            artist: '?????',
            title: '?????'
          }
        }],
        __initialWindowLayout: {
          main: { position: { x: 0, y: 0 } },
          playlist: { position: { x: 0, y: 0 }, closed: true },
          equalizer: { position: { x: 0, y: 116 }, closed: false },
          milkdrop: { position: { x: 0, y: 0 }, closed: true }
        }
      });

      webamp.renderWhenReady(webampContainerRef.current);
      webampRef.current = webamp;

      // Subscribe to state changes to handle playback duration
      const unsubscribe = webamp.store.subscribe(() => {
        const state = webamp.store.getState();
        // Webamp stores time in seconds
        if (state.media.status === 'PLAYING') {
           const elapsedSinceOffset = state.media.timeElapsed - (targetSong.offset || 0);
           if (elapsedSinceOffset >= unlockDuration) {
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
  }, [targetSong, unlockDuration]);

  const handleGuess = (selectedTrack) => {
    if (!targetSong) return;

    const options = { includeScore: true, threshold: 0.4 };
    const artistFuse = new Fuse([targetSong.artistName], options);
    const titleFuse = new Fuse([targetSong.songTitle], options);

    const isArtistCorrect = artistFuse.search(selectedTrack.artistName || "").length > 0;
    const isTitleCorrect = titleFuse.search(selectedTrack.trackName || "").length > 0;

    let status = 'red';
    if (isTitleCorrect && isArtistCorrect) {
      status = 'green';
    } else if (isArtistCorrect) {
      status = 'yellow';
    }

    const newGuesses = [...guesses, { ...selectedTrack, status }];
    setGuesses(newGuesses);

    if (status === 'green') {
      setGameState('won');
      setUnlockDuration(15);
      // Reveal song in Webamp
      try {
        webampRef.current?.store.dispatch({
          type: 'SET_MEDIA_TAGS',
          id: 0,
          title: targetSong.songTitle,
          artist: targetSong.artistName
        });
      } catch (e) {
        console.error("Failed to set media tags:", e);
      }
    } else {
      if (newGuesses.length >= 6) {
        setGameState('lost');
        setUnlockDuration(15);
      } else {
        setUnlockDuration(DURATION_MAP[newGuesses.length] || 5);
      }
    }
  };

  const handleSkip = () => {
    const newGuesses = [...guesses, { trackName: "Skipped", artistName: "-", status: 'skipped' }];
    setGuesses(newGuesses);
    if (newGuesses.length >= 6) {
      setGameState('lost');
      setUnlockDuration(15);
    } else {
      setUnlockDuration(DURATION_MAP[newGuesses.length] || 5);
    }
  };

  const handleShare = () => {
    let resultEmoji = "";
    guesses.forEach(g => {
      resultEmoji += getStatusIcon(g.status);
    });

    const textToShare = `I solved today's Dudle in ${guesses.length}: ${resultEmoji} ${window.location.href}`;
    navigator.clipboard.writeText(textToShare).then(() => {
      setShareText(textToShare);
      setShowShareModal(true);
    });
  };

  if (!targetSong) return <div style={{ color: '#00ff00' }}>LOADING...</div>;

  return (
    <>
      <h1 className="dudle-header">DUDLE</h1>
      <div className="dudle-container">
        <div className="left-column">
          <div 
            id="webamp-container" 
            ref={webampContainerRef}
            style={{ 
              marginBottom: scale !== 1 ? `${232 * (scale - 1)}px` : '0px'
            }}
          ></div>
        </div>

        <div className="right-column">
          <div className="playlist-window">
            <div className="playlist-titlebar">
              <span>GUESSES</span>
              <span>🗙</span>
            </div>
            <div className="playlist-content">
              {guesses.map((g, i) => (
                <div key={i} className={`playlist-entry ${g.status}`}>
                  <span>{i + 1}. {getStatusIcon(g.status)} {g.trackName}</span>
                  <span>{g.artistName}</span>
                </div>
              ))}
              {[...Array(Math.max(0, 6 - guesses.length))].map((_, i) => (
                <div key={i + guesses.length} className="playlist-entry">
                  <span>{i + guesses.length + 1}. ⬜ ------------------</span>
                </div>
              ))}
            </div>
            <div className="playlist-footer">
               <span>{guesses.length}/6 GUESSES</span>
               <div style={{ display: 'flex', gap: '4px' }}>
                  <span>ADD</span><span>REM</span><span>SEL</span><span>MISC</span>
               </div>
            </div>
          </div>
          
          <div className="controls-window">
            {gameState === 'playing' ? (
              <>
                <Search onSelect={handleGuess} />
                <button className="winamp-btn" onClick={handleSkip} style={{ width: '100%', marginTop: '4px' }}>
                  SKIP (+{DURATION_MAP[guesses.length] || 1}s)
                </button>
              </>
            ) : (
              <div style={{ textAlign: 'center', color: '#00ff00' }}>
                <div>{gameState === 'won' ? '*** YOU WON! ***' : '--- GAME OVER ---'}</div>
                <div style={{ fontSize: '12px', margin: '4px 0' }}>{targetSong.songTitle} - {targetSong.artistName}</div>
                {gameState === 'won' && (
                  <button className="winamp-btn" onClick={handleShare} style={{ width: '100%', marginBottom: '4px' }}>SHARE RESULTS</button>
                )}
                <button className="winamp-btn" onClick={() => window.location.reload()} style={{ width: '100%' }}>PLAY AGAIN</button>
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
              <span className="close-btn" onClick={() => setShowShareModal(false)}>🗙</span>
            </div>
            <div className="share-modal-content">
              <div>Copied to clipboard!</div>
              <div style={{ marginTop: '12px', padding: '8px', background: '#000', border: '1px solid #00ff00', whiteSpace: 'pre-wrap', wordBreak: 'break-word', fontSize: '12px' }}>
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
