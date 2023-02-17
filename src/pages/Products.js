import React from 'react';
import garlic from '../produce/garlic.jpg';
import redOnions from '../produce/red-onions.jpg';
import sagaa from '../produce/sagaa.jpg';
import springOnions from '../produce/spring-onions.jpg';
import tomatoes from '../produce/tomatoes.jpg';
import './Products.css';
import { BasketFill } from "react-bootstrap-icons";

function Product({ product, onAddToBasket }) {
  function handleAddToBasket() {
    onAddToBasket(product);
  }

export default function Products () {
    const products = [
  {name: 'Tomatoes',
   image: tomatoes,
  price: 'Ksh 10.00'},
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
  }
  
];

        return (
  <div className="products">
    <div className="container-fluid">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand text-warning" href="#">
      <h1>Market</h1> </a>
   
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item"> 
          <a class="nav-link active" aria-current="page" href="#">
            <BasketFill color="#FF8904" size={28} />
            
            </a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2 rounded-start-pill" type="search" placeholder="Find in market" aria-label="Search"/>
        <button class="btn btn-outline-success rounded-5 text-light" type="submit">Find</button>
      </form>
    </div>
  </div>
</nav>
      <div className="product-scroll-container" 
      style={{ display: "flex", flexWrap: "nowrap", whiteSpace: "nowrap", overflowX: "scroll", width: "100%" }}>
  {products.map(product => (
    <div className="product" style={{ minWidth: "8rem", marginRight: "1rem" }}>
      <div className="card border-warning">
        <img src={product.image} className="card-img-top product-image" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title text-info-emphasis">{product.name}</h5>
          <p className="card-text text-info-emphasis">{product.price}</p>
          <a href="#" className="btn btn-primary rounded-5" onClick={handleAddToBasket}>Add to Basket</a>
        </div>
      </div>
    </div>
  ))}
</div>


      </div>
</div>






);


        }