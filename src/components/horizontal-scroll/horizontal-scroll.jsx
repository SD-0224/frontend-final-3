import { Typography, Box } from "@mui/material";

export function HorizontalScroll({
  height,
  color = "#13101E",
  title,
  imagesContainerStyles,
  children,
}) {
  const imagesContainer = {
    display: "flex",
    overflowX: "auto",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    "& > :not(style)": {
      ...imagesContainerStyles,
    },
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: { height },
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
      <Box
        sx={{
          ...imagesContainer,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
