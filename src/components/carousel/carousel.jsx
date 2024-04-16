import React from "react";
import Carousel from "react-material-ui-carousel";
import { CarouselItem } from "./components/carousel-item";

export function CategoryCarousel({ categories, interval = "2000" }) {
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
    <Carousel {...carouselStyle} sx={{ border: "none" }}>
      {categories.map((item, i) => (
        <CarouselItem key={i} {...item} />
      ))}
    </Carousel>
  );
}
