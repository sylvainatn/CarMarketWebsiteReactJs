import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaCar } from 'react-icons/fa';
// import './Header.css';  // Importer le fichier CSS

const Header = () => {
   return (
      <header className="sticky-header"> {/* Appliquez la classe sticky-header */}
         <Navbar bg="dark" expand="md" variant="dark" className="py-3">
            <Container>

               {/* Titre du site avec le logo de voiture */}
               <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
                  <span className="site-name">
                     CarMarket
                  </span>
                  <FaCar className="car-icon" />
               </Navbar.Brand>

               {/* Bouton de bascule pour les petits écrans */}
               <Navbar.Toggle aria-controls="navbarResponsive" />

               {/* Navigation principale */}
               <Navbar.Collapse id="navbarResponsive">
                  <Nav className="ms-auto">
                     <NavLink
                        to="/acheter"
                        className={({ isActive }) =>
                           isActive ? 'nav-link px-2 active-link' : 'nav-link px-2'}
                     >
                        Acheter
                     </NavLink>
                     <NavLink
                        to="/vendre"
                        className={({ isActive }) =>
                           isActive ? 'nav-link px-2 active-link' : 'nav-link px-2'}
                     >
                        Vendre
                     </NavLink>
                     <NavLink
                        to="/favorites"
                        className={({ isActive }) =>
                           isActive ? 'nav-link px-2 active-link' : 'nav-link px-2'}
                     >
                        Favoris
                     </NavLink>
                     <NavLink
                        to="/services"
                        className={({ isActive }) =>
                           isActive ? 'nav-link px-2 active-link' : 'nav-link px-2'}
                     >
                        Services
                     </NavLink>
                  </Nav>

                  {/* Bouton de connexion */}
                  <div className="text-end">
                     <NavLink to="/login">
                        <Button variant="outline-danger" className="btn">
                           Se Connecter
                        </Button>
                     </NavLink>
                  </div>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </header>
   );
};

export default Header;
