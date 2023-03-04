import React from 'react';
import { Link } from 'react-router-dom'
import './CustomerSignUp.css';

export default function Success () {

    
    return (
        <div className="success">
            <div className="container">
                 <h2>Success!</h2>
      <p>Your account has been created.</p>

      <Link to ="/login">
        <button>Log In</button>
      </Link>

            </div>
        </div>
    );
}