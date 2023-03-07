import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

/*This component is responsible for rendering a 
form that allows the farmer to add a new product
 to their profile. */

const AddProduct = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios.post('API endpoint to add new product', product)
      .then(() => {
        navigate.push('/products');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="add-product">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text"
           name="name"
            value={product.name} 
            onChange={handleChange} 
            className="form-control"/>
        </label>
        <label>
          Price:
          <input type="number" 
          name="price" value={product.price} 
          onChange={handleChange} 
          className="form-control"/>
</label>
<label>
Description:
<textarea name="description" 
value={product.description} 
onChange={handleChange} 
className="form-control"/>
</label>
<label>
Image:
<input type="text" 
name="image"
 value={product.image} 
 onChange={handleChange} 
 className="form-control"/>
</label>
<button type="submit"
className="submit-btn">Submit</button>
</form>
</div>
);
};

export default AddProduct;
