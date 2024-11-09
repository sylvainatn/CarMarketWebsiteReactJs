import React from 'react';


const HomePage = () => {
   return (
      <div>
         {/* Hero Section */}
         <section className="hero-section container" style={styles.heroSection}>
            <h1 style={styles.typewriter}>Bienvenue sur CarMarket</h1>
            <p>
               Découvrez la plateforme idéale pour trouver votre prochaine voiture parmi une vaste sélection de véhicules de qualité, soigneusement vérifiés pour répondre à tous les besoins et budgets.
               <br />
               Que vous soyez à la recherche d'une citadine économique, d'un SUV spacieux ou d'une voiture électrique innovante, nous avons ce qu'il vous faut.
               <br />
               Notre priorité est de vous offrir une expérience de recherche fluide, avec des outils de filtres avancés pour affiner vos critères et vous rapprocher rapidement de votre choix idéal.
               <br />
               Chez CarMarket, chaque véhicule est inspecté et approuvé pour sa fiabilité, sa sécurité et son prix compétitif.
               <br />
               <b>CarMarket :</b> un choix fiable pour des véhicules d'exception !
            </p>
         </section>
      </div>
   );
};

// CSS styles
const styles = {
   heroSection: {
      fontSize: '15px',
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#f8f9fa',
      color: '#333',
      marginBottom: '20px',
   },

};

export default HomePage;
