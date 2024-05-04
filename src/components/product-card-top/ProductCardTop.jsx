import styles from "./ProductCardTop.module.css";
import { Heart } from "../icons/Heart";
import { ProductImage } from "../product-image";
import { ProductTitles } from "../product-titles";

export const ProductCardTop = function ({
  image,
  title,
  subtitle,
  children,
  width,
  height,
}) {
  return (
    <div {...{ width, height }} className={styles.cardTopContainer}>
      <ProductImage src={image} />
      <div className={styles.cardDetails}>
        <div className={styles.titleSection}>
          <ProductTitles {...{ title, subtitle }} />
          <Heart style={{ flexShrink: 0 }} />
        </div>
        {children}
      </div>
    </div>
  );
};
