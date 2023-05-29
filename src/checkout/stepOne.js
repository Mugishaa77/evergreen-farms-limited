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
    <div className="stepOne">
      <div className="titles">
        <h3 className="product-title">Product</h3>
        <h3 className="price">Price</h3>
        <h3 className="quantity">Quantity</h3>
        <h3 className="total">Total</h3>
      </div>

      <div className="basket-items">
        {basket.basketItems?.map((basketItem) => (
          <div className="basket-item" key={basketItem._id}>
            <h3>{basketItem.name}</h3>
            <p>{basketItem.desc}</p>
            <button onClick={() => handleRemoveFromBasket(basketItem)}>
              Remove
            </button>

            <div className="basket-product-price">
              Kshs{basketItem.price}
            </div>
            <div className="basket-product-quantity">
              <button
                onClick={() => handleDecreaseBasket(basketItem)}
                className="less"
              >
                -
              </button>
              <div className="count">{basketItem.basketQuantity}</div>
              <button
                className="more"
                onClick={() => handleIncreaseBasket(basketItem)}
              >
                +
              </button>
            </div>

            <div className="basket-product-total-price">
              Kshs{basketItem.price * basketItem.basketQuantity}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
