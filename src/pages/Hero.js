import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

export default function Hero() {


  return (
    <div className="hero"> 
        <div className="text">
          
            <h2>Your one stop shop for all your<br/>
            grocery and vegetable needs</h2>
            <hr/>
            <h3>Available in Wholesale and Retail!</h3>
              <Link to="/basket">
              <button type="button" class="btn btn-primary btn-lg rounded-5">Shop now</button>
            </Link>
           
                </div>
      </div>
    
  );
}
