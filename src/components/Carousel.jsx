// src/components/Carousel.js
import React from 'react';
// Assurez-vous d'importer le fichier CSS si vous utilisez un fichier CSS séparé

const Carousel = () => {

    const images = [
        { src: '/images/carousel1.jpeg', alt: 'Image 1' },
        { src: '/images/carousel2.jpg', alt: 'Image 2' },
        { src: '/images/car3.jpg', alt: 'Image 3' },
    ];

    const carouselStyle = {
        height: '500px', // Ajustez la hauteur du carrousel ici
        overflow: 'hidden', // Cache le contenu qui dépasse
    };

    const imageStyle = {
        height: '100%', // L'image remplit toute la hauteur
        objectFit: 'cover', // Maintient le rapport d'aspect tout en remplissant l'espace
    };

    return (
        <div id="carouselExampleAutoplaying" className="container carousel slide" data-bs-ride="carousel" style={carouselStyle}>
            <div className="carousel-inner">
                {images.map((image, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                        <img src={image.src} className="d-block w-100" alt={image.alt} style={imageStyle} />
                    </div>
                ))}
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;
