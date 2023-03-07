import React from 'react';
import { Link } from 'react-router-dom';

const ProductDisplay = () => {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        <li>
          <Link to="/products/1">
            <img src="product1.jpg" alt="Product 1" />
            <h3>Product 1</h3>
            <p>$10.00</p>
          </Link>
        </li>
        <li>
          <Link to="/products/2">
            <img src="product2.jpg" alt="Product 2" />
            <h3>Product 2</h3>
            <p>$15.00</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProductDisplay;

