import { CustomButton } from "../../../custom-button";
import { RightArrow } from "../../../icons/RightArrow";
import { ProductImage } from "../../../product-image";
import { CategoryTitles } from "../category-titles";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const imageContainerStyles = {
  position: "relative",
  display: "block",
  overflow: "hidden",
  fontWeight: 600,
};

export function CarouselItem({ title, description, imgPath }) {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "25px",
        }}
      >
        <Link to={"/"}>
          <Box
            sx={{
              ...imageContainerStyles,
            }}
          >
            <ProductImage src={imgPath} width="100%" height={300} />
            <CategoryTitles title={title} description={description} />
          </Box>

          <Box sx={{ position: "absolute", left: "42%", top: "70%" }}>
            <CustomButton
              startIcon={<RightArrow borderColor={"white"} />}
              label={"See More"}
              variant={"contained"}
            />
          </Box>
        </Link>
      </Box>
    </>
  );
}
