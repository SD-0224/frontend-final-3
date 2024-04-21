import { useState } from "react";
import { Sheet, Typography } from "@mui/joy";
import styles from "./PaymentComponent.module.css";
import { CustomRadioButton } from "../../../custom-radio-button";

export function PaymentComponent({ paymentMethod }) {
  const { title, src } = paymentMethod;

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  console.log(selectedValue);

  return (
    <Sheet
      component="label"
      key={title}
      className={styles.paymentMethodContainer}
    >
      <CustomRadioButton {...{ handleChange, title }} />
      <img alt={title} src={src} className={styles.paymentMethodImg} />
      <Typography
        sx={{
          marginTop: "16px",
          fontSize: "16px",
          color: "var(--high-emphasis-text-color)",
          fontWeight: "600",
        }}
      >
        {title}
      </Typography>
    </Sheet>
  );
}
