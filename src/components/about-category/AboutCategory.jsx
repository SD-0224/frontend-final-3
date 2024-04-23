import { Box, Typography } from "@mui/material";
import { ProductImage } from "../product-image";

export function AboutCategory({ description, src, imgPosition = "right" }) {
  const isRight = imgPosition === "right";
  const Image = (
    <ProductImage height="100%" width="54%" src={src} borderRadius="0" />
  );

  return (
    <Box display={"flex"} gap={"32px"} alignItems={"center"} height={"299px"}>
      {!isRight && Image}
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"8px"}
        maxHeight={"90%"}
      >
        <Typography
          variant="h1"
          fontSize={20}
          fontWeight={"var(--semi-bold-font-weight)"}
          fontFamily={"Inter"}
        >
          About
        </Typography>
        <Typography
          fontSize={16}
          fontWeight={"var(--regular-font-weight)"}
          fontFamily={"Inter"}
          overflow={"hidden"}
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 10,
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </Typography>
      </Box>
      {isRight && Image}
    </Box>
  );
}
