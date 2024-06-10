import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div id="footer">
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
      <Link to="/">Home</Link>
      <Link to="/green">Green</Link> {/* Link for new route */}
    </div>
  );
};

export default Footer;