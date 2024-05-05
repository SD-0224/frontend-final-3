import { SectionContainer } from "../../../../components/section-container";
import { HorizontalScroll } from "../../../../components/horizontal-scroll";
import { ProductImage } from "../../../../components/product-image";
import { Link } from "react-router-dom";

export const ShopByBrandsSection = function ({ brands }) {
  return (
    <SectionContainer padding="0px">
      <HorizontalScroll title="Shop By Brands" gap="46px">
        {brands?.map((brand) => (
          <Link
            key={brand.id}
            to={`/brand?brandId=${brand.id}`}
            style={{ all: "unset", cursor: "pointer" }}
          >
            <ProductImage src={brand.image} width="168px" />
          </Link>
        ))}
      </HorizontalScroll>
    </SectionContainer>
  );
};
