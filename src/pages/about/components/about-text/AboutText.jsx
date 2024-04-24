import { Box, Typography } from "@mui/material";

const overflowHidden = {
  overflow: "hidden",
  display: "-webkit-box",
  WebkitLineClamp: 6,
  WebkitBoxOrient: "vertical",
};

export function AboutText({
  typographyContainer,
  isOverflowHidden = true,
  gap = "8px",
  color = "var(--high-emphasis-text-color)",
  fontSize = 20,
  xsFontSize = fontSize,
  lineHeight = "26px",
  title = "About",
  description = "Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. ",
}) {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={gap}
      sx={{
        ...typographyContainer,
      }}
    >
      <Typography
        variant="h1"
        fontSize={{ xs: xsFontSize, sm: fontSize }}
        fontWeight={"var(--semi-bold-font-weight)"}
        fontFamily={"Inter"}
        color={color}
        lineHeight={{ xs: "26px", sm: lineHeight }}
      >
        {title}
      </Typography>
      <Typography
        fontSize={16}
        fontWeight={"var(--regular-font-weight)"}
        fontFamily={"Inter"}
        color={"var(--low-emphasis-text-color)"}
        sx={{
          ...(isOverflowHidden ? overflowHidden : null),
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}
