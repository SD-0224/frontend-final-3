import { SectionContainer } from "../../../../components/section-container";
import { HorizontalScroll } from "../../../../components/horizontal-scroll";
import { NewArrivalsProductCard } from "./components/new-arrivals-product-card";
import { Link } from "react-router-dom";

export const NewArrivalsSection = function ({ products }) {
  return (
    <SectionContainer padding="0px">
      <HorizontalScroll title="New Arrivals">
        {products?.map((product) => (
          <Link
            to={`/product?productId=${product.id}`}
            style={{ all: "unset", cursor: "pointer" }}
          >
            <NewArrivalsProductCard
              key={product.id}
              image={product.smallImageUrl}
              subtitle={product.shortSubtitle}
              {...product}
            />
          </Link>
        ))}
      </HorizontalScroll>
    </SectionContainer>
  );
};
