import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-bar__nav-list">
        <li className="nav-bar__nav-item">
          <NavLink className="link" exact to="/">Home</NavLink>
        </li>
        <li className="nav-bar__nav-item">
          <NavLink className="link" to="/alta">Alta</NavLink>
        </li>
        <li className="nav-bar__nav-item">
          <NavLink className="link" to="/contacto">Contacto</NavLink>
        </li>
        <li className="nav-bar__nav-item">
          <NavLink className="link" to="/nosotros">Nosotros</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;