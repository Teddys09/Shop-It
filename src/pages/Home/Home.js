import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import useFetch from '../../utils/useFetch';
import './Home.css';

const Home = () => {
  useFetch();
  const products = useSelector((state) => state.store.products);
  return (
    <section className="home-container">
      <h2 className="home-title">
        Welcome to Shop It! <br /> Here you can find all the products you need.
      </h2>
      <Card products={products} />
    </section>
  );
};

export default Home;
