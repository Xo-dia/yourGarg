import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './auth.css';

const Account = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  // Gestion de la modification des champs du formulaire
  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  // Soumission du formulaire
  const onSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/accounts/authenticate', credentials)
      .then(res => {
        console.log('Réponse du backend Spring:', res.data);
        // Stocker le token si nécessaire, puis rediriger
        localStorage.setItem('token', res.data.access_token);
        navigate('/dashboard'); // Remplace par la page que tu veux après login
      })
      .catch(error => {
        console.error('API error:', error);
        alert("Connexion error");
      });
  };

  return (
    <div className="auth-page">
      <h2>Connexion</h2>
      <form onSubmit={onSubmit}>
        <div className="group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={onChange}
            required
          />
        </div>
        <div className="group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={onChange}
            required
          />
        </div>
        <div className="group">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Account;