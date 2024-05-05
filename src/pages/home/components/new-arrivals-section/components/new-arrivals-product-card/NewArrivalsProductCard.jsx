import styles from "./NewArrivalsProductCard.module.css";
import { ProductCardTop } from "../../../../../../components/product-card-top";

export const NewArrivalsProductCard = function ({
  image,
  title,
  subtitle,
  price,
  ...props
}) {
  return (
    <div className={styles.productCard}>
      <ProductCardTop {...{ image, title, subtitle, ...props }}>
        <p className={styles.price}>
          <span className="currency">$</span>
          {price}
        </p>
      </ProductCardTop>
    </div>
  );
};
