import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { productsCreate } from '../features/productsSlice';
import './Grocer.css';

export default function GrocerCreateProduct() {
  const dispatch = useDispatch();

  const [productImg, setProductImg] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  console.log(productImg);

  const handleProductImageUpload = (e) => {
    const file = e.target.files[0];
    transformFile(file);
  };

  const transformFile = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProductImg(reader.result);
      };
    } else {
      setProductImg('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(productsCreate({
      name,
      price,
      category,
      image: productImg,
    }));
  };

  return (
    <div className="grocer-create-product">
      <form className="styled-form" onSubmit={handleSubmit}>
        <h3>Create a product</h3>
        <input type="file" accept="image/*" onChange={handleProductImageUpload} required />
        <select onChange={(e) => setCategory(e.target.value)} required>
          <option value="">Select Category</option>
          <option value="fruit">Fruit</option>
          <option value="vegetable">Vegetable</option>
        </select>
        <input type="text" required placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input type="text" required placeholder="Price in kshs" onChange={(e) => setPrice(e.target.value)} />
        <button className="create-submit" type="submit">Submit</button>
      </form>
      <div className="image-preview">
        {productImg ? (
          <div>
            <img src={productImg} alt="uploaded product" />
          </div>
        ) : (
          <p>Image preview will appear here</p>
        )}
      </div>
    </div>
  );
}
