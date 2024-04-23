import { Box } from "@mui/material";
import { ProductImage } from "../../../../components/product-image";
import { AboutText } from "../about-text/AboutText";

const typographyContainer = {
  maxHeight: "90%",
};

export function AboutCategory({ imageSrc, imgPosition = "right" }) {
  const isRight = imgPosition === "right";
  const Image = (
    <ProductImage height="100%" width="54%" src={imageSrc} borderRadius="0" />
  );

  return (
    <Box display={"flex"} gap={"32px"} alignItems={"center"} height={"299px"}>
      {!isRight && Image}
      <AboutText {...{ typographyContainer }} />
      {isRight && Image}
    </Box>
  );
}
