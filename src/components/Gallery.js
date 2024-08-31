// src/components/Gallery.js
import React, { useState } from 'react';
import './Gallery.css'; // Create this file for gallery-specific CSS
import FullscreenModal from './FullscreenModal';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openFullScreen = (imgSrc) => {
        setSelectedImage(imgSrc);
    };

    const closeFullScreen = () => {
        setSelectedImage(null);
    };

    return (
        <div id="gallery">
            <h1>Gallery</h1>
            <div className="gallery">
                <img src="kavya1.jpg" alt="Image 1" onClick={() => openFullScreen('kavya1.jpg')} />
                <img src="kavu(2).jpg" alt="Image 2" onClick={() => openFullScreen('kavya2.jpg')} />
                <img src="kavya2.jpg" alt="Image 3" onClick={() => openFullScreen('kavya3.jpg')} />
                <img src="kavu(4).jpg" alt="Image 4" onClick={() => openFullScreen('kavya4.jpg')} />
                <img src="kavu(5).jpg" alt="Image 5" onClick={() => openFullScreen('kavya5.jpg')} />
                <img src="new kavya4.jpg" alt="Image 6" onClick={() => openFullScreen('kavya6.jpg')} />
                <img src="kavu(7).jpg" alt="Image 7" onClick={() => openFullScreen('kavya7.jpg')} />
                <img src="kavu(6).jpg" alt="Image 7" onClick={() => openFullScreen('kavya7.jpg')} />
                <img src="new kavya3.jpg" alt="Image 7" onClick={() => openFullScreen('kavya7.jpg')} />
                <img src="new kavya1.jpg" alt="Image 7" onClick={() => openFullScreen('kavya7.jpg')} />
                <img src="new kavya2.jpg" alt="Image 7" onClick={() => openFullScreen('kavya7.jpg')} />
                <img src="new kavya6.jpg" alt="Image 7" onClick={() => openFullScreen('kavya7.jpg')} />
                <img src="new kavya7.jpg" alt="Image 7" onClick={() => openFullScreen('kavya7.jpg')} />
                {/* Add more images as needed */}
            </div>
            {selectedImage && (
                <FullscreenModal imageSrc={selectedImage} onClose={closeFullScreen} />
            )}
        </div>
    );
};

export default Gallery;
