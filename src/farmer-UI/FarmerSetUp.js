import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { baseUrl } from '../features/api';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import './Farmer.css';

export default function FarmerSetUp () {

  const [farmer, setFarmer] = React.useState({
    fullName: '',
        emailAddress: '',
        contactNumber: '',
        stallName: '',
        stallNumber: ''

  })

  console.log('New farmer:', farmer);

   const handleFarmerChange = (field, value) => {
        setFarmer(prevFarmer => ({...prevFarmer, [field]: value }));

    };

   const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${baseUrl}/api/farmers`, {
        fullName: farmer.fullName,
        emailAddress: farmer.emailAddress,
        contactNumber: farmer.contactNumber,
        stallName: farmer.stallName,
        stallNumber: farmer.stallNumber

        
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
      
    return(
        <div className="farmer-setup">
            <div className="container">
                <h2>Profile details</h2>
                <form>
                <label>Full Name:</label>
                
      <input
        type="text"
        name="fullName"
        className="form-control"
        value={farmer.fullName}
            onChange={handleFarmerChange}
      />

      <label>Email Address:</label>
      <input
        type="text"
        name="farmerEmailAddress"
        className="form-control"
        value={farmer.emailAddress}
        onChange={handleFarmerChange}
            
      />

      <label>Contact Number:</label>
      <input
        type="text"
        name="farmerContactNumber"
        className="form-control"
         value={farmer.contactNumber}
           onChange={handleFarmerChange}
      />

      <label>Stall Name:</label>
      <input
        type="text"
        name="farmerStallName"
        className="form-control"
        value={farmer.stallName}
        onChange={handleFarmerChange}
            
      />


    {/* Should be auto-generated based on first-come first-serve basis // */}
      <label>Stall Number:</label>
      <input
        type="text"
        name="farmerStallNumber"
        className="form-control"
        value={farmer.stallNumber}
        onChange={handleFarmerChange}
            
      />


      <Link to ="/farmer-dashboard/farmer-setup">
         <button onClick={handleSubmit}>Submit</button>
      </Link>
   
    </form>


            </div>
        </div>
    );
}

