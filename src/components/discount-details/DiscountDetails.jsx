import styles from "./DiscountDetails.module.css";

export const DiscountDetails = function ({
  price,
  discountPercentage = 0,
  priceColor = "var(--low-emphasis-text-color)",
  discountColor = "#e21d1d",
  priceFontSize = "14px",
  discountFontSize = "16px",
  fontWeight = "var(--regular-font-weight)",
  gap = "6px",
}) {
  return (
    <div className={styles.discountContainer} style={{ gap }}>
      <p
        className={styles.originalPrice}
        style={{ color: priceColor, fontSize: priceFontSize, fontWeight }}
      >
        ${price}
      </p>
      <p
        className={styles.discountPercentage}
        style={{ color: discountColor, fontSize: discountFontSize, fontWeight }}
      >
        {discountPercentage}% OFF
      </p>
    </div>
  );
};
