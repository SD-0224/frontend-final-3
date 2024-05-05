import { ProductImage } from "../../../product-image";
import { CategoryTitles } from "./components/category-titles";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const imageContainerStyles = {
  position: "relative",
  display: "block",
  overflow: "hidden",
  height: { xs: "200px", sm: "250px", md: "350px", lg: "400px" },
};

export function CarouselItem({ title, subtitle, homeImage, id }) {
  return (
    <>
      <Box
        sx={{
          position: "relative",
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
              height="100%"
              borderRadius="24px"
            />
            <CategoryTitles {...{ title, subtitle, id }} />
          </Box>
        </Link>
      </Box>
    </>
  );
}
