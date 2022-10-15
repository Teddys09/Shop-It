import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';
import { useSelector, useDispatch } from 'react-redux';
import DropDown from '../../components/DropDown/DropDown';
import { addToCart } from '../../utils/store';

const Product = () => {
  const allProducts = useSelector((state) => state.store.products);
  const cart = useSelector((state) => state.store.cart);
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const url = window.location.href;
  const id = url.substring(url.lastIndexOf('=') + 1) * 1;
  const product = allProducts.find((product) => product.id === id * 1);

  const addToCartHandler = () => {
    if (cart.find((item) => item.id === product.id)) {
      if (isClicked) {
        return;
      } else {
        let button = document.querySelector('.product-container');
        let span = document.createElement('span');
        span.innerHTML = 'Item already in cart';
        span.classList.add('alreadyincart');
        button.appendChild(span);
        setIsClicked(true);
      }
    } else if (!cart.find((item) => item.id === product.id)) {
      dispatch(addToCart(product));
      navigate('/cart');
    }
  };

  if (product) {
    const description =
      product.description[0].toUpperCase() + product.description.slice(1);
    return (
      <section className="product-page">
        <div className="product-container">
          <div className="product-title">
            <h2>{product.title}</h2>
          </div>
          <div className="product-image">
            <img src={product.image} alt={product.title} />
          </div>

          <DropDown description={description} />
          <div className="product-price">
            <p>{product.price}€</p>
          </div>
          <div className="addtocart" onClick={() => addToCartHandler()}>
            Add to cart
          </div>
        </div>
      </section>
    );
  } else {
    return <div className="error-product">Error Product not found !</div>;
  }
};

export default Product;
