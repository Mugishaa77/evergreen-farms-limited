import React from 'react';
import './Farmer.css';

export default function FarmerProfile () {
    return(
        <div className="farmer-profile">
            <div className="container">
                <h2>Farmer's Profile</h2>
                <label>Full Name:</label>
      <input
        type="text"
        name="fullName"
        className="form-control"
      />

      <label>Email Address:</label>
      <input
        type="text"
        name="emailAddress"
        className="form-control"
      />

      <label>Contact Number:</label>
      <input
        type="text"
        name="contactNumber"
        className="form-control"
      />

      <label>Stall Name:</label>
      <input
        type="text"
        name="stallName"
        className="form-control"
      />

      
    <button>Submit</button>


            </div>
        </div>
    );
}