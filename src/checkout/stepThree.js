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
      <div className="basket-summary">
        <button className="clear-basket" onClick={() => handleClearBasket()}>
          Clear Basket
        </button>
        <div className="basket-checkout">
          <div className="sub-total">
            <span>Subtotal</span>
            <span>
              <strong>Kshs {JSON.stringify(basket.basketTotalAmount)}</strong>
            </span>
          </div>
          <p>Taxes and Delivery calculated at checkout</p>
          <Link to="/checkout">
            <button>Check-out</button>
          </Link>

          <div className="continue-shopping">
            <Link to="/basket">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span>Continue Shopping</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
