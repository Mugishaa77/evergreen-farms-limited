import React, { useState, useEffect, useNavigate } from 'react';
import CustomerDetails from './CustomerDetails';
import PersonalDetails from './PersonalDetails';
import Confirmation from './Confirmation';
import Success from './Success';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../features/authSlice';


export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  console.log(auth);

  useEffect (() => {
    if (auth._id ){
      navigate("/basket")
    }
  },
  [auth._id, navigate])

  const [step, setStep] = React.useState(1);
  const [user, setUser] = React.useState({
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

  const handleUserChange = (field, value) => {
    setUser(prevUser => ({...prevUser, [field]: value}));
  };

  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  const prevStep = () => {
    setStep(prevStep => prevStep - 1);
  };


  const handleSubmit = async e => {
    e.preventDefault();

    dispatch(registerUser(user))

  };

  /*will revisit authentication later.. min 48*/

  switch (step) {
    case 1:
      return (
        <CustomerDetails
          nextStep={nextStep}
          user={user}
          onChange={handleUserChange}
        />
      );
    case 2:
      return (
        <PersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          onChange={handleUserChange}
          user={user}
        />
      );
    case 3:
      return (
        <Confirmation
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
