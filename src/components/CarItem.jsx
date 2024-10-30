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
         style={{
            margin: '10px',
            cursor: 'pointer',
            position: 'relative',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            width: '250px', // Largeur fixe pour uniformiser
            height: '400px', // Hauteur fixe pour uniformiser
         }}
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: -20 }}
         transition={{ duration: 0.3 }}
         whileHover={{ scale: 1.05 }}
      >
         <Link to={`/cars/${car.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <img
               src={car.image}
               className="card-img-top"
               alt={car.name}
               style={{
                  height: '150px', // Taille fixe de l'image
                  width: '100%', // Largeur maximale pour remplir la carte
                  objectFit: 'cover',
                  borderBottom: '1px solid #ddd',
               }}
            />
            <div className="card-body p-3" style={{ fontSize: '0.9rem', overflow: 'hidden' }}>
               <h5 className="card-title" style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '8px' }}>
                  {car.name}
               </h5>
               <h6 className="text-muted" style={{ marginBottom: '8px' }}>Prix : {car.price} €</h6>
               <p style={{ marginBottom: '6px', color: '#555' }}>Année : {car.year}</p>
               <p style={{ marginBottom: '6px', color: '#555' }}>Kilométrage : {car.mileage} km</p>
               <p style={{ marginBottom: '6px', color: '#555' }}>Carburant : {car.fuel}</p>
               <p style={{ marginBottom: '6px', color: '#555' }}>Transmission : {car.transmission}</p>
               <p style={{ marginBottom: '6px', color: '#555' }}>Localisation : {car.location}</p>
            </div>
         </Link>

         {/* Boutons Ajouter aux favoris et Retirer des favoris */}
         {isFavorite ? (
            <button
               onClick={handleRemoveFromFavorites}
               className="btn btn-outline-warning"
               style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px',
                  fontSize: '0.8rem',
                  padding: '6px 12px',
               }}
            >
               Retirer des Favoris
            </button>
         ) : (
            <button
               onClick={handleAddToFavorites}
               className="btn btn-outline-danger"
               style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px',
                  fontSize: '0.8rem',
                  padding: '6px 12px',
               }}
            >
               Ajouter aux Favoris
            </button>
         )}
      </motion.div>
   );
};

export default CarItem;
