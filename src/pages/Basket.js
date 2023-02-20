import React from 'react';

export default function Basket () {

    const handleAddToBasket = (product) => {
    setBasketItems([...basketItems, product]);
  };

  const handleRemoveFromBasket = (product) => {
    setBasketItems(basketItems.filter((item) => item !== product));
  };

  
}

