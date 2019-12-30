import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <header className="app-header bg-primary">
    <nav className="container h-100 navbar navbar-dark justify-content-center">
      <div className="navbar-nav">
        <NavLink className="nav-item" to="/plan">
          <span className="nav-link">Planner</span>
        </NavLink>
        <span className="text-info mx-2">|</span>
        <NavLink className="nav-item" to="/recipe">
          <span className="nav-link">Recipe</span>
        </NavLink>
      </div>
    </nav>
  </header>
);
