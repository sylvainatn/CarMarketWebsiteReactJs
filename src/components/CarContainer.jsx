import React, { useState, useEffect } from 'react';
import CarFilter from './CarFilter';
import CarList from './CarList';

const CarContainer = ({ cars, addToFavorites, favorites, removeFromFavorites }) => {

   const [filteredCars, setFilteredCars] = useState(cars);

   const [errorMessage, setErrorMessage] = useState('');

   const handleFilterChange = (newFilter) => {

      setErrorMessage('');

      const {
         priceMin,
         priceMax,
         yearMin,
         yearMax,
         fuel,
         mileageMin,
         mileageMax,
         transmission,
         fiscalPowerMin,
         fiscalPowerMax,
         dinPowerMin,
         dinPowerMax,
         searchTerm
      } = newFilter;

      if (
         (priceMin && priceMax && Number(priceMin) > Number(priceMax)) ||
         (yearMin && yearMax && Number(yearMin) > Number(yearMax)) ||
         (mileageMin && mileageMax && Number(mileageMin) > Number(mileageMax)) ||
         (fiscalPowerMin && fiscalPowerMax && Number(fiscalPowerMin) > Number(fiscalPowerMax)) ||
         (dinPowerMin && dinPowerMax && Number(dinPowerMin) > Number(dinPowerMax))
      ) {
         setErrorMessage('Les valeurs minimales doivent être inférieures aux valeurs maximales.');
         return;
      }

      const filtered = cars.filter((car) => {
         const matchesSearch =
            (car.name && car.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (car.brand && car.brand.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (car.location && car.location.toLowerCase().includes(searchTerm.toLowerCase()));

         const matchesFilters =
            (!priceMin || car.price >= Number(priceMin)) &&
            (!priceMax || car.price <= Number(priceMax)) &&
            (!yearMin || car.year >= Number(yearMin)) &&
            (!yearMax || car.year <= Number(yearMax)) &&
            (!fuel || car.fuel.toLowerCase() === fuel.toLowerCase()) &&
            (!mileageMin || car.mileage >= Number(mileageMin)) &&
            (!mileageMax || car.mileage <= Number(mileageMax)) &&
            (!transmission || car.transmission.toLowerCase() === transmission.toLowerCase()) &&
            (!fiscalPowerMin || car.fiscalPower >= Number(fiscalPowerMin)) &&
            (!fiscalPowerMax || car.fiscalPower <= Number(fiscalPowerMax)) &&
            (!dinPowerMin || car.dinPower >= Number(dinPowerMin)) &&
            (!dinPowerMax || car.dinPower <= Number(dinPowerMax));

         return matchesSearch && matchesFilters;
      });

      setFilteredCars(filtered);
   };

   useEffect(() => {
      setFilteredCars(cars);
   }, [cars]);


   // Affichage
   return (
      <div className="container">
         <CarFilter onFilterChange={handleFilterChange} />
         {errorMessage && <div className="alert alert-danger text-center">{errorMessage}</div>}
         <CarList
            cars={filteredCars}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
            favorites={favorites}
         />
      </div>
   );
};

export default CarContainer;
