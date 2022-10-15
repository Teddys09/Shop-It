import React from 'react';
import { useSelector } from 'react-redux';
import './Card.css';

const Card = () => {
  const products = useSelector((state) => state.store.products);
  console.log(products);
  return (
    <section className="products-section">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.title} />
          <div className="line"></div>
          <h3>{product.title}</h3>
          <div className="line"></div>
          <p>{product.price}€</p>
        </div>
      ))}
    </section>
  );
};

export default Card;
