import React, { useRef, useState, useEffect } from 'react';

const Player = ({ audioUrl, offset, duration, onPlayEnd }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTimeDisplay, setCurrentTimeDisplay] = useState("00:00");

  useEffect(() => {
    setProgress(0);
    setCurrentTimeDisplay("00:00");
  }, [duration]);

  const handlePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }
    audio.currentTime = offset;
    audio.play();
    setIsPlaying(true);
  };

  const handleStop = () => {
    const audio = audioRef.current;
    audio.pause();
    audio.currentTime = offset;
    setIsPlaying(false);
    setProgress(0);
    setCurrentTimeDisplay("00:00");
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;

    const currentPlayTime = audio.currentTime - offset;
    const secs = Math.floor(currentPlayTime);
    const ms = Math.floor((currentPlayTime - secs) * 100);
    setCurrentTimeDisplay(`0${secs}:${ms.toString().padStart(2, '0')}`);

    const progressPercent = (currentPlayTime / duration) * 100;
    setProgress(Math.min(progressPercent, 100));

    if (currentPlayTime >= duration) {
      handleStop();
      if (onPlayEnd) onPlayEnd();
    }
  };

  return (
    <div className="winamp-window" style={{ width: '275px' }}>
      <audio
        ref={audioRef}
        src={audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleStop}
      />
      <div className="winamp-titlebar">
        <span>WINAMP</span>
        <div style={{ display: 'flex', gap: '2px' }}>
          <div className="winamp-titlebar-btn"></div>
          <div className="winamp-titlebar-btn"></div>
          <div className="winamp-titlebar-btn"></div>
        </div>
      </div>
      
      <div className="winamp-content player-main">
        <div className="led-display">
          {currentTimeDisplay}
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ fontSize: '10px', color: '#00ff00' }}>
            128 kbps<br/>44 kHz
          </div>
          <div style={{ fontSize: '10px', color: '#00ff00', textAlign: 'right' }}>
            mono <span style={{ color: '#00ff00', fontWeight: 'bold' }}>stereo</span>
          </div>
        </div>

        <div className="scrolling-title-container">
          <div className="scrolling-title">
            1. ????? ????? ????? ????? ????? ????? ????? ?????
          </div>
        </div>

        <div className="playback-controls">
          <div className="winamp-btn-small disabled">|◀◀</div>
          <div className="winamp-btn-small" onClick={handlePlay}>
            {isPlaying ? '||' : '▶'}
          </div>
          <div className="winamp-btn-small disabled">||</div>
          <div className="winamp-btn-small" onClick={handleStop}>■</div>
          <div className="winamp-btn-small disabled">▶▶|</div>
        </div>

        <div style={{ gridColumn: '1 / span 2' }}>
           <div className="winamp-progress-bg" style={{ height: '10px' }}>
             <div className="winamp-progress-fill" style={{ width: `${progress}%` }} />
           </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
