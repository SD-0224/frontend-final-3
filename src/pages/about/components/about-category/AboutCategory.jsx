import { Box } from "@mui/material";
import { ProductImage } from "../../../../components/product-image";
import { AboutText } from "../about-text/AboutText";
import { useMediaQuery } from "@mui/material";

const typographyContainer = {
  maxHeight: "90%",
};

export function AboutCategory({
  imageSrc,
  imgPosition = "right",
  title,
  description,
}) {
  const isXsScreen = useMediaQuery("(max-width:600px)");
  const isRight = imgPosition === "right";
  const imgWidth = isXsScreen ? "100%" : "54%";
  const Image = (
    <ProductImage
      height="100%"
      width={imgWidth}
      src={imageSrc}
      borderRadius="0"
    />
  );

  return (
    <Box
      display={"flex"}
      flexDirection={{ xs: "column", sm: "row" }}
      gap={"32px"}
      alignItems={"center"}
      height={"299px"}
      marginBottom={{ xs: "180px", sm: "0" }}
    >
      {!isRight && !isXsScreen && Image}
      <AboutText {...{ typographyContainer, title, description }} />
      {(isRight || isXsScreen) && Image}
    </Box>
  );
}
