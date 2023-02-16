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

const ArrowLeft = props => (
  <button className="slick-arrow slick-prev">Previous</button>
);

const ArrowRight = props => (
  <button className="slick-arrow slick-next">Next</button>
);

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

const ProductDisplay = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    appendDots: dots => (
      <div style={{ textAlign: "center" }}>
        <span>
          Slide {dots.props.currentSlide + 1} of {dots.props.slideCount}
        </span>
      </div>
    ),
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
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

  return (
    <div className="product-carousel">
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index}>
            <div className="display">
              <h1>Site Testing....</h1>
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.price}</p>
              <button>Buy Now</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductDisplay;