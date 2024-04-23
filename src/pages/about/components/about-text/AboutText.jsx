import { Box, Typography } from "@mui/material";

const overflowHidden = {
  overflow: "hidden",
  display: "-webkit-box",
  WebkitLineClamp: 10,
  WebkitBoxOrient: "vertical",
};

export function AboutText({
  typographyContainer,
  isUpperLetters = false,
  isoverflowHidden = true,
  gap = "8px",
  color = "var(--high-emphasis-text-color)",
  fonstSize = 20,
  lineHeight = "26px",
}) {
  const text = "About";

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
        fontSize={fonstSize}
        fontWeight={"var(--semi-bold-font-weight)"}
        fontFamily={"Inter"}
        color={color}
        lineHeight={lineHeight}
      >
        {isUpperLetters ? text.toUpperCase() : text}
      </Typography>
      <Typography
        fontSize={16}
        fontWeight={"var(--regular-font-weight)"}
        fontFamily={"Inter"}
        color={"var(--low-emphasis-text-color)"}
        sx={{
          ...(isoverflowHidden ? overflowHidden : null),
        }}
      >
        Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply
        dummy text of the printing. Lorem Ipsum is simply dummy text of the
        printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum
        is simply dummy text of the printing. Lorem Ipsum is simply dummy text
        of the printing.
      </Typography>
    </Box>
  );
}
