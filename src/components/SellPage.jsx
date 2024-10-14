// src/components/SellPage.js
import React, { useState } from 'react';

const SellPage = ({ addCar }) => {

  const [carDetails, setCarDetails] = useState({
    id: '', // Créez un identifiant unique
    name: '',
    year: '',
    mileage: '',
    fuel: '',
    transmission: '',
    location: '',
    price: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  // Gestion du fichier image
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Récupérer le premier fichier sélectionné
    setCarDetails((prevDetails) => ({
      ...prevDetails,
      image: file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ajouter un identifiant unique pour la nouvelle voiture
    const newCar = {
      ...carDetails,
      id: Date.now() // Utiliser la date actuelle pour générer un ID unique
    };

    addCar(newCar); // Ajouter la nouvelle voiture via la fonction passée en prop
    console.log('Nouvelle voiture ajoutée:', newCar);
  };

  return (
    <div className="container" style={{ maxWidth: '600px', marginTop: '50px' }}>
      <h2 className="text-center">Vendre une voiture</h2>
      <form onSubmit={handleSubmit} className="border p-4 rounded">
        {/* Champs du formulaire pour les détails de la voiture */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Marque et Modèle</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={carDetails.name}
            onChange={handleChange}
            required
          />
        </div>
        {/* Autres champs */}
        <div className="mb-3">
          <label htmlFor="year" className="form-label">Année</label>
          <input
            type="number"
            className="form-control"
            id="year"
            name="year"
            value={carDetails.year}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mileage" className="form-label">Kilométrage</label>
          <input
            type="number"
            className="form-control"
            id="mileage"
            name="mileage"
            value={carDetails.mileage}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fuel" className="form-label">Carburant</label>
          <select
            className="form-select"
            id="fuel"
            name="fuel"
            value={carDetails.fuel}
            onChange={handleChange}
            required
          >
            <option value="">Choisir...</option>
            <option value="Essence">Essence</option>
            <option value="Diesel">Diesel</option>
            <option value="Hybride">Hybride</option>
            <option value="Électrique">Électrique</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="transmission" className="form-label">Boîte de vitesse</label>
          <select
            className="form-select"
            id="transmission"
            name="transmission"
            value={carDetails.transmission}
            onChange={handleChange}
            required
          >
            <option value="">Choisir...</option>
            <option value="Manuelle">Manuelle</option>
            <option value="Automatique">Automatique</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">Localisation</label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            value={carDetails.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Prix</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={carDetails.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">URL de l'image</label>
          <input
            type="file"
            className="form-control"
            id="image"
            name="image"
            accept="images/*"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-danger w-100">Soumettre</button>
      </form>
    </div>
  );
};

export default SellPage;
