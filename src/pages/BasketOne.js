import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './Basket.css';
import { addToBasket, decreaseBasket, removeFromBasket } from '../features/basketSlice';

export default function BasketOne () {

    const basket = useSelector((state) => state.basket);

    const dispatch = useDispatch();

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
        <div className="basket-container">
            <h2>Shopping Basket</h2>
            {basket.basketItems.length === 0 ? 
            (<div className="basket-empty">
                <p>Your Basket is currently empty</p>
                <div className="start-shopping">
                    <Link to ="/basket">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" 
                        fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" 
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>
                        <span>Start Shopping</span>
                    </Link>

                </div>
            </div>): 
            (<div>
                <div className="titles">
                   <h3 className="product-title">Product</h3> 
                   <h3 className="price">Price</h3>
                   <h3 className="quantity">Quantity</h3>
                   <h3 className="total">Total</h3>
                </div>

                <div className="basket-items">
                    {basket.basketItems?.map(basketItem => (
                        <div className="basket-item" key={basketItem.id}>
                            <div className="basket-product">
                                <img src={basketItem.image} alt={basketItem.name}/>
                                <div>
                                    <h3>{basketItem.name}</h3>
                                    <p>{basketItem.desc}</p>
                                    <button onClick = { () => handleRemoveFromBasket(basketItem)}>Remove</button>
                                </div>
                            </div>

                            <div className="basket-product-price">
                                Kshs{basketItem.price}
                            </div>
                            <div className="basket-product-quantity">
                                <button onClick = {() => handleDecreaseBasket(basketItem)}className="less">-</button>
                                <div className="count">{basketItem.basketQuantity}</div>
                                <button className="more" onClick = {() => handleIncreaseBasket(basketItem)}>+</button>
                        </div>

                        <div className="basket-product-total-price">
                            Kshs{basketItem.price * basketItem.basketQuantity}
                        </div>
                        </div>
                    ))}
                </div>

                <div className="basket-summary">
                    <button className="clear-basket">Clear Basket</button>
                    <div className="basket-checkout">
                        <div className="sub-total">
                            <span>Subtotal</span>
                            <span><strong>
                                Kshs{basket.basketTotalAmount}</strong></span>
                        </div>
                        <p>Taxes and Delivery calculated at checkout</p>
                        <button>Check-out</button>
                        <div className="continue-shopping">
                    <Link to ="/basket">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" 
                        fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" 
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>
                        <span>Continue Shopping</span>
                    </Link>

                </div>

                    </div>
                </div>
            </div>
            )}

        </div>
    );
}