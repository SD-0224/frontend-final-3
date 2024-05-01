import styles from "./CategoryProducts.module.css";
import { ProductCard } from "../product-card";

export const CategoryProducts = function ({ products }) {
  return (
    <div className={styles.productsContainer}>
      {products?.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};
