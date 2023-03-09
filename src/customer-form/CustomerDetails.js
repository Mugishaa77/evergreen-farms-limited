import React from 'react';
import './CustomerSignUp.css';

export default function CustomerDetails ({ nextStep, onChange, user }) {


    return (
        <div className="customer-details">
            <div className="container">
                <h2>Customer Details</h2>
                <label>First Name:</label>
      <input
        type="text"
        name="firstName"
         onChange={(e) => onChange('firstName', e.target.value)}
        value={user.firstName}
        className="form-control"
      />
      <label>Last Name:</label>
      <input
        type="text"
        name="lastName"
         onChange={(e) => onChange('lastName', e.target.value)}
        value={user.lastName}
         className="form-control"
      />
      <label>Email:</label>
      <input
        type="email"
        name="email"
         onChange={(e) => onChange('email', e.target.value)}
        value={user.email}
         className="form-control"
      />
      <label>Password:</label>
      <input
        type="password"
        name="password"
         onChange={(e) => onChange('password', e.target.value)}
        value={user.password}
         className="form-control"
      />
      <button onClick={nextStep}>Next</button>

            </div>
        </div>
    );
}