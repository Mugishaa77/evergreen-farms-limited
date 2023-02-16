import React from 'react';
import Slider from 'react-slick';
import './Products.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import tomatoes from '../produce/tomatoes.jpg';
import garlic from '../produce/garlic.jpg';
import redOnions from '../produce/red-onions.jpg';
import sagaa from '../produce/sagaa.jpg';
import springOnions from '../produce/spring-onions.jpg';

const products = [
  {name: 'Tomatoes', image: tomatoes, price: 'Ksh 10.00'},
  {name: 'Garlic', image: garlic, price: 'Ksh 10.00'},
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

export default function ProductDisplay() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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
        <i><h1>Testing....Testing..</h1></i>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <button onClick={() => console.log(`Buy ${product.name} clicked!`)}>
        Buy Now
      </button>
    </div>
  ));

  return (
    <Slider {...settings}>
      {productCards}
    </Slider>
  );
}