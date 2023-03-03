import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import './Basket.css';
import { useGetAllProductsQuery } from '../features/productsApi';
import  { addToBasket } from '../features/basketSlice';

export default function Basket () {
    const { data, error, isLoading } = useGetAllProductsQuery();
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (data) {
            setProducts(data);
        }
    }, data);

    const handleAddToBasket = (product) => {
        dispatch(addToBasket(product));
        navigate('/basket-one');
    };


    return (
        <div className="basket">
            <Link to="/basket-one" className="next-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"/>
</svg> Next
            </Link>
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