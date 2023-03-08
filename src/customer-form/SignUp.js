import React from 'react';
import CustomerDetails from './CustomerDetails';
import PersonalDetails from './PersonalDetails';
import Confirmation from './Confirmation';
import Success from './Success';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../features/authSlice';


export default function SignUp() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  console.log(auth);

  const [step, setStep] = React.useState(1);
  const [user, setuser] = React.useState({
    firstName: '',
    lastName: '',
    idNumber: '',
    city: '',
    telephone: '',
    county: '',
    email: '',
    password: ''
  });

  console.log("user:", user);

  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  const prevStep = () => {
    setStep(prevStep => prevStep - 1);
  };

  const handleChange = e => {
    setuser(prevuser => ({
      ...prevuser,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    dispatch(registerUser(user))

    /*try {
      const response = await axios.post('/sign-up', user);
      console.log(response.data.message);
      setStep(4); // Move to the Success step
    } catch (error) {
      console.error(error);
    }*/
  };

  

  switch (step) {
    case 1:
      return (
        <CustomerDetails
          nextStep={nextStep}
          handleChange={handleChange}
          user={user}
        />
      );
    case 2:
      return (
        <PersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          user={user}
        />
      );
    case 3:
      return (
        <Confirmation
          nextStep={nextStep}
          prevStep={prevStep}
          handleSubmit={handleSubmit}
          user={user}
        />
      );
    case 4:
      return <Success />;
    default:
      return null;
  }
}
