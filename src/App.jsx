import React from 'react';
import './App.css';
import RandomVerse from './components/RandomVerse.jsx';
import SpecificVerse from './components/SpecificVerse.jsx';

const App = () => {
    return (
        <div className="app-container">
            <h1 className="title">Bible Verse</h1>
            <RandomVerse />
            <SpecificVerse />
        </div>
    );
};

export default App;       
