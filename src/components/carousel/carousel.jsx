import React from "react";
import Carousel from "react-material-ui-carousel";
import { CarouselItem } from "./components/carousel-item";

export function CategoryCarousel({ categories, interval, buttonText, icon }) {
  const carouselStyle = {
    indicatorIconButtonProps: {
      style: { display: "none" },
    },
    navButtonsProps: {
      style: { display: "none" },
    },
    interval: interval,
  };

  return (
    <Carousel {...carouselStyle}>
      {categories.map((item, i) => (
        <CarouselItem key={i} {...item} buttonText={buttonText} icon={icon} />
      ))}
    </Carousel>
  );
}
