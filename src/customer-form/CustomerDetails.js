import React from 'react';

export default function CustomerDetails ({ nextStep, handleChange, customerData }) {


    return (
        <div className="customer-details">
            <div className="container">
                <label>First Name:</label>
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        value={customerData.firstName}
      />
      <label>Last Name:</label>
      <input
        type="text"
        name="lastName"
        onChange={handleChange}
        value={customerData.lastName}
      />
      <label>Email:</label>
      <input
        type="email"
        name="email"
        onChange={handleChange}
        value={customerData.email}
      />
      <label>Password:</label>
      <input
        type="password"
        name="password"
        onChange={handleChange}
        value={customerData.password}
      />
      <button onClick={nextStep}>Next</button>

            </div>
        </div>
    );
}