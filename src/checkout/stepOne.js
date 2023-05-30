import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToBasket, decreaseBasket, removeFromBasket, getTotals } from '../features/basketSlice';
import './Checkout.css';


export default function StepOne() {

  const dispatch = useDispatch();

  const basket = useSelector((state) => state.basket);

    useEffect (() => {
        dispatch(getTotals());
    }, [basket, dispatch]);

  const handleRemoveFromBasket = (basketItem) => {
    dispatch(removeFromBasket(basketItem));
  };

  const handleDecreaseBasket = (basketItem) => {
    dispatch(decreaseBasket(basketItem));
  };

  const handleIncreaseBasket = (basketItem) => {
    dispatch(addToBasket(basketItem));
  };

  return (
    <div className="step-one">

      <h5>Products</h5>
      
                </div>

   
  );
}
