// src/components/Navbar.js
import React from 'react';
import './Navbar.css'; // Create this file for navbar-specific CSS

const Navbar = () => (
    <nav className="navbar">
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
);

export default Navbar;
