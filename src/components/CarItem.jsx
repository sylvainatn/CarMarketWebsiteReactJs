import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt, FaTachometerAlt, FaGasPump, FaCogs, FaTag } from 'react-icons/fa';

const CarItem = ({ car, addToFavorites, removeFromFavorites, isFavorite }) => {

   const handleAddToFavorites = () => {
      addToFavorites(car);
   };

   const handleRemoveFromFavorites = () => {
      removeFromFavorites(car);
   };

   return (
      <motion.div
         className="card bg-dark border-card h-100 d-flex flex-column"
         style={{
            margin: '10px',
            cursor: 'pointer',
            width: '250px',
            position: 'relative'
         }}
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: -20 }}
         transition={{ duration: 0.30 }}
         whileHover={{ scale: 1.05 }}
      >
         <Link to={`/cars/${car.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <img
               src={car.image}
               className="card-img-top"
               style={{
                  border: '1px solid #000',
                  height: '150px',
                  objectFit: 'cover'
               }}
               alt={car.name}
            />

            <div className="card-body" style={{ padding: '10px' }}>
               <h5 className="card-title" style={{ fontSize: '1rem', color: '#fff' }}>{car.name}</h5>
               <h4 style={{ marginBottom: '5px', color: '#fff', fontSize: '1.2rem' }}>
                  <FaTag style={{ marginRight: '5px' }} /> Prix : {car.price} €
               </h4>

               {/* Utilisation d'une grille pour afficher les caractéristiques en 2 colonnes */}
               <div className="row" style={{ marginBottom: '6px', color: '#fff', fontSize: '0.85rem' }}>
                  <div className="col-6" style={{ display: 'flex', alignItems: 'center' }}>
                     <FaCalendarAlt style={{ marginRight: '5px' }} /> {car.year}
                  </div>
                  <div className="col-6" style={{ display: 'flex', alignItems: 'center' }}>
                     <FaTachometerAlt style={{ marginRight: '5px' }} /> {car.mileage} km
                  </div>
                  <div className="col-6" style={{ display: 'flex', alignItems: 'center' }}>
                     <FaGasPump style={{ marginRight: '5px' }} /> {car.fuel}
                  </div>
                  <div className="col-6" style={{ display: 'flex', alignItems: 'center' }}>
                     <FaCogs style={{ marginRight: '5px' }} /> {car.transmission}
                  </div>
                  <div className="col-6" style={{ display: 'flex', alignItems: 'center' }}>
                     <FaMapMarkerAlt style={{ marginRight: '5px' }} /> {car.location}
                  </div>
               </div>
            </div>
         </Link>

         {isFavorite ? (
            <button
               onClick={handleRemoveFromFavorites}
               className="btn btn-outline-warning"
               style={{ position: 'absolute', bottom: '10px', right: '10px', fontSize: '0.65rem', padding: '5px 5px' }}
            >
               Retirer des Favoris
            </button>
         ) : (
            <button
               onClick={handleAddToFavorites}
               className="btn btn-outline-danger"
               style={{ position: 'absolute', bottom: '10px', right: '10px', fontSize: '0.65rem', padding: '5px 5px' }}
            >
               Ajouter aux Favoris
            </button>
         )}
      </motion.div>
   );
};

export default CarItem;
