// src/components/WelcomeBanner.js
import React from 'react';
import './WelcomeBanner.css'; // Create this file for banner-specific CSS

const WelcomeBanner = () => (
    <div id="home" className="welcome-banner">
        <h1>Welcome to My Personal Website!</h1>
        <p>Your go-to place for all things Kavya Panicker. Explore my journey, projects, and passions.</p>
        <a href="#about" className="cta-button">Learn More About Me</a>
    </div>
);

export default WelcomeBanner;
