import React from "react";
import Carousel from "react-material-ui-carousel";
import CarouselItem from "./carousel-items";

export function CategoryCarousel(props) {
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
    <Carousel {...carouselStyle(props.interval)}>
      {props.categories.map((item, i) => (
        <CarouselItem key={i} item={item} />
      ))}
    </Carousel>
  );
}
