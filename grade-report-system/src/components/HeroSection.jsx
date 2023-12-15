import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/bg-image-4.jpg';
import image2 from '../assets/bg-image-2.jpg';
import './herosection.css';

const images = [image1, image2];

function HeroSection() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust the speed of the slideshow
  };

  return (
    <div id="heroSection">
      <Slider {...sliderSettings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
      <div id="imageText">GRADING SYSTEM</div>
    </div>
  );
}

export default HeroSection;
