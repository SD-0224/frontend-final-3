import { Box } from "@mui/material";

export function OrdersGrid({ children, gridStyles }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "30px 4fr 3fr 3fr 3fr 1fr",
        textAlign: "start",
        gap: { xs: "10px", md: "0" },
        ...gridStyles,
      }}
    >
      {children}
    </Box>
  );
}
