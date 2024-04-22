import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Box, Typography } from "@mui/material";
import { CustomInput } from "../../../../../../../custom-input";

export function PaymentDetails() {
  return (
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
  );
}
