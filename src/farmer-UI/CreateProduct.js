import { useState } from 'react';
import './Farmer.css';

export default function CreateProduct (){

    const [productImg, setproductImg] = useState("");

    const handleProductImageUpload = (e) =>{

        const file = e.target.files[0];
    }

    return (
        <div className="create-product">
            <div className="styled-form">
                <h3>Create a product</h3>
                <input type="file" accept="image/" onChange={handleProductImageUpload} />
            </div>
            <div className="image-preview"></div>
        </div>
    )
}