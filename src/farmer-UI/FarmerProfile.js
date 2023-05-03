import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Farmer.css';
import { baseUrl } from '../features/api';

export default function FarmerProfile() {
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [stallName, setStallName] = useState('');
  const [stallNumber, setStallNumber] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${baseUrl}/api/farmers`, {
        fullName,
        emailAddress,
        contactNumber,
        stallName,
        stallNumber,
      });
      // display success message to user
      toast.success ('Successful!', {
        position: 'top-center',
          theme: 'colored',

      });
       
    } catch (err) {
      console.error(err);
      // display error message to user

      toast.error (`Failed`, {
        position: 'top-center',
        theme: 'colored',
      });
    }
  };

  
  
  return (
    <div className="farmer-profile">
      <div className="container">
        {/* Will probably get more information that is relevant to the stall later */}
        <h2>Farmer's Profile</h2>

        <form >
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            className="form-control"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />

          <label>Email Address:</label>
          <input
            type="text"
            name="emailAddress"
            className="form-control"
            value={emailAddress}
            onChange={(event) => setEmailAddress(event.target.value)}
          />

          <label>Contact Number:</label>
          <input
            type="text"
            name="contactNumber"
            className="form-control"
            value={contactNumber}
            onChange={(event) => setContactNumber(event.target.value)}
          />

          <label>Stall Name:</label>
          <input
            type="text"
            name="stallName"
            className="form-control"
            value={stallName}
            onChange={(event) => setStallName(event.target.value)}
          />

          {/* Should be auto-generated based on first-come first-serve basis */}
          <label>Stall Number:</label>
          <input
            type="text"
            name="farmerStallNumber"
            className="form-control"
            value={stallNumber}
            onChange={(event) => setStallNumber(event.target.value)}
          />

          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
}
