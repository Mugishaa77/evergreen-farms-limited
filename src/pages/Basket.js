import React from 'react';

import { useGetAllProductsQuery } from '../features/productsApi';

export default function Basket () {
    
    const { data, error, isLoading } = useGetAllProductsQuery();
    return (
        <div className="basket">
            { isLoading ? (<p>Loading....</p>) :
             error ? (<p>an error occured</p>) :
             (<>
             <h2>New Arrivals</h2>
             <div className="products">
                {data?.map(product => <div key={product.id} className="product">
                    <h3>{product.name}</h3>
                    <img src={product.image} alt={product.name} />
                    <div className="details">
                        <span>{product.desc}</span>
                        <span className="price">Kshs {product.price}</span>
                    </div>
                    <button>Add to Basket</button>

                </div>)}
                </div></>)
            }
        </div>
    );
}