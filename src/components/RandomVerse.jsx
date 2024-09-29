
import React, { useState } from 'react';

const RandomVerse = () => {
  const [verse, setVerse] = useState('');
  const [verseNumber, setVerseNumber] = useState('');

  const fetchRandomVerse = async () => {
    try {
      const response = await fetch('https://labs.bible.org/api/?passage=random&formatting=plain&type=json');
      const data = await response.json();
      setVerse(data[0].text);
      setVerseNumber(data[0].verse);
    } catch (error) {
      console.error('Error fetching random verse:', error);
    }
  };

  return (
    <div className="verse-display">
      <button className="random-button" onClick={fetchRandomVerse}>
        Get Random Verse
      </button>
      {verse && (
        <div>
          <p>{verse}</p>
          <p className="verse-number">Verse: {verseNumber}</p>
        </div>
      )}
    </div>
  );
};

export default RandomVerse;
