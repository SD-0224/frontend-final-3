import { ProductImage } from "../../../product-image";
import { CategoryTitles } from "./components/category-titles";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const imageContainerStyles = {
  position: "relative",
  display: "block",
  overflow: "hidden",
};

export function CarouselItem({ title, subtitle, homeImage }) {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "24px",
        }}
      >
        <Link to={"/"}>
          <Box
            sx={{
              ...imageContainerStyles,
            }}
          >
            <ProductImage
              src={homeImage}
              width="100%"
              height="400px"
              borderRadius="24px"
            />
            <CategoryTitles {...{ title, subtitle }} />
          </Box>
        </Link>
      </Box>
    </>
  );
}