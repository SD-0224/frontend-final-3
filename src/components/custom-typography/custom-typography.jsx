import { Typography } from "@mui/material";

export function CustomTypography({
  text,
  fontSize,
  fontWeight,
  marginBottom = "0",
  color = "#13101E",
  lineHeight = "40px",
}) {
  return (
    <Typography
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      color={color}
      sx={{ marginBottom: { marginBottom } }}
    >
      {text}
    </Typography>
  );
}
