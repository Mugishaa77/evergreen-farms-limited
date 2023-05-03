import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { baseUrl } from '../features/api';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import './Grocer.css';

export default function GrocerSetUp () {

  const [grocer, setGrocer] = React.useState({
    fullName: '',
        emailAddress: '',
        contactNumber: '',
        stallName: '',
        stallNumber: ''

  })

  console.log('New grocer:', grocer);

   const handleGrocerChange = (field, value) => {
        setGrocer(prevGrocer => ({...prevGrocer, [field]: value }));

    };

   const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${baseUrl}/api/grocers`, {
        fullName: grocer.fullName,
        emailAddress: grocer.emailAddress,
        contactNumber: grocer.contactNumber,
        stallName: grocer.stallName,
        stallNumber: grocer.stallNumber

        
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
        <div className="grocer-setup">
            <div className="container">
                <h2>Profile details</h2>
                <form>
                <label>Full Name:</label>
                {/*  */}
      <input
        type="text"
        name="fullName"
        className="form-control"
        value={grocer.fullName}
            onChange={handleGrocerChange}
      />

      <label>Email Address:</label>
      <input
        type="text"
        name="grocerEmailAddress"
        className="form-control"
        value={grocer.emailAddress}
        onChange={handleGrocerChange}
            
      />

      <label>Contact Number:</label>
      <input
        type="text"
        name="grocerContactNumber"
        className="form-control"
         value={grocer.contactNumber}
           onChange={handleGrocerChange}
      />

      <label>Stall Name:</label>
      <input
        type="text"
        name="grocerStallName"
        className="form-control"
        value={grocer.stallName}
        onChange={handleGrocerChange}
            
      />


    {/* Should be auto-generated based on first-come first-serve basis // */}
      <label>Stall Number:</label>
      <input
        type="text"
        name="grocerStallNumber"
        className="form-control"
        value={grocer.stallNumber}
        onChange={handleGrocerChange}
            
      />


      
    <button onClick={handleSubmit}>Submit</button>
    </form>


            </div>
        </div>
    );
}

