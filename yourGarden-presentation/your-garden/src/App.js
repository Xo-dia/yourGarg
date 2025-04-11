import React from 'react';
import './App.css';
import Navbar from './Navbar/navbar';
import Home from './pages/Home/home';
import Account from './pages/Login/Login';
import Authenticate from './pages/Register/Register'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/register" element={<Authenticate />} />
      </Routes>
    </div>
  );
}

export default App;
