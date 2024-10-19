// src/components/SignupPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignupPage = () => {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');

   const handleSignup = (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
         alert("Les mots de passe ne correspondent pas !");
         return;
      }
      console.log('Inscription:', { email, password });
   };

   return (
      <div className="container" style={{ maxWidth: '400px', marginTop: '50px' }}>
         <h2 className="text-center">Inscription</h2>
         <form onSubmit={handleSignup}>
            <div className="mb-3">
               <label htmlFor="email" className="form-label">Adresse e-mail</label>
               <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
               />
            </div>
            <div className="mb-3">
               <label htmlFor="password" className="form-label">Mot de passe</label>
               <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
               />
            </div>
            <div className="mb-3">
               <label htmlFor="confirmPassword" className="form-label">Confirmer le mot de passe</label>
               <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
               />
            </div>
            <button type="submit" className="btn btn-danger w-100">S'inscrire</button>
         </form>
         <p className="text-center mt-3">
            Vous avez déjà un compte ? <Link to="/login">Connectez-vous</Link>
         </p>
      </div>
   );
};

export default SignupPage;
