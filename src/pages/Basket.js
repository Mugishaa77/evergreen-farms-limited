import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Basket.css';
import { useGetAllProductsQuery } from '../features/productsApi';
import basketReducer, { addToBasket, basketItems } from '../features/basketSlice';




export default function Basket () {
    
    const { data, error, isLoading } = useGetAllProductsQuery();

    const dispatch = useDispatch();

    const [products, setProducts] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        if (data) {
            setProducts(basketItems);
        }
    }, [basketItems]);

    const handleAddToBasket = (product) => {
        // handle adding product to basket
        navigate('/basket-one');
    };

    

    return (
        <div className="basket">
            { isLoading ? (<p>Loading....</p>) :
             error ? (<p>an error occured</p>) :
             (<>
             <h2> Fresh Market</h2>
             <div className="products">
                {data?.map(product => <div key={product.id} className="product">
                    <h3>{product.name}</h3>
                    <img src={product.image} alt={product.name} />
                    <div className="details">
                        <span>{product.desc}</span>
                        <span className="price">Kshs {product.price}</span>
                    </div>
                    <button onClick= {() => handleAddToBasket(product)}>Add to Basket</button>

                </div>)}
                </div></>)
            }
        </div>
    );
}