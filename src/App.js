import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CarList from './components/CarList';
import Carousel from './components/Carousel';
import CarDetails from './components/CarDetails';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import Favorites from './components/Favorites';
import { cars } from './data';

function App() {
  
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (car) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some(favorite => favorite.id === car.id)) {
        return prevFavorites; // Ne rien faire si déjà dans les favoris
      }
      return [...prevFavorites, car]; // Ajouter à la liste des favoris
    });
  };

  return (
    <div>
      <Router>
        <ScrollToTop />
        <Header />
        <br />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Carousel />
                <CarList cars={cars} addToFavorites={addToFavorites} />
              </div>
            }
          />
          <Route
            path="/acheter"
            element={
              <div>
                <Carousel />
                <CarList cars={cars} addToFavorites={addToFavorites} />
              </div>
            }
          />
          <Route
            path="/cars/:id"
            element={<CarDetails />}
          />
          <Route
            path="/favorites"
            element={<Favorites favorites={favorites} />} // Passer les favoris au composant Favorites
          />
        </Routes>
      </Router>
      <br />
      <Footer />
    </div>
  );
}

export default App;
