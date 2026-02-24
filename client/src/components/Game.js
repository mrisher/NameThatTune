import React, { useState, useEffect, useRef } from 'react';
import Webamp from 'webamp';
import Search from './Search';
import { songs } from '../config';
import Fuse from 'fuse.js';

const DURATION_MAP = {
  0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 5
};

const Game = () => {
  const [guesses, setGuesses] = useState([]);
  const [gameState, setGameState] = useState('playing'); // playing, won, lost
  const [unlockDuration, setUnlockDuration] = useState(1);
  const [targetSong, setTargetSong] = useState(null);
  const [isDebug, setIsDebug] = useState(false);
  
  const webampRef = useRef(null);
  const webampContainerRef = useRef(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setIsDebug(params.get('debug') === '1');

    const today = new Date().toISOString().split('T')[0];
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
        windowLayout: {
          main: { position: { top: 0, left: 0 } },
          playlist: { position: { top: 0, left: 0 }, closed: true },
          equalizer: { position: { top: 116, left: 0 }, closed: false },
          milkdrop: { position: { top: 0, left: 0 }, closed: true }
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
      setGameState('won');
      setUnlockDuration(15);
      // Reveal song in Webamp
      webampRef.current?.store.dispatch({
        type: 'SET_MEDIA_TAGS',
        id: 0,
        title: targetSong.songTitle,
        artist: targetSong.artistName
      });
    } else if (isArtistCorrect) {
      status = 'yellow';
    }

    const newGuesses = [...guesses, { ...selectedTrack, status }];
    setGuesses(newGuesses);

    if (status !== 'green') {
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

  if (!targetSong) return <div style={{ color: '#00ff00' }}>LOADING...</div>;

  return (
    <div className="dudle-container">
      <div className="left-column">
        <div id="webamp-container" ref={webampContainerRef}></div>
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
                <span>{i + 1}. {g.trackName}</span>
                <span>{g.artistName}</span>
              </div>
            ))}
            {[...Array(Math.max(0, 6 - guesses.length))].map((_, i) => (
              <div key={i + guesses.length} className="playlist-entry">
                <span>{i + guesses.length + 1}. ------------------</span>
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
              <button className="winamp-btn" onClick={() => window.location.reload()} style={{ width: '100%' }}>PLAY AGAIN</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Game;
