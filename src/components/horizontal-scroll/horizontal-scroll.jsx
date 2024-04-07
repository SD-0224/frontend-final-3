import { Typography, Box } from "@mui/material";

export function HorizontalScroll({ color = "#13101E", title, children }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: 263,
      }}
    >
      <Typography
        fontSize={"34px"}
        fontWeight={"500"}
        color={color}
        sx={{ marginBottom: "20px" }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
}
