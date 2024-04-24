import { Box } from "@mui/material";
import { ProductImage } from "../../../../components/product-image";
import { AboutText } from "../about-text";

const typographyContainer = {
  height: "100%",
  position: "absolute",
  left: "55%",
  top: 0,
  padding: { xs: "20px 64px 20px 10px", sm: "20px 64px 20px 33px" },
  justifyContent: "center",
};

export function BannerImage({ imageSrc, title, description }) {
  return (
    <Box
      height={{ xs: "200px", sm: "250px", md: "350px", lg: "400px" }}
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
        {...{ typographyContainer, title, description }}
        gap={"12px"}
        fontSize={50}
        xsFontSize={30}
        color="var(--dark)"
        lineHeight="61px"
      />
    </Box>
  );
}
