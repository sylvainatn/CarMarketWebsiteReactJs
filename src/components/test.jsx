<div className="container">


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



   {/* Filtres avancés encapsulés dans une boîte */}
   <div className="filter-box border  rounded-pill mb-4">
      <div className="d-flex justify-content-center flex-wrap p-2" style={{ gap: '20px' }}>

         {/* Prix */}
         <div className='d-flex flex-column border rounded'>
            <div className="p-2">
               <input
                  type="number"
                  placeholder="Prix min (€)"
                  className="form-control mb-2"
                  value={filter.priceMin}
                  onChange={(e) => setFilter({ ...filter, priceMin: e.target.value })}
                  style={{ maxWidth: '100px', fontSize: "13px", padding: '5px' }}
               />
               <input
                  type="number"
                  placeholder="Prix max (€)"
                  className="form-control"
                  value={filter.priceMax}
                  onChange={(e) => setFilter({ ...filter, priceMax: e.target.value })}
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
                  value={filter.yearMin}
                  onChange={(e) => setFilter({ ...filter, yearMin: e.target.value })}
                  style={{ maxWidth: '100px', fontSize: "13px", padding: '5px' }}

               />
               <input
                  type="number"
                  placeholder="Année max"
                  className="form-control"
                  value={filter.yearMax}
                  onChange={(e) => setFilter({ ...filter, yearMax: e.target.value })}
                  style={{ maxWidth: '100px', fontSize: "13px", padding: '5px' }}

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
                  value={filter.transmission}
                  onChange={(e) => setFilter({ ...filter, transmission: e.target.value })}
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
                  value={filter.mileageMin}
                  onChange={(e) => setFilter({ ...filter, mileageMin: e.target.value })}
                  style={{ maxWidth: '100px', fontSize: "13px", padding: '5px' }}

               />
               <input
                  type="number"
                  placeholder="Km max"
                  className="form-control"
                  value={filter.mileageMax}
                  onChange={(e) => setFilter({ ...filter, mileageMax: e.target.value })}
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
                  value={filter.fiscalPowerMin}
                  onChange={(e) => setFilter({ ...filter, fiscalPowerMin: e.target.value })}
                  style={{ maxWidth: '120px', fontSize: "13px", padding: '5px' }}

               />
               <input
                  type="number"
                  placeholder="Puissance fiscale max"
                  className="form-control"
                  value={filter.fiscalPowerMax}
                  onChange={(e) => setFilter({ ...filter, fiscalPowerMax: e.target.value })}
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
                  value={filter.dinPowerMin}
                  onChange={(e) => setFilter({ ...filter, dinPowerMin: e.target.value })}
                  style={{ maxWidth: '130px', fontSize: "13px", padding: '5px' }}

               />
               <input
                  type="number"
                  placeholder="Puissance DIN max"
                  className="form-control"
                  value={filter.dinPowerMax}
                  onChange={(e) => setFilter({ ...filter, dinPowerMax: e.target.value })}
                  style={{ maxWidth: '130px', fontSize: "13px", padding: '5px' }}

               />
            </div>
         </div>
         {/* Bouton de recherche */}
         <div className="d-flex justify-content-center mb-4">
            <button onClick={filterCars} className="btn btn-primary">Appliquer</button>
         </div>
      </div>

   </div>


</div>