import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { baseUrl } from '../features/api';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseUrl}/login`, {
        email,
        password,
      });

      // Save the JWT token to local storage
      localStorage.setItem('token', response.data.token);

      // Redirect the user to the dashboard
      window.location.href = '/';

      // Show a success message
    toast.success('Login successful!', {
          position: 'top-center',
          theme: 'colored',
        });

    } catch (error) {
      setError(error.response.data.message);
      // Show an error message
    toast.error('Login failed. Please check your email and password.', {
          position: 'top-center',
          theme: 'colored',
        });
    }
  };

  return (
    <div className="log-in">
    <div className="container">
      <h1 className="log-in-title">Login</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit} >
        <div>
          <label className="label">Email Address:</label>
          <input type="text" 
          value={email}
           onChange={handleEmailChange} 
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
        <Link to ="/register" className="sign-up-here" >Sign up here</Link>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;
