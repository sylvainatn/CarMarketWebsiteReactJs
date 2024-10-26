import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CarItem = ({ car, addToFavorites, removeFromFavorites, isFavorite }) => {

   const handleAddToFavorites = () => {
      addToFavorites(car);
   };

   const handleRemoveFromFavorites = () => {
      removeFromFavorites(car);
   };

   return (
      <motion.div
         className="card border-card h-100 d-flex flex-column"
         style={{ margin: '10px', cursor: 'pointer', position: 'relative' }}
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: -20 }}
         transition={{ duration: 0.30 }}
         whileHover={{ scale: 1.05 }}
      >
         <Link to={`/cars/${car.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <img src={car.image} className="card-img-top" style={{border: '1px solid #000',}} alt={car.name} />
            <div className="card-body">
               <h5 className="card-title">{car.name}</h5>
               <h6 style={{ marginBottom: '5px' }}>Prix : {car.price} €</h6>
               <p style={{ marginBottom: '5px' }}>Année : {car.year}</p>
               <p style={{ marginBottom: '5px' }}>Kilométrage : {car.mileage} km</p>
               <p style={{ marginBottom: '5px' }}>Carburant : {car.fuel}</p>
               <p style={{ marginBottom: '5px' }}>Boîte de vitesse : {car.transmission}</p>
               <p style={{ marginBottom: '5px' }}>Localisation : {car.location}</p>
            </div>
         </Link>
         {/* Boutons Ajouter aux favoris et Retirer des favoris */}
         {isFavorite ? (
            <button
               onClick={handleRemoveFromFavorites}
               className="btn btn-outline-warning"
               style={{ position: 'absolute', bottom: '10px', right: '10px' }}
            >
               Retirer des Favoris
            </button>
         ) : (
            <button
               onClick={handleAddToFavorites}
               className="btn btn-outline-danger"
               style={{ position: 'absolute', bottom: '10px', right: '10px' }}
            >
               Ajouter aux Favoris
            </button>
         )}
      </motion.div>
   );
};

export default CarItem;
