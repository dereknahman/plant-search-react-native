import {useState} from 'react';
import api from '../../config/api/api';

const useResults = () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (term) => {
    try {
      const {data} = await api.get('/plants/search', {
        params: {
          q: term,
        },
      });
      console.log('====================================');
      console.log('--->', data.data);
      console.log('====================================');
      setResults(data.data);
    } catch (err) {
      setErrorMessage('No data found. Are you sure you spelled it right?');
    }
  };

  return {searchApi, errorMessage, setErrorMessage, results};
};

export default useResults;
