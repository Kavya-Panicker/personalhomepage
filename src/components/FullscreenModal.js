// src/components/FullscreenModal.js
import React from 'react';
import './FullscreenModal.css'; // Create this file for modal-specific CSS

const FullscreenModal = ({ imageSrc, onClose }) => (
    <div className="fullscreen-modal" onClick={onClose}>
        <span className="close" onClick={onClose}>&times;</span>
        <img className="fullscreen-content" src={imageSrc} alt="Fullscreen" />
    </div>
);

export default FullscreenModal;
