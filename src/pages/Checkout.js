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
              <p>Address Details</p>
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
              <span className="index"> {index + 1} </span>
              <p> Order Complete</p>
            </div>
          )}
        </Step>
      </ProgressBar>
      <div className="last-check">

      {currentStep === 0 && (
        <div>
          <p>Step 1: Address Details</p>
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