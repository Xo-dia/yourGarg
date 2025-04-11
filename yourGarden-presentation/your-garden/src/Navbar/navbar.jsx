import React, { useState } from "react";
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import logo from '../assets/Group13.jpg';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar-bg">
      <div className="sb__navbar">
        <div className="sb__navbar-links">
          <div className="sb__navbar-links_logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="sb__navbar-links_container">
            <p><Link to="/about">ABOUT</Link></p>
            <p><Link to="/organizations">ORGANIZATIONS</Link></p>
            <p><Link to="/account">Sign In</Link></p>
            <p><Link to="/register">Sign Up</Link></p>
          </div>
        </div>

        <div className="sb__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
          ) : (
            <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />
          )}
          {toggleMenu && (
            <div className="sb__navbar-menu_container scale-up-center">
              <div className="sb__navbar-menu_container-links">
                <p><Link to="/about">ABOUT</Link></p>
                <p><Link to="/organizations">ORGANIZATIONS</Link></p>
                <p><Link to="/individuals">INDIVIDUALS</Link></p>
              </div>
              <div className="sb__navbar-menu_container-links-sign">
                <Link to="/signup">
                  <button type="button">JOIN US</button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;