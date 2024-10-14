// src/components/Favorites.jsx
import React from 'react';
import CarItem from './CarItem';

const Favorites = ({ favorites }) => {
    if (favorites.length === 0) {
        return <h2 style={{ textAlign: 'center' }}>Aucun favori ajouté.</h2>;
    }

    return (
        <div className="container">
            <h2>Mes Favoris</h2>
            <div className="row">
                {favorites.map(car => (
                    <div className="col-md-4 d-flex" style={{ marginBottom: '20px' }} key={car.id}>
                        <CarItem car={car} /> {/* Afficher chaque voiture favorite */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Favorites;
