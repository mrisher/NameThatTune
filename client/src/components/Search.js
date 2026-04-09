import React, { useState, useEffect } from 'react';

const Search = ({ onSelect, disabled }) => {
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
      fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=50&explicit=yes`)
        .then(res => res.json())
        .then(data => {
          let fetchedResults = data.results || [];

          // Deduplicate variants if exact match exists for same artist
          const filteredResults = fetchedResults.filter(track => {
            const isExactMatch = track.trackName.toLowerCase() === query.toLowerCase();
            const hasExactMatchBySameArtist = fetchedResults.some(t =>
              t.artistName === track.artistName && t.trackName.toLowerCase() === query.toLowerCase()
            );

            if (hasExactMatchBySameArtist && !isExactMatch) {
              return false; // skip near match if exact match exists for same artist
            }
            return true;
          });

          // Sort by exact title match, then exact artist match
          const sortedResults = filteredResults.sort((a, b) => {
            const aTitleExact = a.trackName.toLowerCase() === query.toLowerCase();
            const bTitleExact = b.trackName.toLowerCase() === query.toLowerCase();

            if (aTitleExact && !bTitleExact) return -1;
            if (!aTitleExact && bTitleExact) return 1;

            const aArtistMatch = a.artistName.toLowerCase().includes(query.toLowerCase()) || query.toLowerCase().includes(a.artistName.toLowerCase());
            const bArtistMatch = b.artistName.toLowerCase().includes(query.toLowerCase()) || query.toLowerCase().includes(b.artistName.toLowerCase());

            if (aArtistMatch && !bArtistMatch) return -1;
            if (!aArtistMatch && bArtistMatch) return 1;

            return 0;
          });

          setResults(sortedResults.slice(0, 5));
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setLoading(false);
        });
    }, 500); // 500ms debounce

    return () => clearTimeout(timer);
  }, [query]);

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
