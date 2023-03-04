import React from 'react';

export default function PersonalDetails ({ nextStep, prevStep, handleChange, customerData }) {
    return (
        <div className="personal-details">
            <div className="container">
                     <label>Address:</label>
      <input
        type="text"
        name="address"
        onChange={handleChange}
        value={customerData.address}
      />
      <label>City:</label>
      <input
        type="text"
        name="city"
        onChange={handleChange}
        value={customerData.city}
      />
      <label>State:</label>
      <input
        type="text"
        name="state"
        onChange={handleChange}
        value={customerData.state}
      />
      <label>Zip:</label>
      <input
        type="text"
        name="zip"
        onChange={handleChange}
        value={customerData.zip}
      />
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
            </div>
        </div>
    );
}