import React, { useState }from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Products.css';
import products from '../ProductData';



export default function ProductDisplay({ handleAddToBasket, handleRemoveFromBasket }) {
  const [basketItems, setBasketItems] = useState([]);
  
  const handleAddClick = (product) => {
    setBasketItems([...basketItems, product]);
    handleAddToBasket(product);
  };

  const handleRemoveClick = (product) => {
    const updatedBasketItems = basketItems.filter(item => item.name !== product.name);
    setBasketItems(updatedBasketItems);
    handleRemoveFromBasket(product);
  };

  const isInBasket = (product) => {
    return basketItems.some(item => item.name === product.name);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const productCards = products.map((product, index) => (
    
    <div className="display" key={index}>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <button onClick={() => handleAddClick(product)} disabled={isInBasket(product)}>
        Add to Basket
      </button>
      <button onClick={() => handleRemoveClick(product)} disabled={!isInBasket(product)}>
        Remove from Basket
      </button>
    </div>

  ));

  return (
    <Slider {...settings}>
      {productCards}
    </Slider>
  );
}
