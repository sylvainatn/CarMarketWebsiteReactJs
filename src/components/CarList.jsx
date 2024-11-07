import React from 'react';
import CarItem from './CarItem';

const CarList = ({ cars, addToFavorites, removeFromFavorites, favorites }) => {

   // Affichage
   return (
      <div className="row" style={{ backgroundColor: '#f8f9fa' }}>
         {cars.length > 0 ? (
            cars.map((car) => (
               <div key={car.id} className="col-md-3 d-flex justify-content-center" style={{ marginBottom: '20px' }}>
                  <CarItem
                     car={car}
                     addToFavorites={addToFavorites}
                     removeFromFavorites={removeFromFavorites}
                     isFavorite={favorites.some((favorite) => favorite.id === car.id)}
                  />
               </div>
            ))
         ) : (
            <div className="col-12 text-center">
               <p>Aucune voiture ne correspond à votre recherche.</p>
            </div>
         )}
      </div>
   );
};

export default CarList;
