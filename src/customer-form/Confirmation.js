import React from 'react';
import './CustomerSignUp.css';


export default function Confirmation ({ handleSubmit, prevStep, user }) {
    return (
        <div className="confirmation">
            <div className="container">
                
                <h2>Confirm Details:</h2>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Email: {user.email}</p>
      <p>Telephone: {user.telephone}</p>
      <p>ID number: {user.idNumber}</p>
      <p>City: {user.city}</p>
      <p>County: {user.county}</p>
     
      
      
      <button onClick={prevStep}>Back</button>
      <button onClick={handleSubmit}>Confirm
        
      </button>
        
        


            </div>
        </div>
    );
}