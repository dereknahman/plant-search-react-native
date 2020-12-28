import axios from 'axios';
import {REACT_APP_API_KEY} from '@env';

export default axios.create({
  baseURL: `https://trefle.io/api/v1`,
  headers: {
    Authorization: REACT_APP_API_KEY,
  },
});
