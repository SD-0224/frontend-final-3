import { Typography, Box } from "@mui/material";

export function HorizontalScroll({
  color = "#13101E",
  title,
  fontSize = "34px",
  padding = 0,
  fontWeight = "500",
  backgroundColor,
  titleMarginBottom,
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
        backgroundColor: { backgroundColor },
        padding: { padding },
      }}
    >
      <Typography
        fontSize={fontSize}
        fontWeight={fontWeight}
        color={color}
        sx={{ marginBottom: titleMarginBottom, lineHeight: "44px" }}
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
