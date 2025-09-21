import React from 'react';
import '../Style/Gallery.css';

const galleryImages = [
  '/Assets/gallery1.jpg',
  '/Assets/gallery2.jpg',
  '/Assets/gallery3.jpg',
  '/Assets/gallery4.jpg'
];

function Gallery() {
  return (
    <div className="gallery-container">
      <h2>Our Creations in 3D</h2>
      <div className="gallery-grid">
        {galleryImages.map((img, idx) => (
          <img key={idx} src={img} alt={`3D model ${idx+1}`} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
