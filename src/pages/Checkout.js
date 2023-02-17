import React, { usestate} from 'react';

const [basket, setBasket] = useState([]);



export default function Checkout () {
     return (
    <div>
      {basket.map(item => (
        <BasketItem key={item.id} item={item} />
      ))}
      <BasketSummary basket={basket} />
      <PaymentForm basket={basket} />
    </div>
  );
}