import { Paper } from "@mui/material";
import { IconicButton } from "../IconicButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import EastIcon from "@mui/icons-material/East";
import { ProductImage } from "../product-image";

const imageContainerStyles = {
  position: "relative",
  display: "block",
  overflow: "hidden",
  fontWeight: 600,
};

const textContainerStyles = {
  position: "absolute",
  left: "40%",
  width: "60%",
  height: "80%",
  top: "10%",
  borderRadius: "15px 0 0 15px",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  color: "#1B4B66",
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
        <Box
          sx={{
            ...imageContainerStyles,
          }}
        >
          <ProductImage src={props.item.imgPath} width="100%" height={300} />
          <Paper
            square
            elevation={0}
            color="transparent"
            sx={{
              ...textContainerStyles,
            }}
          >
            <Box
              sx={{
                maxHeight: "70%",
                overflow: "hidden",
                padding: "5% 4% 0",
              }}
            >
              <Typography fontSize={60} fontWeight={"900"} lineHeight={"50px"}>
                {props.item.name}
              </Typography>
              <Typography fontSize={28} fontWeight={"400"} lineHeight={"38px"}>
                {props.item.description}
              </Typography>
            </Box>
          </Paper>
        </Box>

        <Box sx={{ position: "absolute", left: "42%", top: "70%" }}>
          <IconicButton icon={<EastIcon />} label={"See More"} />
        </Box>
      </Box>
    </>
  );
}

export default CarouselItem;
