import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToBasket, decreaseBasket, getTotals } from '../features/basketSlice';
import './Checkout.css';


export default function StepOne() {

  const dispatch = useDispatch();

  const basket = useSelector((state) => state.basket);

    useEffect (() => {
        dispatch(getTotals());
    }, [basket, dispatch]);


  const handleDecreaseBasket = (basketItem) => {
    dispatch(decreaseBasket(basketItem));
  };

  const handleIncreaseBasket = (basketItem) => {
    dispatch(addToBasket(basketItem));
  };

 return(
  <div className="step-one">
     
</div>

 );

}