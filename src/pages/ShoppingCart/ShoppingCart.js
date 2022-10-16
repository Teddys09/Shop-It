import React from 'react';
import './ShoppingCart.css';
import { useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import { useNavigate } from 'react-router-dom';
import ArrowLeft from '../../img/arrow-left.svg';

const ShoppingCart = () => {
  const cart = useSelector((state) => state.store.cart);
  console.log(cart);
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);
  console.log(totalPrice);
  const navigate = useNavigate();
  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <div className="card-price-container">
        <Card products={cart} />
        <div className="totalPrice">
          <h2>Total Price: {totalPrice}€</h2>
          <div className="purchase-button">Purchase</div>
        </div>
      </div>
      <div className="arrow-left">
        <img src={ArrowLeft} alt="arrow left" onClick={() => navigate('/')} />
      </div>
    </div>
  );
};

export default ShoppingCart;
