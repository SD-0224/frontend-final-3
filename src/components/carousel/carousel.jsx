import React from "react";
import Carousel from "react-material-ui-carousel";
import CarouselItems from "./carousel-items";

export function CategoryCarousel({ categories, interval }) {
  const carouselStyle = (interval) => ({
    indicatorIconButtonProps: {
      style: { display: "none" },
    },
    navButtonsProps: {
      style: { display: "none" },
    },
    interval: interval,
  });

  return (
    <Carousel {...carouselStyle(interval)}>
      {categories.map((item, i) => (
        <CarouselItems key={i} {...item} />
      ))}
    </Carousel>
  );
}
