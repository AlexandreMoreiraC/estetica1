import React from 'react';
import '../styles/Gallery.css';

export default function Gallery() {
  return (
    <main className="gallery">
      <h1>Galeria</h1>
      <div className="gallery-grid">
        <div className="gallery-item">Foto 1</div>
        <div className="gallery-item">Foto 2</div>
        <div className="gallery-item">Foto 3</div>
        <div className="gallery-item">Foto 4</div>
      </div>
    </main>
  );
}
