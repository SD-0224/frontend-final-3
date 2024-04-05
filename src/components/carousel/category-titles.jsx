import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";

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

export function CategoryItems(props) {
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
        <Typography fontSize={60} fontWeight={"900"} lineHeight={"50px"}>
          {props.title}
        </Typography>
        <Typography fontSize={28} fontWeight={"400"} lineHeight={"38px"}>
          {props.description}
        </Typography>
      </Box>
    </Paper>
  );
}
