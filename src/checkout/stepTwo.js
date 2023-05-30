import './Checkout.css';


export default function StepTwo () {
    return (
        <div className="step-two">
          <div className="container">
            <h1><strong>Billing information</strong></h1>
            <form>
              <label>Name:</label>
              <input></input>

              <label>Number:</label>
              <input></input>

              <label>Physical Address:</label>
              <input></input>

            <button>Save</button>

            </form>
          </div>
            
        </div>
    );
}