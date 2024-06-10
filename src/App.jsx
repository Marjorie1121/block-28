// App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainContainer from './components/MainContainer';
import { Routes, Route, Link } from 'react-router-dom';
import Blue from './components/Blue';
import Red from './components/Red';
import Home from './components/Home';

const App = () => {
  return (
    <div>
      <div id="navbar">
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/">Home</Link>
      </div>
      <Routes>
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
