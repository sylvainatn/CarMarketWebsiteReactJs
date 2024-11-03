import React from 'react';
import { Link } from 'react-router-dom';
import { FaCarSide } from 'react-icons/fa';

const HomePage = () => {
   return (
      <div>
         {/* Hero Section */}
         <section className="hero-section" style={styles.heroSection}>
            <h1>Bienvenue sur CarMarket</h1>
            <p>Trouvez votre prochaine voiture parmi notre sélection de véhicules de qualité.</p>
         </section>






      </div>
   );
};

// CSS styles
const styles = {
   heroSection: {
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#f8f9fa',
      color: '#333',
      marginBottom: '20px'
   },
};

export default HomePage;
