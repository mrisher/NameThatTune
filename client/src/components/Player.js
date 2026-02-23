import React, { useRef, useState, useEffect } from 'react';

const Player = ({ audioUrl, offset, duration, onPlayEnd }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Reset progress when duration changes (new turn)
    setProgress(0);
  }, [duration]);

  const handlePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    const audio = audioRef.current;
    audio.currentTime = offset;
    audio.play();
    setIsPlaying(true);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;

    const currentPlayTime = audio.currentTime - offset;

    // Update progress bar
    const progressPercent = (currentPlayTime / duration) * 100;
    setProgress(Math.min(progressPercent, 100));

    if (currentPlayTime >= duration) {
      audio.pause();
      audio.currentTime = offset;
      setIsPlaying(false);
      setProgress(0);
      if (onPlayEnd) onPlayEnd();
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: '20px auto', textAlign: 'center' }}>
      <audio
        ref={audioRef}
        src={audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
        <button
          onClick={handlePlay}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#1db954', // Spotify green
            color: 'white',
            border: 'none',
            borderRadius: '20px',
            width: '100px'
          }}
        >
          {isPlaying ? 'Stop' : 'Play'}
        </button>
      </div>

      {/* Progress Bar Container */}
      <div style={{
        height: '10px',
        backgroundColor: '#ddd',
        borderRadius: '5px',
        overflow: 'hidden',
        position: 'relative'
      }}>
        {/* Progress Fill */}
        <div style={{
          height: '100%',
          width: `${progress}%`,
          backgroundColor: '#1db954',
          transition: 'width 0.1s linear'
        }} />
      </div>
      <div style={{ marginTop: '5px', fontSize: '12px', color: '#666' }}>
        Playing {duration} second{duration !== 1 ? 's' : ''}
      </div>
    </div>
  );
};

export default Player;
