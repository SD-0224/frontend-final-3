import { CustomButton } from "../../../custom-button";
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
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="11"
                  viewBox="0 0 16 11"
                  fill="none"
                >
                  <path
                    d="M1 5.49996H15M15 5.49996L10.5 1M15 5.49996L10.5 9.99996"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
              label={"See More"}
              variant={"contained"}
            />
          </Box>
        </Link>
      </Box>
    </>
  );
}
