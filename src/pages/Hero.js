import React from 'react';
import './Hero.css';
import hanging from "../logo/hanging.jpg";

export default function Hero() {
  return (
    <div className="hero">
      <div className="position-relative">
         <div className="open-sign">
          <img src={hanging} width="320" height="160" alt="open 24hrs" />
        
         </div>
          
        <div className="text-below-image">
            <h2>Your one stop shop for all your<br/>
            grocery and vegetable needs</h2>
            <hr/>
            <h3>Available in Wholesale and Retail!</h3>

            <button type="button" class="btn btn-primary btn-lg rounded-5">Shop now</button>
                </div>
      </div>
    </div>
  );
}
