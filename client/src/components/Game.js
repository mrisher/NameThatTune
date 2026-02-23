import React, { useState } from 'react';
import Player from './Player';
import Search from './Search';
import { gameConfig } from '../config';
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

const Game = () => {
  const [guesses, setGuesses] = useState([]);
  const [gameState, setGameState] = useState('playing'); // playing, won, lost
  const [unlockDuration, setUnlockDuration] = useState(1);

  const handleGuess = (selectedTrack) => {
    const targetArtist = gameConfig.artistName;
    const targetTitle = gameConfig.songTitle;

    // Fuse options for fuzzy matching
    const options = {
      includeScore: true,
      threshold: 0.4, // 0.0 is perfect match, 1.0 is match anything
    };

    const artistFuse = new Fuse([targetArtist], options);
    const titleFuse = new Fuse([targetTitle], options);

    // Search for the guess in the target (list of 1)
    const artistResult = artistFuse.search(selectedTrack.artistName || "");
    const titleResult = titleFuse.search(selectedTrack.trackName || "");

    // Also fallback to includes for cases like "Queen" vs "Queen & David Bowie"
    // where fuzzy match might be weird if strings lengths differ greatly?
    // Actually Fuse usually handles it, but let's be safe.
    // If Fuse finds a match, great.

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

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Heardle Clone</h1>

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
            <span>{getStatusIcon(g.status)}</span>
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
        audioUrl={gameConfig.audioUrl}
        offset={gameConfig.offset}
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
          <p>The song was: <br/><strong>{gameConfig.songTitle}</strong> by <strong>{gameConfig.artistName}</strong></p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '10px 20px',
              cursor: 'pointer',
              backgroundColor: '#1db954',
              color: 'white',
              border: 'none',
              borderRadius: '20px',
              fontSize: '16px'
            }}>
            Play Again
          </button>
        </div>
      )}
    </div>
  );
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
    case 'green': return '✅';
    case 'yellow': return '⚠️';
    case 'red': return '❌';
    case 'skipped': return '⏭️';
    default: return '';
  }
};

export default Game;
