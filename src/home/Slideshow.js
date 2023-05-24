import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slideshow = () => {
  const slides = [
    {
      image: '../images/new.jpg',
      text: 'Caption for Image 1',
    },
    {
      image: '../images/hero.jpg',
      text: 'Caption for Image 2',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>
          <img src={slide.image} alt={`Slide ${index + 1}`} />
          <p>{slide.text}</p>
        </div>
      ))}
    </Slider>
  );
};

export default Slideshow;
