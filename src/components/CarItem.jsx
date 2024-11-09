import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt, FaTachometerAlt, FaGasPump, FaCogs, FaTag, FaHeart } from 'react-icons/fa';

const CarItem = ({ car, addToFavorites, removeFromFavorites, isFavorite }) => {

   const handleFavoriteToggle = () => {
      if (isFavorite) {
         removeFromFavorites(car);
      } else {
         addToFavorites(car);
      }
   };

   // Fonction pour déterminer l'indicateur de prix
   const getPriceIndicator = (price) => {
      if (price < 5000) return { label: "Très bonne affaire", color: "#4CAF50" };
      if (price >= 5000 && price < 15000) return { label: "Bonne affaire", color: "#4CAF50" };
      return { label: "Offre équitable", color: "grey" };
   };

   const priceIndicator = getPriceIndicator(car.price);

   return (
      <motion.div
         className="card bg-dark border-card h-100 d-flex flex-column"
         style={{
            margin: '10px',
            cursor: 'pointer',
            width: '100%', // Full width for responsive layout
            maxWidth: '270px', // Limit max width for larger screens
            position: 'relative',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
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
                  objectFit: 'cover',
                  width: '100%' // Ensures image is responsive
               }}
               alt={car.name}
            />

            <div className="card-body" style={{ padding: '10px' }}>
               <h5 className="card-title" style={{ fontSize: '1rem', color: '#fff' }}>{car.name}</h5>

               {/* Conteneur flex pour le prix et l'indicateur de prix */}
               <div className="d-flex align-items-center flex-wrap" style={{ gap: '10px', marginBottom: '10px' }}>
                  <h4 style={{ color: '#fff', fontSize: '1.1rem', margin: 0 }}>
                     <FaTag style={{ marginRight: '5px' }} /> Prix : {car.price} €
                  </h4>

                  {/* Indicateur de prix*/}
                  <div
                     style={{
                        color: priceIndicator.color,
                        border: `1px solid ${priceIndicator.color}`,
                        borderRadius: '4px',
                        padding: '3px 4px',
                        fontSize: '0.7rem',
                        display: 'inline-block',
                        backgroundColor: 'transparent'
                     }}
                  >
                     {priceIndicator.label}
                  </div>
               </div>

               {/* Grille pour les caractéristiques */}
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

         {/* Icône de cœur pour gérer les favoris */}
         <FaHeart
            onClick={handleFavoriteToggle}
            style={{
               position: 'absolute',
               width: '30px',
               bottom: '10px',
               right: '10px',
               fontSize: '1.5rem',
               color: isFavorite ? 'red' : 'white',
               cursor: 'pointer',
               border: '1px solid #ccc',
               borderRadius: '5px',
               padding: '3px',
            }}
         />
      </motion.div>
   );
};

export default CarItem;
