import styles from "./ProductInCart.module.css";
import { ProductImage } from "../product-image";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { QuantityCounter } from "../quantity-counter";

export const ProductInCart = ({
  isItemOrdered = true,
  drawer = true,
  title,
  subtitle,
  price,
  quantity,
  src,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.productData}>
        <ProductImage width={"80px"} src={src} />
        <div className={styles.productSubData}>
          <span className={styles.title}>{title}</span>
          <span className={styles.subtitle}>{subtitle}</span>
          {drawer && isItemOrdered && (
            <QuantityCounter quantity={quantity} showText={false} />
          )}
          {!drawer && isItemOrdered && <span>Qty- {quantity}</span>}
        </div>
      </div>
      {drawer && isItemOrdered && (
        <div className={styles.rightSide}>
          <button className={styles.removeButton}>
            <CloseRoundedIcon />
          </button>
          <span className={styles.price}>${price}</span>
        </div>
      )}
    </div>
  );
};
