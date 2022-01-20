import React from "react";
import './style.css'
import Carousel from 'react-bootstrap/Carousel'
import codexBanner from '../../assets/codexBanner.png'

function CustomCarousel() {
  return (
    <Carousel class="customCarousel">
      <Carousel.Item>
        <img
          className="d-block carouselImage"
          src={codexBanner}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carouselImage"
          src={codexBanner}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carouselImage"
          src={codexBanner}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default CustomCarousel;