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
            key={product.id}
            to={`/product?productId=${product.id}`}
            style={{ all: "unset", cursor: "pointer" }}
          >
            <NewArrivalsProductCard
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
