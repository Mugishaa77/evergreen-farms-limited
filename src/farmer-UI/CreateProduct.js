import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { productsCreate } from '../features/productsSlice';
import './Farmer.css';

export default function CreateProduct (){
    
    const dispatch = useDispatch();

    const [productImg, setproductImg] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");

    console.log(productImg);

    const handleProductImageUpload = (e) =>{

        const file = e.target.files[0];

        TransformFile(file)
    }

    const TransformFile = (file) => {

        const reader = new FileReader()

        if(file){
            reader.readAsDataURL(file)
            reader.onloadend = () => {
                setproductImg(reader.result)
            }
        }else {
            setproductImg("")
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(productsCreate)({
            name,
            price,
            category,
            image : productImg
        })



    }

    return (
        <div className="create-product">
            <div className="styled-form" onSubmit={handleSubmit}>
                <h3>Create a product</h3>
                <input type="file" accept="image/" onChange={handleProductImageUpload} required/>
                <select onChange={(e) => setCategory(e.target.value)} required>
                    <option value="">Select Category</option>
                    <option value="fruit">Fruit</option>
                    <option value="vegetable">Vegetable</option>

                </select>
                <input type="text" required placeholder="Name" onChange ={(e) => setName(e.target.value)} />
                <input type="text" required placeholder="Price in kshs" onChange={(e) => setPrice(e.target.value)}/>
                <button className="create-submit" type="submit">Submit

                </button>
            </div>
            <div className="image-preview">
                { productImg ?
                 <div>
                 <img src= { productImg } alt="uploaded product"/></div> : 
                 <p> Image preview will appear here</p>}
            </div>
        </div>
    )
}