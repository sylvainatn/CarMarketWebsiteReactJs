// src/components/Footer.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
   return (
      <footer className="bg-dark text-light py-4">
         <div className="container">
            <div className="row">

               {/* Section 1: À propos */}
               <div className="col-md-4">
                  <h5 className="mb-3">À propos</h5>
                  <p>Notre plateforme offre une large sélection de voitures neuves et d'occasion à vendre. Trouvez votre prochaine voiture avec nous !</p>
               </div>

               {/* Section 2: Liens rapides */}
               <div className="col-md-4">
                  <h5 className="mb-3">Liens rapides</h5>
                  <ul className="list-unstyled">
                     <li><a href="/" className="text-light">Accueil</a></li>
                     <li><a href="/acheter" className="text-light">Acheter une voiture</a></li>
                     <li><a href="/contact" className="text-light">Contactez-nous</a></li>
                     <li><a href="/about" className="text-light">À propos de nous</a></li>
                  </ul>
               </div>

               {/* Section 3: Contact et Réseaux sociaux */}
               <div className="col-md-4">
                  <h5 className="mb-3">Contactez-nous</h5>
                  <p>Email: contact@carmarket.com</p>
                  <p>Téléphone: +33 0 00 00 00 00</p>

                  <h6 className="mb-2">Suivez-nous</h6>
                  <div>
                     <a href="https://facebook.com" className="text-light me-3">
                        <i className="fab fa-facebook fa-2x"></i>
                     </a>
                     <a href="https://twitter.com" className="text-light me-3">
                        <i className="fab fa-twitter fa-2x"></i>
                     </a>
                     <a href="https://instagram.com" className="text-light me-3">
                        <i className="fab fa-instagram fa-2x"></i>
                     </a>
                  </div>
               </div>
            </div>

            {/* Section Footer */}
            <div className="text-center pt-4">
               <p className="mb-0">&copy; {new Date().getFullYear()} CarMarket. Tous droits réservés.</p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
