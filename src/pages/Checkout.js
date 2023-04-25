import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import './Checkout.css';


export default function Checkout () {

 
    return (
        <div className="checkout">
            <h3> Checkout</h3>
            <ProgressBar percent={75}>
  <Step>
    {({ accomplished, index }) => (
      <div
        className={`indexedStep ${accomplished ? "accomplished" : null}`}
      >
        
        <p>{index + 1} Address Details</p>
      </div>
    )}
  </Step>
  <Step>
    {({ accomplished, index }) => (
      <div
        className={`indexedStep ${accomplished ? "accomplished" : null}`}
      > <p> {index + 1} Payment method</p>
      </div>
       )}
       
  </Step>
  
  <Step>
    {({ accomplished, index }) => (
      <div
        className={`indexedStep ${accomplished ? "accomplished" : null}`}
      >
        
        <p> {index + 1} Order Summary</p>
      </div>
    )}
  </Step>
  <Step>
    {({ accomplished, index }) => (
      <div
        className={`indexedStep ${accomplished ? "accomplished" : null}`}
      >
        
        <p> {index + 1} Order Complete</p>
      </div>
    )}
  </Step>
</ProgressBar>
            

          
            

        </div>
    );
}