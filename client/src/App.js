import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Game from './components/Game';
import Chordle from './components/Chordle';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Game />} />
          <Route path="/chordle" element={<Chordle />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
