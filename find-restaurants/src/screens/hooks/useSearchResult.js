import { useState, useEffect } from 'react';
import CallAPIs from '../../api/CallAPIs';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
  
    const searchApi = async searchTerm => {
      try {
        const response = await CallAPIs.get('/search', {
          params: {
            limit: 50,
            term: searchTerm,
            location: 'san jose'
          }
        });
        setResults(response.data.businesses);
      } catch (err) {
        setErrorMessage('Something went wrong with search API');
      }
    };
  
    // Call searchApi when component
    // is first rendered.  BAD CODE!
    // searchApi('pasta');
    useEffect(() => {
      searchApi('pasta');
    }, []);
  
    return [searchApi, results, errorMessage];
}