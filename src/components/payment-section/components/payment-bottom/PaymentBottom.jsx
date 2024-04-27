import { useState } from "react";
import { Box } from "@mui/material";
import { PaymentBottomItem } from "./components/payment-bottom-item";

export function PaymentBottom({ paymentDetail }) {
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
      {paymentDetail?.map(({ title, src }) => {
        return (
          <PaymentBottomItem {...{ handleChange, selectedValue, title, src }} />
        );
      })}
    </Box>
  );
}
