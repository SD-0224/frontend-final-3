import styles from "./ProductCardTop.module.css";
import { Heart } from "../icons/Heart";
import { ProductImage } from "../product-image";

export const ProductCardTop = function ({ image, title, subtitle, children }) {
  return (
    <div className={styles.cardTopContainer}>
      <ProductImage src={image} />
      <div className={styles.cardDetails}>
        <div className={styles.titleSection}>
          <p className={styles.title}>{title}</p>
          <Heart style={{ flexShrink: 0 }} />
        </div>
        <p className={styles.subtitle}>{subtitle}</p>
        {children}
      </div>
    </div>
  );
};
