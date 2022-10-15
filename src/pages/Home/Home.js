import React from 'react';
import Card from '../../components/Card/Card';
import useFetch from '../../utils/useFetch';

const Home = () => {
  useFetch();
  return (
    <section className="home-container">
      <Card />
    </section>
  );
};

export default Home;
