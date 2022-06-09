import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PorjectsCarousel = () => {
  return (
    <Carousel
      autoPlay={false}
      showThumbs={false}
      infiniteLoop={true}
      showArrows={true}
      emulateTouch={true}
    >
      <div className="slide-holder">
        <a href="http://github.com" target="_blank" rel="noopener noreferrer">
          <img
            alt=""
            src="https://uning.es/wp-content/uploads/2016/08/ef3-placeholder-image.jpg"
          />
        </a>

        <p className="legend">Repository</p>
      </div>
      <div className="slide-holder">
        <a href="http://github.com" target="_blank" rel="noopener noreferrer">
          <img
            alt=""
            src="https://uning.es/wp-content/uploads/2016/08/ef3-placeholder-image.jpg"
          />
        </a>
        <p className="legend">Legend 2</p>
      </div>
      <div className="slide-holder">
        <a href="http://github.com" target="_blank" rel="noopener noreferrer">
          <img
            alt=""
            src="https://uning.es/wp-content/uploads/2016/08/ef3-placeholder-image.jpg"
          />
        </a>
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default PorjectsCarousel;
