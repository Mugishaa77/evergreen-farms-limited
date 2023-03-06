import React from 'react';
import './CustomerSignUp.css';

export default function PersonalDetails ({ nextStep, prevStep, handleChange, customerData }) {
    return (
        <div className="personal-details">
            <div className="container">
                <h2> Personal Details</h2>
                     <label>Telephone:</label>
      <input
        type="text"
        name="telephone"
        onChange={handleChange}
        value={customerData.telephone}
        className="form-control"
      />

      <label>ID Number:</label>
      <input
        type="text"
        name="idNumber"
        onChange={handleChange}
        value={customerData.idNumber}
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
      
      <label>County:</label>
      <input
        type="text"
        name="county"
        onChange={handleChange}
        value={customerData.county}
        className="form-control"
      />
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
            </div>
        </div>
    );
}