import React from 'react';
import CustomerDetails from './CustomerDetails';
import PersonalDetails from './PersonalDetails';
import Confirmation from './Confirmation';
import Success from './Success';


export default function SignUp () {

    const [step, setStep] = React.useState(1);
    const [customerData, setCustomerData] = React.useState({
    firstName: '',
    lastName: '',
    idNumber: '',
    city: '',
    email: '',
    password: ''
    
  });

   const nextStep = () => {
    setStep(prevStep => prevStep + 1);
  }

  const prevStep = () => {
    setStep(prevStep => prevStep - 1);
  }

  const handleChange = (e) => {
    setCustomerData(prevCustomerData => ({
      ...prevCustomerData,
      [e.target.name]: e.target.value
    }));
  }





    return(<div className="signup">
        <div className="container">


        </div>
    </div>)
}