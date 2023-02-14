import React from 'react';
import './Hero.css';

export default function Hero () {
    return(
        <div className="hero">
            
            <div className="container">
                <div className="contents">
                <h2 className="d-flex justify-content-end">Your one-stop shop for all your wholesale
             <br/> and retail grocery and vegetable needs</h2>
             <hr/>
            <h3 className="d-flex justify-content-end">Revolutionizing Food Technology
            <br/> in Kenya and Beyond...</h3> 

            </div>
             
            <div className="d-flex justify-content-end">
                <div className="call-to-action ">
             <button type="button" className="btn btn-primary btn-outine text-light" id="add">Add to Basket</button>
             <button type="button" className="btn btn-primary btn-outline text-light " id="clear">Empty Basket</button> 
             </div> 
             </div>
        </div>
        </div>
        
    );
}