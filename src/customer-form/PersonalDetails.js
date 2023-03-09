import React from 'react';
import './CustomerSignUp.css';

export default function PersonalDetails ({ nextStep, prevStep, onChange, user }) {
    return (
        <div className="personal-details">
            <div className="container">
                <h2> Personal Details</h2>
                     <label>Telephone:</label>
      <input
        type="text"
        name="telephone"
         onChange={(e) => onChange('telephone', e.target.value)}
        
        value={user.telephone}
        className="form-control"
      />

      <label>ID Number:</label>
      <input
        type="text"
        name="idNumber"
         onChange={(e) => onChange('idNumber', e.target.value)}
        value={user.idNumber}
        className="form-control"
      />
      
      <label>City:</label>
      <input
        type="text"
        name="city"
         onChange={(e) => onChange('city', e.target.value)}
        value={user.city}
        className="form-control"
      />
      
      <label>County:</label>
      <input
        type="text"
        name="county"
         onChange={(e) => onChange('county', e.target.value)}
        value={user.county}
        className="form-control"
      />
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
            </div>
        </div>
    );
}