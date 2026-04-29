import React, { useState, useEffect } from 'react';
import { processSearchResults, ITUNES_SEARCH_URL } from './searchLogic';

const Search = ({ onSelect, disabled, correctTrack }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query || query.length < 2) {
      setResults([]);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(true);
      fetch(ITUNES_SEARCH_URL(query))
        .then(res => res.json())
        .then(data => {
          setResults(processSearchResults(data.results || [], query, correctTrack));
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setLoading(false);
        });
    }, 500);

    return () => clearTimeout(timer);
  }, [query, correctTrack]);

  const handleSelect = (track) => {
    setQuery(''); // Clear input
    setResults([]);
    onSelect(track);
  };

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <input
        type="text"
        placeholder="Guess the song..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        disabled={disabled}
        className="winamp-input"
      />

      {results.length > 0 && (
        <ul className="search-menu">
          {results.map((track) => (
            <li
              key={track.trackId}
              onClick={() => handleSelect(track)}
            >
              <div style={{ fontSize: '14px' }}>
                <strong>{track.trackName}</strong>
                <br />
                <span style={{ fontSize: '12px', opacity: 0.7 }}>{track.artistName}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
      {loading && <div style={{ position: 'absolute', right: '10px', top: '8px', color: '#00ff00', fontSize: '12px' }}>[LOADING...]</div>}
    </div>
  );
};

export default Search;
