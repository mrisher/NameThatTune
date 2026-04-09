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

          // Clean query for better matching
          const qLower = query.toLowerCase().trim();
          const qWords = qLower.split(/\s+/).filter(w => w.length > 0);

          const getCleanName = (name) => {
            return name
              .replace(/\s*\(.*(acoustic|live|remix|version|edit|remaster|karaoke|cover|instrumental|tribute).*\)/i, '')
              .replace(/\s*\[.*(acoustic|live|remix|version|edit|remaster|karaoke|cover|instrumental|tribute).*\]/i, '')
              .split(' - ')[0]
              .split(': ')[0]
              .trim();
          };

          // A track is a variant if its name was changed by the cleaner
          const isVariant = (name) => {
            const cleanName = getCleanName(name).toLowerCase();
            return name.toLowerCase().trim() !== cleanName;
          };

          // Filter out variants if an original from the same artist exists in the results.
          // We group by artist and clean title to ensure we only keep the best version of each song.
          const groups = new Map();
          fetchedResults.forEach(track => {
            const cleanName = getCleanName(track.trackName).toLowerCase();
            const key = `${track.artistName.toLowerCase()}|${cleanName}`;
            
            if (!groups.has(key)) {
              groups.set(key, track);
            } else {
              // If we find an "original" (no parens/etc) but already have a variant, swap it.
              // Otherwise, iTunes order usually puts the most popular/relevant first.
              const currentTrack = groups.get(key);
              if (isVariant(currentTrack.trackName) && !isVariant(track.trackName)) {
                groups.set(key, track);
              }
            }
          });
          const filteredResults = Array.from(groups.values());

          const getScore = (track) => {
            const title = track.trackName.toLowerCase();
            const artist = track.artistName.toLowerCase();
            const cleanTitle = getCleanName(track.trackName).toLowerCase();

            let score = 0;

            if (title === qLower) score += 100;
            if (title.includes(qLower)) score += 50;
            if (`${title} ${artist}` === qLower || `${artist} ${title}` === qLower) score += 200;

            if (`${cleanTitle} ${artist}` === qLower || `${artist} ${cleanTitle}` === qLower) {
              score += 150;
            }

            let titleMatchWords = 0;
            let artistMatchWords = 0;

            for (const w of qWords) {
              if (title.includes(w)) titleMatchWords++;
              if (artist.includes(w)) artistMatchWords++;
            }

            if (titleMatchWords > 0 && artistMatchWords > 0) score += 30;

            score += (titleMatchWords * 10);
            score += (artistMatchWords * 5);

            if (qWords.includes(cleanTitle)) score += 20;

            return score;
          }

          const sortedResults = filteredResults.sort((a, b) => {
            const scoreA = getScore(a);
            const scoreB = getScore(b);

            if (scoreA !== scoreB) {
              return scoreB - scoreA;
            }

            const aVariant = isVariant(a.trackName);
            const bVariant = isVariant(b.trackName);
            if (!aVariant && bVariant) return -1;
            if (aVariant && !bVariant) return 1;

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
