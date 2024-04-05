import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import EastIcon from "@mui/icons-material/East";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { autoPlay } from "react-swipeable-views-utils";
import { IconicButton } from "../IconicButton";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Carry your Funk1",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Carry your Funk2",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Carry your Funk3",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    label: "Carry your Funk4",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

const imageContainerStyles = {
  position: "relative",
  display: "block",
  overflow: "hidden",
  width: "100%",
  height: 300,
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

function Carousel() {
  const [activeStep, setActiveStep] = React.useState(0);

  const isWithinRange = (index) => Math.abs(activeStep - index) <= 2;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        position: "relative",
        margin: "1%",
        overflow: "hidden",
        borderRadius: "25px",
      }}
    >
      <AutoPlaySwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {isWithinRange(index) ? (
              <Box
                sx={{
                  ...imageContainerStyles,
                }}
              >
                <img
                  src={step.imgPath}
                  alt={step.label}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
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
                    <Typography
                      fontSize={60}
                      fontWeight={"900"}
                      lineHeight={"50px"}
                    >
                      {step.label}
                    </Typography>
                    <Typography
                      fontSize={28}
                      fontWeight={"400"}
                      lineHeight={"38px"}
                    >
                      Trendy handbags collection for your party animal.
                    </Typography>
                  </Box>
                </Paper>
              </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Box sx={{ position: "absolute", left: "42%", top: "70%" }}>
        <IconicButton icon={<EastIcon />} label={"See More"} />
      </Box>
    </Box>
  );
}

export default Carousel;
