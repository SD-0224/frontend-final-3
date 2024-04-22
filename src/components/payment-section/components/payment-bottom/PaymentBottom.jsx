import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { ProductImage } from "../../../product-image";
import { CustomRadioButton } from "../../../custom-radio-button";
import styles from "./PaymentBottom.module.css";
import { CustomInput } from "../../../custom-input";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

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
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <CustomInput
            id={"paymentId"}
            placeholder={"Enter your UPI Id"}
            type={"text"}
            border={"1px solid var(--primary-tint)"}
            borderRadius="4px"
            isGrey={true}
          />
          <Typography
            sx={{
              fontSize: 12,
              fontWeight: "var(--medium-font-weight)",
              color: "#A7A7A7",
            }}
          >
            Eg: 1234567890@ybl
          </Typography>
          <FormControlLabel
            sx={{
              marginLeft: "-3px",
              display: "flex",
              gap: "5px",
              color: "var(--low-emphasis-text-color)",
              fontWeight: "var(--medium-font-weight)",
              fontSize: 14,
            }}
            control={
              <Checkbox
                defaultChecked
                sx={{
                  justifyContent: "start",
                  padding: 0,
                  "&.Mui-checked": {
                    color: "var(--primary)",
                  },
                }}
              />
            }
            label="Save this for future transactions"
          />
        </Box>
        <CustomRadioButton
          title={"Google Pay"}
          handleChange={handleChange}
          className={styles.input}
        />
      </Box>
    </Box>
  );
}
