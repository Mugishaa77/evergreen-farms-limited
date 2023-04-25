import React, { useState } from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import './Checkout.css';


export default function Checkout () {

    const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };


 
    return (
        <div className="checkout">
            <h3> Checkout</h3>
             <ProgressBar percent={((currentStep + 1) / 4) * 100} unfilledBackground="#D8F7CA" filledBackground="#93B961" >
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${
                accomplished ? "accomplished" : null
              }`}
            >
              <span className="index">{index + 1} </span>
              <p>View Basket</p>
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${
                accomplished ? "accomplished" : null
              }`}
            >
              <span className="index"> {index + 1} </span>{" "}
              <p> Payment method</p>
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${
                accomplished ? "accomplished" : null
              }`}
            >
              <span className="index"> {index + 1} </span>
              <p>Order Summary</p>
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${
                accomplished ? "accomplished" : null
              }`}
            >
              <span className="order-complete">
               <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg> </span>
              <p> Order Complete</p>
            </div>
          )}
        </Step>
      </ProgressBar>
      <div className="last-check">

      {currentStep === 0 && (
        <div>
          <p>Step 1: View Basket</p>
          <button onClick={handleNextStep}>Next Step</button>
        </div>
      )}
      {currentStep === 1 && (
        <div>
          <p>Step 2: Payment method</p>
          <button onClick={handleNextStep}>Next Step</button>
        </div>
      )}
      {currentStep === 2 && (
        <div>
          <p>Step 3: Order Summary</p>
          <button onClick={handleNextStep}>Next Step</button>
        </div>
      )}
      {currentStep === 3 && (
        <div>
          <p>Step 4: Order Complete</p>
          <button onClick={() => setCurrentStep(0)}>Restart</button>
          </div>
        
      )}
      </div>

          
            

        </div>
    );
}