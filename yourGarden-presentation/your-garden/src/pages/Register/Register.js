import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './register.css';

const Register = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    pseudo: ''
  });

  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/accounts', credentials)
      .then(res => {
        console.log('Compte créé avec succès:', res.data);
        alert("Inscription réussie ! Vous pouvez maintenant vous connecter.");
        navigate('/login');
      })
      .catch(error => {
        console.error('Erreur lors de l’inscription:', error);
        alert("Erreur lors de l’inscription");
      });
  };

  return (
    <div className="authenticate-page">
      <h2>Register</h2>
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
          <label htmlFor="pseudo">Pseudo</label>
          <input
            type="text"
            name="pseudo"
            value={credentials.pseudo}
            onChange={onChange}
            required
          />
        </div>
        <div className="group">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;