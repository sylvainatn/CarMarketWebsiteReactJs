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
   });
   const [filteredCars, setFilteredCars] = useState(cars);

   // Fonction pour filtrer les voitures lorsque l'utilisateur clique sur le bouton
   const handleSearch = () => {
      const newFilteredCars = cars.filter((car) => {
         const matchesSearch =
            (car.name && car.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (car.brand && car.brand.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (car.location && car.location.toLowerCase().includes(searchTerm.toLowerCase()));

         const matchesFilters =
            (!filter.priceMin || car.price >= filter.priceMin) &&
            (!filter.priceMax || car.price <= filter.priceMax) &&
            (!filter.year || car.year >= filter.year) &&
            (!filter.fuel || car.fuel.toLowerCase() === filter.fuel.toLowerCase()) &&
            (!filter.mileageMin || car.mileage >= filter.mileageMin) &&
            (!filter.mileageMax || car.mileage <= filter.mileageMax) &&
            (!filter.transmission || car.transmission.toLowerCase() === filter.transmission.toLowerCase());

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
                  width: '50%',
               }}
            />
         </div>

         {/* Filtres avancés encapsulés dans une boîte */}
         <div className="filter-box p-3 mb-4">
            <div className="d-flex justify-content-center flex-wrap border p-2" style={{ gap: '10px' }}>
               <div className='d-flex flex-column border rounded' style={{ gap: '1px' }}>
                  <label className='bg-warning rounded-top p-1' htmlFor="">Prix</label>
                  <input
                     type="number"
                     placeholder="Prix min (€)"
                     className="form-control m-2"
                     value={filter.priceMin}
                     onChange={(e) => setFilter({ ...filter, priceMin: e.target.value })}
                     style={{ maxWidth: '120px', }}
                  />
                  <input
                     type="number"
                     placeholder="Prix max (€)"
                     className="form-control m-2"
                     value={filter.priceMax}
                     onChange={(e) => setFilter({ ...filter, priceMax: e.target.value })}
                     style={{ maxWidth: '120px' }}
                  />
               </div>
               <div className='d-flex flex-column border rounded' >
                  <label className='bg-warning rounded-top p-1' htmlFor="">Année</label>

                  <input
                     type="number"
                     placeholder="Année min"
                     className="form-control m-2"
                     value={filter.yearMin}
                     onChange={(e) => setFilter({ ...filter, yearMin: e.target.value })}
                     style={{ maxWidth: '120px' }}
                  />

                  <input
                     type="number"
                     placeholder="Année max"
                     className="form-control m-2"
                     value={filter.yearMax}
                     onChange={(e) => setFilter({ ...filter, yearMax: e.target.value })}
                     style={{ maxWidth: '120px' }}
                  />
               </div>


               <div className='d-flex flex-column border rounded' style={{ maxWidth: '200px' }}>
                  <label className='bg-warning rounded-top p-1' htmlFor="">Carburant & </label>

                  <select
                     className="form-control m-2"
                     value={filter.fuel}
                     onChange={(e) => setFilter({ ...filter, fuel: e.target.value })}
                     style={{ maxWidth: '150px' }}
                  >
                     <option value="">Carburant</option>
                     <option value="Essence">Essence</option>
                     <option value="Diesel">Diesel</option>
                     <option value="Électrique">Électrique</option>
                     <option value="Hybride">Hybride</option>
                  </select>
                  <select
                     className="form-control m-2"
                     value={filter.transmission}
                     onChange={(e) => setFilter({ ...filter, transmission: e.target.value })}
                     style={{ maxWidth: '150px' }}
                  >
                     <option value="">Boîte de vitesse</option>
                     <option value="Manuelle">Manuelle</option>
                     <option value="Automatique">Automatique</option>
                  </select>
               </div>


               <div className='d-flex flex-column border rounded' >
                  <label className='bg-warning rounded-top p-1' htmlFor="">Prix</label>

                  <input
                     type="number"
                     placeholder="Km min"
                     className="form-control m-2"
                     value={filter.mileageMin}
                     onChange={(e) => setFilter({ ...filter, mileageMin: e.target.value })}
                     style={{ maxWidth: '150px' }}
                  />
                  <input
                     type="number"
                     placeholder="Km max"
                     className="form-control m-2"
                     value={filter.mileageMax}
                     onChange={(e) => setFilter({ ...filter, mileageMax: e.target.value })}
                     style={{ maxWidth: '150px' }}
                  />
               </div>
               {/* Localisation */}
               {/* <div className='d-flex flex-column border p-1 rounded' style={{ gap: '15px', maxWidth: '150px' }}>
                  <input
                     type="text"
                     placeholder="Localisation"
                     className="form-control"
                     value={filter.location}
                     onChange={(e) => setFilter({ ...filter, location: e.target.value })}
                  />
               </div> */}

               <div className='d-flex flex-column border rounded' >
                  <label className='bg-warning rounded-top p-1' htmlFor="">Prix</label>

                  <input
                     type="number"
                     placeholder="Puissance fiscale min"
                     className="form-control m-2"
                     value={filter.fiscalPowerMin}
                     onChange={(e) => setFilter({ ...filter, fiscalPowerMin: e.target.value })}
                     style={{ maxWidth: '190px' }}
                  />

                  <input
                     type="number"
                     placeholder="Puissance fiscale max"
                     className="form-control m-2"
                     value={filter.fiscalPowerMax}
                     onChange={(e) => setFilter({ ...filter, fiscalPowerMax: e.target.value })}
                     style={{ maxWidth: '190px' }}
                  />
               </div>
               <div className='d-flex flex-column border rounded'>
                  <label className='bg-warning rounded-top p-1' htmlFor="">Prix</label>

                  <input
                     type="number"
                     placeholder="Puissance DIN min"
                     className="form-control m-2"
                     value={filter.dinPowerMin}
                     onChange={(e) => setFilter({ ...filter, dinPowerMin: e.target.value })}
                     style={{ maxWidth: '175px' }}
                  />

                  <input
                     type="number"
                     placeholder="Puissance DIN max"
                     className="form-control m-2"
                     value={filter.dinPowerMax}
                     onChange={(e) => setFilter({ ...filter, dinPowerMax: e.target.value })}
                     style={{ maxWidth: '175px' }}
                  />
               </div>
            </div>
         </div>

         {/* Bouton de recherche */}
         <div className="d-flex justify-content-center mb-4">
            <button onClick={handleSearch} className="btn btn-primary">Rechercher</button>
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
      </div>
   );
};

export default CarList;
