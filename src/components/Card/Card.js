import React from 'react';

import './Card.css';
import { Link } from 'react-router-dom';

const Card = (products) => {
  return (
    <section className="products-section">
      {products.products.map((product) => (
        <Link to={`/product?id=${product.id}`} key={product.id}>
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <div className="line"></div>
            <h3>{product.title}</h3>
            <div className="line"></div>
            <p>{product.price}€</p>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Card;
