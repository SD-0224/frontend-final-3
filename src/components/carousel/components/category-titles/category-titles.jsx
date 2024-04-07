import { Paper, Box } from "@mui/material";
import { CustomTypography } from "../../../custom-typography";

const textContainerStyles = {
  position: "absolute",
  left: "40%",
  width: "60%",
  height: "80%",
  top: "10%",
  borderRadius: "15px 0 0 15px",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
};

export function CategoryTitles({ title, description }) {
  return (
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
        <CustomTypography
          text={title}
          fontSize={60}
          fontWeight={"900"}
          lineHeight={"50px"}
          color={"#1B4B66"}
        />
        <CustomTypography
          text={description}
          fontSize={28}
          fontWeight={"400"}
          lineHeight={"38px"}
          color={"#1B4B66"}
        />
      </Box>
    </Paper>
  );
}
