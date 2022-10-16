import React from 'react';
import './Header.css';
import Shop from '../../img/store.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <div className="title-logo-container">
          <h1>Shop It</h1>
          <img src={Shop} alt="store" />
        </div>
      </Link>
      <div className="nav-link">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </header>
  );
};

export default Header;
