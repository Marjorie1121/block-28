import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Blue from './Blue';
import Red from './Red';
import Home from './Home';
import Green from './Green'; // New component for additional route

const MainContainer = () => {
  return (
    <div id="main-container">
      <Routes>
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/" element={<Home />} />
        <Route path="/green" element={<Green />} /> {/* New route */}
      </Routes>
    </div>
  );
};

export default MainContainer;