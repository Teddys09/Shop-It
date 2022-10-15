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
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </section>
  );
};

export default Card;
