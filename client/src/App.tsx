import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import './App.css'

const App: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response: AxiosResponse = await axios.post('/login', { username, password });
      // Handle successful login, e.g., redirect or update state
      console.log(response.data.message);
    } catch (error: any) {
      // Handle login error
      console.error(error.response?.data.message || 'An error occurred');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default App;
