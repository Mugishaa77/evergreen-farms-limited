import React from 'react';
import './CustomerSignUp.css';

export default function CustomerDetails ({ nextStep, handleChange, customerData }) {


    return (
        <div className="customer-details">
            <div className="container">
                <h2>Customer Details</h2>
                <label>First Name:</label>
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        value={customerData.firstName}
        className="form-control"
      />
      <label>Last Name:</label>
      <input
        type="text"
        name="lastName"
        onChange={handleChange}
        value={customerData.lastName}
         className="form-control"
      />
      <label>Email:</label>
      <input
        type="email"
        name="email"
        onChange={handleChange}
        value={customerData.email}
         className="form-control"
      />
      <label>Password:</label>
      <input
        type="password"
        name="password"
        onChange={handleChange}
        value={customerData.password}
         className="form-control"
      />
      <button onClick={nextStep}>Next</button>

            </div>
        </div>
    );
}