import React, { useState } from 'react';
import CarItem from './CarItem';

const CarList = ({ cars, addToFavorites, favorites, removeFromFavorites }) => {
   const [searchTerm, setSearchTerm] = useState(''); // État pour gérer la recherche

   // Fonction pour filtrer les voitures en fonction du terme de recherche
   const filteredCars = cars.filter(car =>
      (car.name && car.name.toLowerCase().includes(searchTerm.toLowerCase())) || // Vérifier si car.name existe
      (car.brand && car.brand.toLowerCase().includes(searchTerm.toLowerCase())) || // Vérifier si car.brand existe
      (car.location && car.location.toLowerCase().includes(searchTerm.toLowerCase())) // Vérifier si car.location existe
   );

   return (
      <div className="container">
         <br />
         <h1 className="text-center my-4">Liste des Voitures</h1><br />

         {/* Barre de recherche */}
         <div className="mb-4">
            <input
               type="text"
               className="form-control"
               placeholder="Rechercher par nom, marque ou localisation"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)} // Met à jour l'état avec le texte saisi
               style={{
                  borderRadius: '20px',
                  border: '1px solid #ccc',
                  padding: '10px 15px',
                  fontSize: '16px',
                  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
               }}
            />
         </div>

         {/* Affichage des voitures filtrées */}
         <div className="row">
            {filteredCars.length > 0 ? (
               filteredCars.map((car) => (
                  <div key={car.id} style={{ marginBottom: '20px' }} className="col-md-4 d-flex">
                     <CarItem
                        car={car}
                        addToFavorites={addToFavorites}
                        removeFromFavorites={removeFromFavorites}
                        isFavorite={favorites.some(favorite => favorite.id === car.id)} // Vérifier si la voiture est dans les favoris
                     />
                  </div>
               ))
            ) : (
               <div className="col-12 text-center">
                  <p>Aucune voiture ne correspond à votre recherche.</p>
               </div>
            )}
         </div>
      </div>
   );
};

export default CarList;
