import { IconicButton } from "../iconic-button";
import Box from "@mui/material/Box";
import EastIcon from "@mui/icons-material/East";
import { ProductImage } from "../product-image";
import { CategoryItems } from "./category-titles";
import Link from "@mui/material/Link";

const imageContainerStyles = {
  position: "relative",
  display: "block",
  overflow: "hidden",
  fontWeight: 600,
};

function CarouselItem(props) {
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
        <Link href="#">
          <Box
            sx={{
              ...imageContainerStyles,
            }}
          >
            <ProductImage src={props.item.imgPath} width="100%" height={300} />
            <CategoryItems
              title={props.item.name}
              description={props.item.description}
            />
          </Box>

          <Box sx={{ position: "absolute", left: "42%", top: "70%" }}>
            <IconicButton icon={<EastIcon />} label={"See More"} />
          </Box>
        </Link>
      </Box>
    </>
  );
}

export default CarouselItem;
