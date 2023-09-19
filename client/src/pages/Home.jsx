import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Autosearch from '../components/Autosearch';

function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get('http://localhost:8000/');
        setMessage(response.data.message);
      } catch (error) {
        console.error('Error fetching home message', error);
      }
    };

    fetchMessage();
  }, []);

  return (
    <div>{<Autosearch />}</div>
  );
}

export default Home;
