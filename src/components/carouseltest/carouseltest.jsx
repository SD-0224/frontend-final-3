import React from "react";
import Carousel from "react-material-ui-carousel";
import CarouselItem from "./carousel-items";

const carouselStyle = {
  indicatorIconButtonProps: {
    style: { display: "none" },
  },
  navButtonsProps: {
    style: { display: "none" },
  },
  interval: 2000,
};

export function CategoryCarousel(props) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      imgPath:
        "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      imgPath:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
    },

    {
      name: "Random Name #3",
      description: "Probably the most random thing you have ever seen!",
      imgPath:
        "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      name: "Random Name #4",
      description: "Probably the most random thing you have ever seen!",
      imgPath:
        "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    },
  ];

  return (
    <Carousel {...carouselStyle}>
      {items.map((item, i) => (
        <CarouselItem key={i} item={item} />
      ))}
    </Carousel>
  );
}
