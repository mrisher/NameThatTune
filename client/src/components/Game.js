import React, { useState, useEffect, useMemo } from 'react';
import Player from './Player';
import Search from './Search';
import { songs } from '../config';
import Fuse from 'fuse.js';

// Map: Number of previous guesses -> Duration for next attempt
const DURATION_MAP = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  4: 5,
  5: 5
};

const getStatusColor = (status) => {
  switch (status) {
    case 'green': return '#1db954';
    case 'yellow': return '#f59b23';
    case 'red': return '#e91e63';
    case 'skipped': return '#555';
    default: return '#ccc';
  }
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

  // Initialize game state on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const debugMode = params.get('debug') === '1';
    setIsDebug(debugMode);

    if (debugMode) {
      // Pick random song initially? Or wait for shuffle? Let's pick random.
      pickRandomSong();
    } else {
      // Pick today's song
      const today = new Date().toISOString().split('T')[0];
      const todaysSong = songs.find(s => s.day === today);
      if (todaysSong) {
        setTargetSong(todaysSong);
      } else {
        // Fallback: Pick the latest one or show error?
        // Let's just pick the last one in the list if today > last date
        // Or loop? Let's pick index based on date hash to be robust.
        // For now, let's just default to the first one if not found.
        console.warn("No song found for today, defaulting to first song.");
        setTargetSong(songs[0]);
      }
    }
  }, []);

  const pickRandomSong = () => {
    const randomIndex = Math.floor(Math.random() * songs.length);
    setTargetSong(songs[randomIndex]);
    setGuesses([]);
    setGameState('playing');
    setUnlockDuration(1);
  };

  const handleGuess = (selectedTrack) => {
    if (!targetSong) return;

    const targetArtist = targetSong.artistName;
    const targetTitle = targetSong.songTitle;

    // Fuse options for fuzzy matching
    const options = {
      includeScore: true,
      threshold: 0.4,
    };

    const artistFuse = new Fuse([targetArtist], options);
    const titleFuse = new Fuse([targetTitle], options);

    const artistResult = artistFuse.search(selectedTrack.artistName || "");
    const titleResult = titleFuse.search(selectedTrack.trackName || "");

    const isArtistCorrect = artistResult.length > 0;
    const isTitleCorrect = titleResult.length > 0;

    let status = 'red';

    if (isTitleCorrect && isArtistCorrect) {
      status = 'green';
      setGameState('won');
      setUnlockDuration(15);
    } else if (isArtistCorrect) {
      status = 'yellow';
    } else {
      status = 'red';
    }

    const newGuesses = [...guesses, { ...selectedTrack, status }];
    setGuesses(newGuesses);

    if (status !== 'green') {
      if (newGuesses.length >= 6) {
        setGameState('lost');
        setUnlockDuration(15);
      } else {
        const nextDuration = DURATION_MAP[newGuesses.length] || 5;
        setUnlockDuration(nextDuration);
      }
    }
  };

  const handleSkip = () => {
    const skippedTrack = { trackName: "Skipped", artistName: "-", status: 'skipped' };
    const newGuesses = [...guesses, skippedTrack];
    setGuesses(newGuesses);

    if (newGuesses.length >= 6) {
      setGameState('lost');
      setUnlockDuration(15);
    } else {
        const nextDuration = DURATION_MAP[newGuesses.length] || 5;
        setUnlockDuration(nextDuration);
    }
  };

  const handleShare = () => {
    // Generate text blob
    // Example: "I solved today's Dudle in 4: 🟥🟥🟨🟩"
    let resultEmoji = "";
    guesses.forEach(g => {
      resultEmoji += getStatusIcon(g.status);
    });

    const shareText = `I solved today's Heardle Clone in ${guesses.length}: ${resultEmoji} ${window.location.href}`;
    navigator.clipboard.writeText(shareText).then(() => {
      alert("Copied to clipboard!");
    });
  };

  if (!targetSong) return <div>Loading...</div>;

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Heardle Clone</h1>
      {isDebug && (
        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
          <button onClick={pickRandomSong}>🔀 Shuffle (Debug)</button>
        </div>
      )}

      {/* Guesses Grid */}
      <div style={{ marginBottom: '20px' }}>
        {guesses.map((g, i) => (
          <div key={i} style={{
            padding: '10px',
            marginBottom: '5px',
            backgroundColor: getStatusColor(g.status),
            color: 'white',
            borderRadius: '4px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span>{g.trackName} - {g.artistName}</span>
            <span>{g.status === 'green' ? '✅' : g.status === 'yellow' ? '⚠️' : g.status === 'skipped' ? '⏭️' : '❌'}</span>
          </div>
        ))}
        {/* Fill empty slots */}
        {[...Array(Math.max(0, 6 - guesses.length))].map((_, i) => (
          <div key={i + guesses.length} style={{
            padding: '10px',
            marginBottom: '5px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            height: '20px',
            backgroundColor: '#f9f9f9'
          }} />
        ))}
      </div>

      <Player
        key={targetSong.audioUrl} // Reset player on song change
        audioUrl={targetSong.audioUrl}
        offset={targetSong.offset}
        duration={unlockDuration}
      />

      {gameState === 'playing' ? (
        <div style={{ marginTop: '20px' }}>
          <Search onSelect={handleGuess} />
          <button
            onClick={handleSkip}
            style={{
                display: 'block',
                width: '100%',
                marginTop: '10px',
                padding: '10px',
                backgroundColor: '#eee',
                border: '1px solid #ccc',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '16px'
            }}
          >
            Skip (+1s)
          </button>
        </div>
      ) : (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <h2>{gameState === 'won' ? '🎉 You Won! 🎉' : 'Game Over 😢'}</h2>
          <p>The song was: <br/><strong>{targetSong.songTitle}</strong> by <strong>{targetSong.artistName}</strong></p>

          {gameState === 'won' && (
            <button
              onClick={handleShare}
              style={{
                marginTop: '10px',
                padding: '10px 20px',
                backgroundColor: '#1db954',
                color: 'white',
                border: 'none',
                borderRadius: '20px',
                fontSize: '16px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '10px auto'
              }}
            >
              Share Result 📋
            </button>
          )}

          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: '10px',
              padding: '10px 20px',
              cursor: 'pointer',
              border: '1px solid #ccc',
              borderRadius: '20px',
              backgroundColor: '#fff'
            }}>
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default Game;
