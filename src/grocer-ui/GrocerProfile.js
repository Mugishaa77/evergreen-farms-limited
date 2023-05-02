import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { baseUrl } from '../features/api';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import './Grocer.css';

export default function GrocerProfile () {

  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [stallName, setStallName] = useState('');
  const [stallNumber, setStallNumber] = useState('');

   const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${baseUrl}/api/grocers`, {
        fullName,
        emailAddress,
        contactNumber,
        stallName,
        stallNumber,
      });
      // display success message to user
      toast.success ('Successful!', {
        position: 'top-center',
          theme: 'dark',

      });
       
    } catch (err) {
      console.error(err);
      // display error message to user

      toast.warning (`Failed`, {
        position: 'top-center',
        theme: 'dark',
      });
    }
  };

  
    
      
    return(
        <div className="grocer-profile">
            <div className="container">
                <h2>Grocer's Profile</h2>
                <form onSubmit={handleSubmit}>
                <label>Full Name:</label>
                {/*  */}
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
        name="grocerEmailAddress"
        className="form-control"
        value={emailAddress}
            onChange={(event) => setEmailAddress(event.target.value)}
      />

      <label>Contact Number:</label>
      <input
        type="text"
        name="grocerContactNumber"
        className="form-control"
         value={contactNumber}
            onChange={(event) => setContactNumber(event.target.value)}
      />

      <label>Stall Name:</label>
      <input
        type="text"
        name="grocerStallName"
        className="form-control"
        value={stallName}
            onChange={(event) => setStallName(event.target.value)}
      />


    {/* Should be auto-generated based on first-come first-serve basis // */}
      <label>Stall Number:</label>
      <input
        type="text"
        name="grocerStallNumber"
        className="form-control"
        value={stallNumber}
            onChange={(event) => setStallNumber(event.target.value)}
      />


      
    <button>Submit</button>
    </form>


            </div>
        </div>
    );
}