import { SectionContainer } from "../../../../components/section-container";
import { HorizontalScroll } from "../../../../components/horizontal-scroll";
import { NewArrivalsProductCard } from "./components/new-arrivals-product-card";

export const NewArrivalsSection = function ({ products }) {
  return (
    <SectionContainer padding="0px">
      <HorizontalScroll title="New Arrivals">
        {products?.map((product) => (
          <NewArrivalsProductCard key={product.id} {...product} />
        ))}
      </HorizontalScroll>
    </SectionContainer>
  );
};
