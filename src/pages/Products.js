import React from 'react';
import garlic from '../produce/garlic.jpg';
import redOnions from '../produce/red-onions.jpg';
import sagaa from '../produce/sagaa.jpg';
import springOnions from '../produce/spring-onions.jpg';
import tomatoes from '../produce/tomatoes.jpg';
import './Products.css';

export default function Products () {
    const products = [
  
  {
    name: 'Garlic',
    image: garlic,
    price: 'Ksh 10.00'
  },
  {
    name: 'Red Onions',
    image: redOnions,
    price: 'Ksh 10.00'
  },
  {
    name: 'Sagaa',
    image: sagaa,
    price: 'Ksh 10.00'
  },
  {
    name: 'Spring Onions',
    image: springOnions,
    price: 'Ksh 10.00'
  },
  {
    name: 'Tomatoes',
    image: tomatoes,
    price: 'Ksh 10.00'
  }
];
        return (
  <div className="products">
    <div className="container">
      <h2><strong>Products</strong></h2>
      <div className="product-scroll-container" style={{ overflow: "scroll", display: "grid", 
      gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))", gridGap: "1rem" }}>
        {products.map(product => (
          <div className="product">
            <div className="card">
              <img src={product.image} className="card-img-top product-image" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}</p>
                <a href="#" className="btn btn-primary">Add to Basket</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);


        }