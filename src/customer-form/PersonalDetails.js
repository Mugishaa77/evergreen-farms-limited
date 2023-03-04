import React from 'react';
import './CustomerSignUp.css';

export default function PersonalDetails ({ nextStep, prevStep, handleChange, customerData }) {
    return (
        <div className="personal-details">
            <div className="container">
                <h2> Personal Details</h2>
                     <label>Address:</label>
      <input
        type="text"
        name="address"
        onChange={handleChange}
        value={customerData.address}
        className="form-control"
      />
      <label>City:</label>
      <input
        type="text"
        name="city"
        onChange={handleChange}
        value={customerData.city}
        className="form-control"
      />
      <label>State:</label>
      <input
        type="text"
        name="state"
        onChange={handleChange}
        value={customerData.state}
        className="form-control"
      />
      <label>Zip:</label>
      <input
        type="text"
        name="zip"
        onChange={handleChange}
        value={customerData.zip}
        className="form-control"
      />
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
            </div>
        </div>
    );
}