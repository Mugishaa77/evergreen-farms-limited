import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserIdentity from './UserIdentity';
import UserAdressInfo from './UserAddressInfo';
import UserRole from './UserRole';
import Complete from './Complete';
import Confirmation from './Confirmation';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../features/authSlice';

export default function Register () {
    const dispatch = useDispatch();
    const navigate = useNavigate ();

    // const auth and useEffect

    const [step, setStep] = React.useState(1);
    const [user, setUser] = React.useState({
        firstName: '',
        lastName: '',
        idNumber: '',
        phoneNumber: '',
        email:'',
        password: '',
        role: ''
    });
    console.log('reg details:', user);

    const handleUserChange = (field, value) => {
        setUser(prevUser => ({...prevUser, [field]: value }));

    };

    const nextStep = () => {
        setStep(prevStep => prevStep + 1);
    };

    const prevStep = () => {
        setStep(prevStep => prevStep - 1);
    };


    // const handleSubmit

    

    switch(step) {
        case 1:
            return (
                <UserIdentity
                nextStep={nextStep}
                user={user}
                onChange={handleUserChange}
                />
            );

            case 2:
                return (
                    <UserAdressInfo
                    nextStep={nextStep}
                    prevStep={prevStep}
                    onChange={handleUserChange}
                    user={user}
                    />
                );

                case 3:
                    return (
                        <UserRole
                        nextStep={nextStep}
                    prevStep={prevStep}
                    onChange={handleUserChange}
                    user={user}
                    />
                    );

                    case 4:
                        return (
                            <Confirmation
                            prevStep={prevStep}
        //   handleSubmit={handleSubmit}
          user={user}
        />);

        case 5: 
        return (
            <Complete />
        )

                        
    }


    
}
