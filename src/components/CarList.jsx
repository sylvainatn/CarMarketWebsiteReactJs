import React from 'react';
import CarItem from './CarItem';

const CarList = ({ cars, addToFavorites, favorites, removeFromFavorites }) => {
  return (
    <div className="container"><br />
      <h1 className="text-center my-4">Liste des Voitures</h1><br />
      <div className="row">
        {cars.map((car) => (
          <div key={car.id} style={{ marginBottom: '20px' }} className="col-md-4 d-flex">
            <CarItem 
              car={car} 
              addToFavorites={addToFavorites} 
              removeFromFavorites={removeFromFavorites} 
              isFavorite={favorites.some(favorite => favorite.id === car.id)} // Vérifier si la voiture est dans les favoris
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarList;
