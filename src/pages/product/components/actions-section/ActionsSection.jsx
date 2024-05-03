import styles from "./ActionsSection.module.css";
import { CustomButton } from "../../../../components/custom-button";
import { Heart, ShoppingBag } from "../../../../components/icons";
import { QuantityCounter } from "../../../../components/quantity-counter";

const buttonProps = {
  style: { gap: "8px", borderWidth: "2px", width: "240px" },
};

export const ActionsSection = function () {
  return (
    <div className={styles.actionsContainer}>
      <QuantityCounter quantity={1} />
      <div className={styles.buttonsContainer}>
        <CustomButton
          {...{
            label: "Add To Cart",
            startIcon: <ShoppingBag borderColor="var(--white)" />,
            textColor: "var(--white)",
            ...buttonProps,
          }}
        />
        <CustomButton
          {...{
            variant: "outlined",
            label: "Add To Wishlist",
            startIcon: <Heart borderColor="var(--primary)" />,
            textColor: "var(--primary)",
            ...buttonProps,
          }}
        />
      </div>
    </div>
  );
};
