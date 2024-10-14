import React, { useState } from 'react';

const AddCarForm = ({ addCar }) => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCar = { id: Date.now(), brand, model, year, price, image: 'url_image' };
    addCar(newCar);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Marque" value={brand} onChange={(e) => setBrand(e.target.value)} />
      <input type="text" placeholder="Modèle" value={model} onChange={(e) => setModel(e.target.value)} />
      <input type="number" placeholder="Année" value={year} onChange={(e) => setYear(e.target.value)} />
      <input type="number" placeholder="Prix" value={price} onChange={(e) => setPrice(e.target.value)} />
      <button type="submit">Ajouter l'annonce</button>
    </form>
  );
};

export default AddCarForm;
