import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProjectSlideHolders from "./ProjectSlideHolders";

const PorjectsCarousel = () => {
  return (
    <Carousel
      autoPlay={true}
      showThumbs={false}
      infiniteLoop={true}
      showArrows={true}
      emulateTouch={true}
    >
      <ProjectSlideHolders
        href="http://github.com"
        img="https://uning.es/wp-content/uploads/2016/08/ef3-placeholder-image.jpg"
        label="Personal repository"
      />
      <ProjectSlideHolders
        href="http://github.com"
        img="https://uning.es/wp-content/uploads/2016/08/ef3-placeholder-image.jpg"
        label="Project 2"
      />
    </Carousel>
  );
};

export default PorjectsCarousel;
