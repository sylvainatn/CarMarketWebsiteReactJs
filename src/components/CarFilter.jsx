import React, { useState } from 'react';

const initialFilter = {
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
};

const CarFilter = ({ onFilterChange }) => {

   const [searchTerm, setSearchTerm] = useState('');

   const [filter, setFilter] = useState(initialFilter);

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFilter({ ...filter, [name]: value });
   };

   const handleSearchChange = (e) => {
      const value = e.target.value;
      setSearchTerm(value);
      onFilterChange({ ...filter, searchTerm: value });
   };

   const handleApplyFilters = () => {
      onFilterChange({ ...filter, searchTerm });
   };

   const handleClearFilters = () => {
      setFilter(initialFilter);
      setSearchTerm('');
      onFilterChange({ ...initialFilter, searchTerm: '' });
   };


   // Affichage
   return (
      <div className="container">
         {/* Barre de recherche */}
         <div className="mb-4 d-flex justify-content-center">
            <input
               type="text"
               className="form-control"
               placeholder="Rechercher par nom, marque, ou localisation"
               value={searchTerm}
               onChange={handleSearchChange}
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

         {/* Filtres avancés encapsulés dans une boîte */}
         <div className="filter-box  rounded-pill mb-4">


            <div className="d-flex align-items-center justify-content-center">
               <i className="fas fa-filter" style={{ marginRight: '8px', fontSize: '20px', color: '#007bff' }}></i>
               <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>Filtres</h3>
            </div>

            <div className="d-flex justify-content-center flex-wrap p-2" style={{ gap: '20px' }}>


               {/* Prix */}
               <div className='d-flex flex-column border rounded'>
                  <div className="p-2">
                     <input
                        type="number"
                        placeholder="Prix min (€)"
                        className="form-control mb-2"
                        name="priceMin"
                        value={filter.priceMin}
                        onChange={handleInputChange}
                        style={{ maxWidth: '100px', fontSize: "13px", padding: '5px' }}
                     />
                     <input
                        type="number"
                        placeholder="Prix max (€)"
                        className="form-control"
                        name="priceMax"
                        value={filter.priceMax}
                        onChange={handleInputChange}
                        style={{ maxWidth: '100px', fontSize: "13px", padding: '5px' }}
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
                        name="yearMin"
                        value={filter.yearMin}
                        onChange={handleInputChange}
                        style={{ maxWidth: '100px', fontSize: "13px", padding: '5px' }}
                     />
                     <input
                        type="number"
                        placeholder="Année max"
                        className="form-control"
                        name="yearMax"
                        value={filter.yearMax}
                        onChange={handleInputChange}
                        style={{ maxWidth: '100px', fontSize: "13px", padding: '5px' }}
                     />
                  </div>
               </div>

               {/* Carburant et Transmission */}
               <div className='d-flex flex-column border rounded'>
                  <div className='p-2'>
                     <select
                        className="form-control mb-2"
                        name="fuel"
                        value={filter.fuel}
                        onChange={handleInputChange}
                        style={{ maxWidth: '120px', fontSize: "13px", padding: '5px' }}
                     >
                        <option value="">Carburant</option>
                        <option value="Essence">Essence</option>
                        <option value="Diesel">Diesel</option>
                        <option value="Électrique">Électrique</option>
                        <option value="Hybride">Hybride</option>
                     </select>
                     <select
                        className="form-control"
                        name="transmission"
                        value={filter.transmission}
                        onChange={handleInputChange}
                        style={{ maxWidth: '120px', fontSize: "13px", padding: '5px' }}
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
                        name="mileageMin"
                        value={filter.mileageMin}
                        onChange={handleInputChange}
                        style={{ maxWidth: '100px', fontSize: "13px", padding: '5px' }}
                     />
                     <input
                        type="number"
                        placeholder="Km max"
                        className="form-control"
                        name="mileageMax"
                        value={filter.mileageMax}
                        onChange={handleInputChange}
                        style={{ maxWidth: '100px', fontSize: "13px", padding: '5px' }}
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
                        name="fiscalPowerMin"
                        value={filter.fiscalPowerMin}
                        onChange={handleInputChange}
                        style={{ maxWidth: '120px', fontSize: "13px", padding: '5px' }}
                     />
                     <input
                        type="number"
                        placeholder="Puissance fiscale max"
                        className="form-control"
                        name="fiscalPowerMax"
                        value={filter.fiscalPowerMax}
                        onChange={handleInputChange}
                        style={{ maxWidth: '120px', fontSize: "13px", padding: '5px' }}
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
                        name="dinPowerMin"
                        value={filter.dinPowerMin}
                        onChange={handleInputChange}
                        style={{ maxWidth: '130px', fontSize: "13px", padding: '5px' }}
                     />
                     <input
                        type="number"
                        placeholder="Puissance DIN max"
                        className="form-control"
                        name="dinPowerMax"
                        value={filter.dinPowerMax}
                        onChange={handleInputChange}
                        style={{ maxWidth: '130px', fontSize: "13px", padding: '5px' }}
                     />
                  </div>
               </div>

               {/* Boutons Appliquer et Effacer */}
               <div className="d-flex flex-column align-items-center" style={{ minWidth: '100px' }}>
                  <button onClick={handleClearFilters} className="btn btn-warning mb-3" style={{ width: '100%', fontSize: '13px' }}>
                     Effacer
                  </button>
                  <button onClick={handleApplyFilters} className="btn btn-primary " style={{ width: '100%', fontSize: '13px' }}>
                     Appliquer
                  </button>

               </div>
            </div>
         </div>
      </div>
   );
};

export default CarFilter;


