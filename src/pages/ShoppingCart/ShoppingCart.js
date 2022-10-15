import React from 'react';
import './ShoppingCart.css';
import { useSelector } from 'react-redux';
import Card from '../../components/Card/Card';

const ShoppingCart = () => {
  const cart = useSelector((state) => state.store.cart);
  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      <Card products={cart} />
    </div>
  );
};

export default ShoppingCart;
