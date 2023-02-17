import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import './Custom.css';

function AddToBasket() {
  const history = useNavigate();

  const handleClick = () => {
    // Add item to basket here

    // Redirect to checkout page
    history.push('/checkout');
  };

  return (
    <Route>
    <button onClick={handleClick}>Add to basket</button>
    </Route>
  );
}

export default AddToBasket;
