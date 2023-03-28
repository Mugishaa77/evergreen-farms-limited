import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Farmer.css';

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('API endpoint to fetch products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleDelete = id => {
    axios.delete(`API endpoint to delete product with id=${id}`)
      .then(() => {
        setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="farmer-dashboard">
      <h2>Dashboard</h2>
      <Link to="/add-product"
      className="add-product-btn">Add Product</Link>
      <input type="text" placeholder="Search Products" />
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              <img src={product.image} alt={product.name} />
              <h3>Name:{product.name}</h3>
              <p>Price:{product.price}</p>
            </Link>
            <button className="delete-btn"
            onClick={() => handleDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul> 
    </div>
  );
};

export default Dashboard;
