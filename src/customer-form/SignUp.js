import React from 'react';
import CustomerDetails from './CustomerDetails';
import PersonalDetails from './PersonalDetails';
import Confirmation from './Confirmation';
import Success from './Success';
import axios from 'axios';

export default function SignUp() {
  const [step, setStep] = React.useState(1);
  const [customerData, setCustomerData] = React.useState({
    firstName: '',
    lastName: '',
    idNumber: '',
    city: '',
    telephone: '',
    county: '',
    email: '',
    password: ''
  });

  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  const prevStep = () => {
    setStep(prevStep => prevStep - 1);
  };

  const handleChange = e => {
    setCustomerData(prevCustomerData => ({
      ...prevCustomerData,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await axios.post('/sign-up', customerData);
      console.log(response.data.message);
      setStep(4); // Move to the Success step
    } catch (error) {
      console.error(error);
    }
  };

  switch (step) {
    case 1:
      return (
        <CustomerDetails
          nextStep={nextStep}
          handleChange={handleChange}
          customerData={customerData}
        />
      );
    case 2:
      return (
        <PersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          customerData={customerData}
        />
      );
    case 3:
      return (
        <Confirmation
          nextStep={nextStep}
          prevStep={prevStep}
          handleSubmit={handleSubmit}
          customerData={customerData}
        />
      );
    case 4:
      return <Success />;
    default:
      return null;
  }
}
