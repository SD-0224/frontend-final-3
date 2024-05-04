import styles from "./PricingSection.module.css";
import { DiscountDetails } from "../../../../../../components/discount-details";
import {
  amountFromPricePercentage,
  toFixed,
} from "../../../../../../modules/price";

const discountDetailsStyles = {
  priceColor: "var(--light-text-color)",
  discountColor: "#FF404B",
  priceFontSize: "34px",
  discountFontSize: "26px",
  fontWeight: "var(--semi-bold-font-weight)",
  gap: "16px",
};

export const PricingSection = function ({ discountPercentage, price }) {
  const hasDiscount = discountPercentage > 0;

  const discountAmount = amountFromPricePercentage(price, discountPercentage);
  const priceAfterDiscount = price - discountAmount;
  const discountPrice = toFixed(priceAfterDiscount);

  return (
    <div className={styles.priceContainer}>
      <p className={styles.discountPrice}>${discountPrice}</p>
      {hasDiscount && (
        <DiscountDetails
          {...{
            price,
            discountPercentage,
            ...discountDetailsStyles,
          }}
        />
      )}
    </div>
  );
};
