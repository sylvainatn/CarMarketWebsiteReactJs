import React, { useState } from 'react';
import CarItem from './CarItem';

const CarList = ({ cars, addToFavorites, favorites, removeFromFavorites }) => {

   const [searchTerm, setSearchTerm] = useState('');

   const [filter, setFilter] = useState({
      priceMin: '',
      priceMax: '',
      yearMin: '',
      yearMax: '',
      fuel: '',
      mileageMin: '',
      mileageMax: '',
      transmission: '',
      fiscalPowerMin: '',
      fiscalPowerMax: '',
      dinPowerMin: '',
      dinPowerMax: '',
   });

   const [filteredCars, setFilteredCars] = useState(cars);
   const [errorMessage, setErrorMessage] = useState('');

   // Fonction pour filtrer les voitures
   const handleSearch = () => {
      // Reset error message
      setErrorMessage('');

      // Vérifier les valeurs des filtres
      if (
         (filter.priceMin && filter.priceMax && Number(filter.priceMin) > Number(filter.priceMax)) ||
         (filter.yearMin && filter.yearMax && Number(filter.yearMin) > Number(filter.yearMax)) ||
         (filter.mileageMin && filter.mileageMax && Number(filter.mileageMin) > Number(filter.mileageMax)) ||
         (filter.fiscalPowerMin && filter.fiscalPowerMax && Number(filter.fiscalPowerMin) > Number(filter.fiscalPowerMax)) ||
         (filter.dinPowerMin && filter.dinPowerMax && Number(filter.dinPowerMin) > Number(filter.dinPowerMax))
      ) {
         setErrorMessage('Les valeurs minimales doivent être inférieures aux valeurs maximales.');
         return;
      }

      const newFilteredCars = cars.filter((car) => {

         const matchesSearch =
            (car.name && car.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (car.brand && car.brand.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (car.location && car.location.toLowerCase().includes(searchTerm.toLowerCase()));

         const matchesFilters =
            (!filter.priceMin || car.price >= Number(filter.priceMin)) &&
            (!filter.priceMax || car.price <= Number(filter.priceMax)) &&
            (!filter.yearMin || car.year >= Number(filter.yearMin)) &&
            (!filter.yearMax || car.year <= Number(filter.yearMax)) &&
            (!filter.fuel || car.fuel.toLowerCase() === filter.fuel.toLowerCase()) &&
            (!filter.mileageMin || car.mileage >= Number(filter.mileageMin)) &&
            (!filter.mileageMax || car.mileage <= Number(filter.mileageMax)) &&
            (!filter.transmission || car.transmission.toLowerCase() === filter.transmission.toLowerCase()) &&
            (!filter.fiscalPowerMin || car.fiscalPower >= Number(filter.fiscalPowerMin)) &&
            (!filter.fiscalPowerMax || car.fiscalPower <= Number(filter.fiscalPowerMax)) &&
            (!filter.dinPowerMin || car.dinPower >= Number(filter.dinPowerMin)) &&
            (!filter.dinPowerMax || car.dinPower <= Number(filter.dinPowerMax));

         return matchesSearch && matchesFilters;
      });

      setFilteredCars(newFilteredCars);
   };

   return (
      <div className="container">

         <h1 className="text-center my-4">Liste des Voitures</h1>

         {/* Barre de recherche */}
         <div className="mb-4 d-flex justify-content-center">
            <input
               type="text"
               className="form-control"
               placeholder="Rechercher par nom, marque, ou localisation"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               style={{
                  borderRadius: '20px',
                  border: '1px solid #ccc',
                  padding: '10px 15px',
                  fontSize: '16px',
                  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                  width: '60%',
               }}
            />
         </div>

         {/* Bouton de recherche */}
         <div className="d-flex justify-content-center mb-4">
            <button onClick={handleSearch} className="btn btn-primary">Rechercher</button>
         </div>

         {/* Filtres avancés encapsulés dans une boîte */}
         <div className="filter-box border bg-dark rounded-pill mb-4">
            <div className="d-flex justify-content-center flex-wrap p-2" style={{ gap: '20px' }}>

               {/* Prix */}
               <div className='d-flex flex-column border rounded'>
                  <div className="p-2">
                     <input
                        type="number"
                        placeholder="Prix min (€)"
                        className="form-control mb-2"
                        font-size="50px"
                        value={filter.priceMin}
                        onChange={(e) => setFilter({ ...filter, priceMin: e.target.value })}
                        style={{ maxWidth: '100px' }}
                     />
                     <input
                        type="number"
                        placeholder="Prix max (€)"
                        className="form-control"
                        value={filter.priceMax}
                        onChange={(e) => setFilter({ ...filter, priceMax: e.target.value })}
                        style={{ maxWidth: '120px' }}
                     />
                  </div>
               </div>

               {/* Année */}
               <div className='d-flex flex-column border rounded'>
                  <div className="p-2">
                     <input
                        type="number"
                        placeholder="Année min"
                        className="form-control mb-2"
                        value={filter.yearMin}
                        onChange={(e) => setFilter({ ...filter, yearMin: e.target.value })}
                        style={{ maxWidth: '120px' }}
                     />
                     <input
                        type="number"
                        placeholder="Année max"
                        className="form-control"
                        value={filter.yearMax}
                        onChange={(e) => setFilter({ ...filter, yearMax: e.target.value })}
                        style={{ maxWidth: '120px' }}
                     />
                  </div>
               </div>

               {/* Carburant et Transmission */}
               <div className='d-flex flex-column border rounded'>
                  <div className='p-2'>
                     <select
                        className="form-control mb-2"
                        value={filter.fuel}
                        onChange={(e) => setFilter({ ...filter, fuel: e.target.value })}
                     >
                        <option value="">Carburant</option>
                        <option value="Essence">Essence</option>
                        <option value="Diesel">Diesel</option>
                        <option value="Électrique">Électrique</option>
                        <option value="Hybride">Hybride</option>
                     </select>
                     <select
                        className="form-control"
                        value={filter.transmission}
                        onChange={(e) => setFilter({ ...filter, transmission: e.target.value })}
                     >
                        <option value="">Boîte de vitesse</option>
                        <option value="Manuelle">Manuelle</option>
                        <option value="Automatique">Automatique</option>
                     </select>
                  </div>
               </div>

               {/* Kilométrage */}
               <div className='d-flex flex-column border rounded'>
                  <div className="p-2">
                     <input
                        type="number"
                        placeholder="Km min"
                        className="form-control mb-2"
                        value={filter.mileageMin}
                        onChange={(e) => setFilter({ ...filter, mileageMin: e.target.value })}
                     />
                     <input
                        type="number"
                        placeholder="Km max"
                        className="form-control"
                        value={filter.mileageMax}
                        onChange={(e) => setFilter({ ...filter, mileageMax: e.target.value })}
                     />
                  </div>
               </div>

               {/* Puissance fiscale */}
               <div className='d-flex flex-column border rounded'>
                  <div className="p-2">
                     <input
                        type="number"
                        placeholder="Puissance fiscale min"
                        className="form-control mb-2"
                        value={filter.fiscalPowerMin}
                        onChange={(e) => setFilter({ ...filter, fiscalPowerMin: e.target.value })}
                        style={{ maxWidth: '190px' }}
                     />
                     <input
                        type="number"
                        placeholder="Puissance fiscale max"
                        className="form-control"
                        value={filter.fiscalPowerMax}
                        onChange={(e) => setFilter({ ...filter, fiscalPowerMax: e.target.value })}
                        style={{ maxWidth: '190px' }}
                     />
                  </div>
               </div>

               {/* Puissance DIN */}
               <div className='d-flex flex-column border rounded'>
                  <div className="p-2">
                     <input
                        type="number"
                        placeholder="Puissance DIN min"
                        className="form-control mb-2"
                        value={filter.dinPowerMin}
                        onChange={(e) => setFilter({ ...filter, dinPowerMin: e.target.value })}
                        style={{ maxWidth: '175px' }}
                     />
                     <input
                        type="number"
                        placeholder="Puissance DIN max"
                        className="form-control"
                        value={filter.dinPowerMax}
                        onChange={(e) => setFilter({ ...filter, dinPowerMax: e.target.value })}
                        style={{ maxWidth: '175px' }}
                     />
                  </div>
               </div>
            </div>
         </div>

         {/* Message d'erreur */}
         {errorMessage && <div className="alert alert-danger text-center">{errorMessage}</div>}

         {/* Affichage des voitures filtrées */}
         <div className="row">
            {filteredCars.length > 0 ? (
               filteredCars.map((car) => (
                  <div key={car.id} style={{ marginBottom: '20px' }} className="col-md-3 d-flex justify-content-center">
                     <CarItem
                        car={car}
                        addToFavorites={addToFavorites}
                        removeFromFavorites={removeFromFavorites}
                        isFavorite={favorites.some((favorite) => favorite.id === car.id)}
                     />
                  </div>
               ))
            ) : (
               <div className=" alert alert-danger text-center">
                  <p>Aucune voiture ne correspond à votre recherche.</p>
               </div>
            )}
         </div>
      </div>
   );
};

export default CarList;
