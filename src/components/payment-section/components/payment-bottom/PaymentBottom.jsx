import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { ProductImage } from "../../../product-image";
import { CustomRadioButton } from "../../../custom-radio-button";
import styles from "./PaymentBottom.module.css";

export function PaymentBottom() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box
      sx={{
        border: "1px solid var(--primary)",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        gap: "40px",
      }}
    >
      <Box component="label" className={styles.paymentBottomItem}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "11px",
            marginBottom: "12px",
          }}
        >
          <Box
            sx={{
              width: "68px",
              height: "69px",
              borderRadius: "4px",
              border: "1px solid #DCDCDC",
              backgroundColor: "var(--white)",
              paddingTop: "12px",
              paddingLeft: "12px",
            }}
          >
            <ProductImage width={"44px"} src={"/logo192.png"} />
          </Box>
          <Typography
            sx={{ fontSize: 16, fontWeight: "var(--medium-font-weight)" }}
          >
            Google Pay
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
        ></Box>
        <CustomRadioButton
          title={"Google Pay"}
          handleChange={handleChange}
          className={styles.input}
        />
      </Box>
    </Box>
  );
}
