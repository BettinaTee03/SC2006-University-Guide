import React, { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleCreateUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        username, 
        password,
      }),
    });
  }

  return (
    <div className="App">
      <h2>Login</h2>
      <form onSubmit={handleCreateUser}>
        <label htmlFor="login-username">Username:</label>
        <input id="login-username"
          type="text"
          value={username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUsername(e.target.value)
          }}
        />
        <label htmlFor="login-password">Password:</label>
        <input id="login-password"
          type="text"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value)
          }}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default App;
