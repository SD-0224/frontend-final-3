import { useState } from "react";
import { Sheet, Typography } from "@mui/joy";
import styles from "./PaymentComponent.module.css";

export function PaymentComponent({ label, src }) {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Sheet
      component="label"
      key={label}
      className={styles.paymentMethodContainer}
    >
      <input
        type="radio"
        name="radio"
        value={label}
        onChange={handleChange}
        className={styles.input}
      ></input>
      <img alt={label} src={src} className={styles.paymentMethodImg} />
      <Typography className={styles.paymentMethodText}>{label}</Typography>
    </Sheet>
  );
}
