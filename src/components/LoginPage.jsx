// src/components/LoginPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Logique de connexion ici, par exemple envoyer à une API
    console.log('Connexion:', { email, password });
  };

  return (
    <div className="container" style={{ maxWidth: '400px', marginTop: '50px', marginBottom: '' }}>
      <h2 className="text-center">Connexion</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit" className="btn btn-danger w-100">Se connecter</button>
      </form>
      <p className="text-center mt-3">
        Vous n'avez pas de compte ? <Link to="/signup">Inscrivez-vous</Link>
      </p>
    </div>
  );
};

export default LoginPage;
