import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Search from '../components/Search';

function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      // try {
      //   const response = await axios.get('http://localhost:8000/');
      //   setMessage(response.data.message);
      // } catch (error) {
      //   console.error('Error fetching home message', error);
      // }
    };

    fetchMessage();
  }, []);

  return (
    <>
      NOTHING HERE SNDJASDFALKJS
    </>
  );
}

export default Home;
