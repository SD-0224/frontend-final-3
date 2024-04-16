import * as React from "react";
import { ProductImage } from "../product-image";
import { HorizontalScroll } from "../horizontal-scroll";

export function BrandSection({ brandImages }) {
  const imagesContainerStyles = { mr: 6 };

  return (
    <HorizontalScroll
      height={263}
      title={"Shop by Brands"}
      titleMarginBottom={"27px"}
      imagesContainerStyles={imagesContainerStyles}
    >
      {brandImages.map((brand) => {
        return (
          <div key={brand}>
            <ProductImage src={brand} width={"168px"} />
          </div>
        );
      })}
    </HorizontalScroll>
  );
}
