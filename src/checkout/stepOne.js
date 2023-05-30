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
  <div className="titles">
    <h5>Products</h5>
    <h5>Quantity</h5>
    <h5>Price</h5>
    <h5>Total</h5>
  </div>
  <div className="items">
    {/* Mapping through the basket items */}
    {basket.basketItems?.map(basketItem => (
      <div className="item">
      <div key={basketItem._id}>
        <div className="product ">
          <img src={basketItem.image} alt={basketItem.name} />
          <p>{basketItem.name}</p>
          <div>
            <div className="quantity ">
              <button onClick={() => handleDecreaseBasket(basketItem)} className="less">
                <strong>-</strong>
              </button>
              <div className="count ">{basketItem.basketQuantity}</div>
              <button className="more" onClick={() => handleIncreaseBasket(basketItem)}>
                <strong>+</strong>
              </button>
            </div>
            <div className="price ">Kshs{basketItem.price}</div>
            </div>
            <div className="total ">Kshs{basketItem.price * basketItem.basketQuantity}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

 );

}