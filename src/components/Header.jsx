// src/components/Header.jsx
import { NavLink } from 'react-router-dom';

const Header = () => {
   return (
      <div className='bg-dark'>
         <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
               <div className="col-md-3 mb-2 mb-md-0">
                  <NavLink
                     to="/"
                     className="d-inline-flex  text-decoration-none h1"
                     style={{ color: '#fff', fontFamily: 'Roboto', fontWeight: 'bold' }}
                  >
                     CarMarket
                  </NavLink>
               </div>

               <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                  <li>
                     <NavLink
                        to="/acheter"
                        className={({ isActive }) => isActive ? 'nav-link px-2 link-secondary' : 'nav-link px-2'}
                        style={{ color: '#fff', fontSize: '1.3rem' }}
                     >
                        Acheter
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        to="/vendre"
                        className={({ isActive }) => isActive ? 'nav-link px-2 link-secondary' : 'nav-link px-2'}
                        style={{ color: '#fff', fontSize: '1.3rem' }}
                     >
                        Vendre
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        to="/favorites"
                        className={({ isActive }) => isActive ? 'nav-link px-2 link-secondary' : 'nav-link px-2'}
                        style={{ color: '#fff', fontSize: '1.3rem' }}
                     >
                        Favoris
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        to="/services"
                        className={({ isActive }) => isActive ? 'nav-link px-2 link-secondary' : 'nav-link px-2'}
                        style={{ color: '#fff', fontSize: '1.3rem' }}
                     >
                        Services
                     </NavLink>
                  </li>
               </ul>

               <div className="col-md-3 text-end">
                  <NavLink
                     to="/login"
                  >
                     <button type="button" className="btn btn-outline-danger me-2">Se Connecter</button>
                  </NavLink>

               </div>
            </header>
         </div>

      </div>

   );
};

export default Header;
