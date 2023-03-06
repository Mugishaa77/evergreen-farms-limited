import React from 'react';
import './CustomerSignUp.css';

export default function Confirmation ({ nextStep, prevStep, customerData }) {
    return (
        <div className="confirmation">
            <div className="container">
                <h2>Confirm Details:</h2>
      <p>First Name: {customerData.firstName}</p>
      <p>Last Name: {customerData.lastName}</p>
      <p>Email: {customerData.email}</p>
      <p>Telephone: {customerData.telephone}</p>
      <p>ID number: {customerData.idNumber}</p>
      <p>City: {customerData.city}</p>
      <p>County: {customerData.county}</p>
      
      
      
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Confirm</button>

            </div>
        </div>
    );
}