import { useState } from "react";
import { Sheet, Typography } from "@mui/joy";
import styles from "./PaymentComponent.module.css";

export function PaymentComponent({ paymentMethod }) {
  const { title, src } = paymentMethod;

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Sheet
      component="label"
      key={title}
      className={styles.paymentMethodContainer}
    >
      <input
        type="radio"
        name="radio"
        value={title}
        onChange={handleChange}
        className={styles.input}
      ></input>
      <img alt={title} src={src} className={styles.paymentMethodImg} />
      <Typography
        sx={{
          marginTop: "16px",
          fontSize: "16px",
          color: "#171520",
          fontWeight: "600",
        }}
      >
        {title}
      </Typography>
    </Sheet>
  );
}
