import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });

      // Save the JWT token to local storage
      localStorage.setItem('token', response.data.token);

      // Redirect the user to the dashboard
      window.location.href = '/';
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="log-in">
    <div className="container">
      <h1 className="log-in-title">Login</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit} >
        <div>
          <label className="label">Username:</label>
          <input type="text" 
          value={username}
           onChange={handleUsernameChange} 
           className ="form-control"/>
        </div>
        <div>
          <label className="label">Password:</label>
          <input type="password"
           value={password} 
           onChange={handlePasswordChange} 
           className ="form-control"/>
        </div>
        <button 
        className="log-in-button"
        type="submit">Login</button>
        <div className="sign-up-guide">
        <p>Don't have an account?</p>
        <Link to ="/sign-up" className="sign-up-here" >Sign up here</Link>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;
