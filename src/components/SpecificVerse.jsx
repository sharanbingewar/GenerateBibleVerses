import React, { useState } from 'react';

const SpecificVerse = () => {
    const [verseText, setVerseText] = useState('');
    const [reference, setReference] = useState('John 3:16');

    const fetchSpecificVerse = async () => {
        try {
            const response = await fetch(`https://labs.bible.org/api/?passage=${reference}&formatting=plain&type=json`);
            const data = await response.json();
            setVerseText(data[0].text);
        } catch (error) {
            console.error('Error fetching specific verse:', error);
        }
    };

    return (
        <div>
            <h2>Specific Bible Verse</h2>
            <input
                type="text"
                value={reference}
                onChange={(e) => setReference(e.target.value)}
                placeholder="Enter verse reference (e.g., John 3:16)"
            />
            <button onClick={fetchSpecificVerse}>Get Specific Verse</button>
            <p>{verseText || "Verse will appear here."}</p>
        </div>
    );
};

export default SpecificVerse;
