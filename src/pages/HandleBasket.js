import React, { useState } from 'react';

export default function HandleBasket() {
  const [basket, setBasket] = useState([]);

  const handleAddToBasket = (item) => {
    setBasket((prevBasket) => [...prevBasket, item]);
  };

  const handleRemoveFromBasket = (item) => {
    setBasket((prevBasket) => prevBasket.filter((basketItem) => basketItem !== item));
  };

  return (
    <div>
      <h2>Basket</h2>
      <ul>
        {basket.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price} 
            <button onClick={() => handleRemoveFromBasket(item)}>Remove from Basket</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
