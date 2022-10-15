import React from 'react';
import Card from '../../components/Card/Card';
import useFetch from '../../utils/useFetch';
import './Home.css';

const Home = () => {
  useFetch();
  return (
    <section className="home-container">
      <h2 className="home-title">
        Welcome to Shop It! <br /> Here you can find all the products you need.
      </h2>
      <Card />
    </section>
  );
};

export default Home;
