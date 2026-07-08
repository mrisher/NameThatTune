import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Game from './components/Game';
import ConnecTunes from './components/ConnecTunes';
import NudleGame from './components/NudleGame';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Game />} />
          <Route path="/connectunes" element={<ConnecTunes />} />
          <Route path="/nudle" element={<NudleGame />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
