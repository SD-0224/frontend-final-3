import { HorizontalScroll } from "../../../../../../components/horizontal-scroll";
import { ProductCard } from "../../../../../../components/product-card";

export const ProductsPanel = function ({ products }) {
  return (
    <HorizontalScroll>
      {products?.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          image={product.smallImageUrl}
          subtitle={product.shortSubtitle}
        />
      ))}
    </HorizontalScroll>
  );
};
