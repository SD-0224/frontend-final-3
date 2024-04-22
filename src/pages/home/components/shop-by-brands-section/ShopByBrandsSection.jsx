import { SectionContainer } from "../../../../components/section-container";
import { HorizontalScroll } from "../../../../components/horizontal-scroll";
import { ProductImage } from "../../../../components/product-image";

export const ShopByBrandsSection = function ({ brands }) {
  return (
    <SectionContainer padding="0px">
      <HorizontalScroll title="Shop By Brands" gap="46px">
        {brands?.map((brand) => (
          <ProductImage key={brand.id} src={brand.image} width="168px" />
        ))}
      </HorizontalScroll>
    </SectionContainer>
  );
};
