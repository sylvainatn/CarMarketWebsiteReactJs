import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaCar } from 'react-icons/fa';

const Header = () => {
   return (
      <header>
         <Navbar bg="dark" expand="md" variant="dark" className="py-3">
            <Container>

               {/* Titre du site avec le logo de voiture */}
               <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
                  <span style={{ fontFamily: 'Roboto', fontWeight: 'bold', fontSize: '1.6rem', color: '#fff' }}>
                     CarMarket
                  </span>
                  <FaCar style={{ color: '#fff', fontSize: '2rem', marginLeft: '8px' }} />
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
                        style={{ color: '#fff', fontSize: '1.3rem', margin: '0 10px' }}
                     >
                        Acheter
                     </NavLink>
                     <NavLink
                        to="/vendre"
                        className={({ isActive }) =>
                           isActive ? 'nav-link px-2 active-link' : 'nav-link px-2'}
                        style={{ color: '#fff', fontSize: '1.3rem', margin: '0 10px' }}
                     >
                        Vendre
                     </NavLink>
                     <NavLink
                        to="/favorites"
                        className={({ isActive }) =>
                           isActive ? 'nav-link px-2 active-link' : 'nav-link px-2'}
                        style={{ color: '#fff', fontSize: '1.3rem', margin: '0 10px' }}
                     >
                        Favoris
                     </NavLink>
                     <NavLink
                        to="/services"
                        className={({ isActive }) =>
                           isActive ? 'nav-link px-2 active-link' : 'nav-link px-2'}
                        style={{ color: '#fff', fontSize: '1.3rem', margin: '0 10px' }}
                     >
                        Services
                     </NavLink>
                  </Nav>

                  {/* Bouton de connexion aligné à droite */}
                  <div className="text-end">
                     <NavLink to="/login">
                        <Button variant="outline-danger" style={{ margin: '0px 10px' }}>Se Connecter</Button>
                     </NavLink>
                  </div>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </header>
   );
};

export default Header;
