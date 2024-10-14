// src/components/ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  // Défile jusqu'en haut de la page
  }, [pathname]);  // Cela s'exécutera chaque fois que la route change

  return null;
};

export default ScrollToTop;
