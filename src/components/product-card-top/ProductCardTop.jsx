import styles from "./ProductCardTop.module.css";
import { Heart } from "../icons/Heart";
import { ProductImage } from "../product-image";
import { ProductTitles } from "../product-titles";
import { Link } from "react-router-dom";

export const ProductCardTop = function ({
  image,
  title,
  subtitle,
  children,
  width,
  height,
  id,
}) {
  return (
    <div {...{ width, height }} className={styles.cardTopContainer}>
      <Link
        to={`/product?productId=${id}`}
        style={{ all: "unset", cursor: "pointer" }}
      >
        <ProductImage src={image} />
      </Link>
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
