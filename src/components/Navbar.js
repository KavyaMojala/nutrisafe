import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './Navbar.css';  // Add necessary styles here

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>NUTRISAFE</h1>
      </div>
      <ul className="nav-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT US</Link></li>
        <li><Link to="/recipes">RECIPES</Link></li>
        <li><Link to="/rewards">REWARDS</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
        <li><Link to="/adminlogin">ADMIN</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
