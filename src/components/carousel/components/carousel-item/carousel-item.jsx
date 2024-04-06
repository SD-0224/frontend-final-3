import { IconicButton } from "../../../iconic-button/";
import { ProductImage } from "../../../product-image";
import { CategoryTitles } from "../category-titles";
import EastIcon from "@mui/icons-material/East";
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
          margin: "1%",
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
            <IconicButton icon={<EastIcon />} label={"See More"} />
          </Box>
        </Link>
      </Box>
    </>
  );
}
