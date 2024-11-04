import React, { useState, useEffect } from 'react';
import { useLocation, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CarList from './components/CarList';
import Carousel from './components/Carousel';
import CarDetails from './components/CarDetails';
import Footer from './components/Footer';
import Favorites from './components/Favorites';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import SellPage from './components/SellPage';
import HomePage from './components/HomePage';
import { cars as initialCars } from './data';

function App() {

  const [cars, setCars] = useState(initialCars);
  const [favorites, setFavorites] = useState([]);

  const addCar = (newCar) => {
    setCars((prevCars) => [...prevCars, newCar]);
  };

  const addToFavorites = (car) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some(favorite => favorite.id === car.id)) {
        return prevFavorites; // Ne rien faire si déjà dans les favoris
      }
      return [...prevFavorites, car]; // Ajouter à la liste des favoris dans un nv tableau
    });
  };

  const removeFromFavorites = (carToRemove) => {
    setFavorites(favorites.filter((car) => car.id !== carToRemove.id));
  };

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <div>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <HomePage />
                <CarList
                  cars={cars}
                  addToFavorites={addToFavorites}
                  favorites={favorites}
                  removeFromFavorites={removeFromFavorites} />
              </div>
            }
          />
          <Route
            path="/acheter"
            element={
              <div>
                {/* <Carousel /> */}
                <HomePage />
                <CarList
                  cars={cars}
                  addToFavorites={addToFavorites}
                  favorites={favorites}
                  removeFromFavorites={removeFromFavorites} />
              </div>
            }
          />
          <Route
            path="/cars/:id"
            element={
              <CarDetails
                addToFavorites={addToFavorites}
                removeFromFavorites={removeFromFavorites}
                favorites={favorites}
              />
            }
          />
          <Route path="/favorites" element={<Favorites favorites={favorites} removeFromFavorites={removeFromFavorites} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/vendre" element={<SellPage addCar={addCar} />} />
        </Routes>
      </Router>
      <br />
      <Footer />
    </div>
  );
}

export default App;
