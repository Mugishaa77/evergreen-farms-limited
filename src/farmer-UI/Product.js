import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
  });

  useEffect(() => {
    axios.get(`API endpoint to fetch product with id=${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  const handleChange = event => {
    const { name, value } = event.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios.put(`API endpoint to update product with id=${id}`, product)
      .then(() => {
        navigate.push(`/products/${id}`);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleDelete = () => {
    axios.delete(`API endpoint to delete product with id=${id}`)
      .then(() => {
        navigate.push('/products');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={product.name} onChange={handleChange} />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={product.price} onChange={handleChange} />
        </label>
        <label>
          Description:
          <textarea name="description" value={product.description} onChange={handleChange} />
        </label>
        <label>
          Image URL:
          <input type="text" name="image" value={product.image} onChange={handleChange} />
        </label>
        <button type="submit">Save</button>
        <button onClick={handleDelete}>Delete</button>
      </form>
    </div>
  );
};

export default Product;
