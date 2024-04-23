import { Box, Typography } from "@mui/material";
import { ProductImage } from "../../../../components/product-image";
import { AboutText } from "../about-text";

const typographyContainer = {
  height: "100%",
  position: "absolute",
  left: "55%",
  top: 0,
  padding: "20px 64px 20px 33px",
  justifyContent: "center",
};

export function BannerImage({ imageSrc }) {
  return (
    <Box
      height={{ xs: "200px", md: "350px", lg: "400px" }}
      position={"relative"}
      alignItems={"center"}
      display={"flex"}
    >
      <ProductImage
        width="100%"
        height="100%"
        src={imageSrc}
        borderRadius="0"
      />
      <AboutText
        {...{ typographyContainer }}
        gap={"12px"}
        fonstSize={50}
        color="var(--dark)"
        lineHeight="61px"
        isUpperLetters={true}
      />
    </Box>
  );
}
