import React from 'react';
import './ContactMe.css'; // Ensure this file contains your contact section's CSS

const ContactMe = () => (
        <div id="contactme">
            <h1>Contact info</h1>
            <p>Email: <a href="mailto:kavyasunilpanicker@gmail.com">kavyasunilpanicker@gmail.com</a></p>
            <p>Phone: +919737611429</p>
            <p>Follow me on social media:</p>
            <p id="para">
                <a href="https://www.instagram.com/the_smooth_moves?igsh=MmYxNDFiMTliNXV2" target="_blank" rel="noopener noreferrer">Instagram </a>
                <a href="https://www.linkedin.com/in/kavya-panicker-0243412a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
        </div>
);

export default ContactMe;
