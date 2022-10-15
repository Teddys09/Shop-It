import Axios from 'axios';

import { useDispatch } from 'react-redux';
import { addProducts } from './store';

const useFetch = () => {
  const dispatch = useDispatch();

  Axios.get('https://fakestoreapi.com/products')
    .then((res) => {
      dispatch(addProducts(res.data));
    })
    .catch((err) => console.log(err));
};

export default useFetch;
