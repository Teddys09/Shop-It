import Axios from 'axios';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { addProducts } from './store';

const useFetch = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    Axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        dispatch(addProducts(res.data));
      })
      .catch((err) => console.log(err));
  }, [dispatch]);
};

export default useFetch;
