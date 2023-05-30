import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearBasket, getTotals  } from '../features/basketSlice';

import './Checkout.css';


export default function StepThree() {

  const dispatch = useDispatch();

 const basket = useSelector((state) => state.basket);

 useEffect (() => {
        dispatch(getTotals());
    }, [basket, dispatch]);

 
  const handleClearBasket = () => {
        dispatch(clearBasket());
    };

    

    

  return (
    <div className="stepThree">
      
        </div>
      
   
  );
}
