import { Box, Typography } from "@mui/material";
import styles from "./PaymentBottomItem.module.css";
import { ProductImage } from "../../../../../product-image";
import { CustomRadioButton } from "../../../../../custom-radio-button";
import { PaymentDetails } from "./components/payment-details";

export function PaymentBottomItem({ handleChange, selectedValue, title, src }) {
  const isChecked = selectedValue === title;

  return (
    <Box component="label" className={styles.itemContainer}>
      <Box className={styles.itemContent}>
        <Box className={styles.itemTitle}>
          <Box className={styles.itemImgWrapper}>
            <ProductImage width={"44px"} src={src} />
          </Box>
          <Typography fontSize={16} fontWeight={"var(--medium-font-weight)"}>
            {title}
          </Typography>
        </Box>
        {isChecked && <PaymentDetails />}
      </Box>
      <CustomRadioButton
        name={"paymentitemradio"}
        title={title}
        value={title}
        handleChange={handleChange}
        className={isChecked ? styles.inputChecked : styles.input}
      />
    </Box>
  );
}
