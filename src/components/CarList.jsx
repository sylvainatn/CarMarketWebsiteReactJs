// src/components/CarList.jsx
import React from 'react';
import CarItem from './CarItem';

const CarList = ({ cars, addToFavorites }) => {
    return (
        <div className="container"><br />
            <h1 className="text-center my-4">Liste des Voitures</h1><br />
            <div className="row">
                {cars.map((car) => (
                    <div key={car.id} style={{ marginBottom: '20px' }} className="col-md-4 d-flex">
                        <CarItem car={car} addToFavorites={addToFavorites} showAddToFavorites={true} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarList;
