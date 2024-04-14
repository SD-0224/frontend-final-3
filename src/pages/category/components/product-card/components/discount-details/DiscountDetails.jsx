import styles from "./DiscountDetails.module.css";

export const DiscountDetails = function ({ price, discountPercentage = 0 }) {
  return (
    <div className={styles.discountContainer}>
      <p className={styles.originalPrice}>${price}</p>
      <p className={styles.discountPercentage}>{discountPercentage}% OFF</p>
    </div>
  );
};
