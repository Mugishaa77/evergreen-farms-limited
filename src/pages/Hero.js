import React from 'react';
import './Hero.css';
import open from "../logo/open.png";

export default function Hero() {
  return (
    <div className="hero">
      <div className="position-relative">
        <div className="position-absolute top-0 end-0">
          <img src={open} width="160" height="160" alt="open 24hrs" />
        </div>
        <div className="text-below-image">
            <h2>Your one stop shop for all your<br/>
            grocery and vegetable needs</h2>
            <hr/>
            <h3>Available in Wholesale and Retail!</h3>

            <button type="button" class="btn btn-primary btn-lg">Shop now</button>
                </div>
      </div>
    </div>
  );
}
