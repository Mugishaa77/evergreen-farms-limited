import React from 'react';
import './Grocer.css';

export default function GrocerProfile () {
    return(
        <div className="grocer-profile">
            <div className="container">
                <h2>Grocer's Profile</h2>
                <label>Full Name:</label>
      <input
        type="text"
        name="fullName"
        className="form-control"
      />

      <label>Email Address:</label>
      <input
        type="text"
        name="grocerEmailAddress"
        className="form-control"
      />

      <label>Contact Number:</label>
      <input
        type="text"
        name="grocerContactNumber"
        className="form-control"
      />

      <label>Stall Name:</label>
      <input
        type="text"
        name="grocerStallName"
        className="form-control"
      />

      
    <button>Submit</button>


            </div>
        </div>
    );
}