import React, { useState, useEffect } from 'react';

const Search = ({ onSelect, disabled, correctTrack }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    if (!query || query.length < 2) {
      setResults([]);
      setHasSearched(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(true);
      fetch(`/api/search?q=${encodeURIComponent(query)}`)
        .then(res => res.json())
        .then(data => {
          setResults(data);
          setLoading(false);
          setHasSearched(true);
        })
        .catch(err => {
          console.error(err);
          setResults([]);
          setLoading(false);
          setHasSearched(true);
        });
    }, 500);

    return () => clearTimeout(timer);
  }, [query, correctTrack]);

  const handleSelect = (track) => {
    setQuery(''); // Clear input
    setResults([]);
    setHasSearched(false);
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

      {(results.length > 0 || hasSearched) && (
        <ul className="search-menu">
          {results.length > 0 ? (
            results.map((track) => (
              <li
                key={`${track.trackName}-${track.artistName}`}
                onClick={() => handleSelect(track)}
              >
                <div style={{ fontSize: '14px' }}>
                  <strong>{track.trackName}</strong>
                  <br />
                  <span style={{ fontSize: '12px', opacity: 0.7 }}>{track.artistName}</span>
                </div>
              </li>
            ))
          ) : (
            <li>
              <div style={{ fontSize: '14px', textAlign: 'center', opacity: 0.7 }}>
                No results
              </div>
            </li>
          )}
        </ul>
      )}
      {loading && <div style={{ position: 'absolute', right: '10px', top: '8px', color: '#00ff00', fontSize: '12px' }}>[LOADING...]</div>}
    </div>
  );
};

export default Search;
