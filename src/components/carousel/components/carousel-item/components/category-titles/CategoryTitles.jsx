import { Typography, Paper, Box } from "@mui/material";
import { CustomButton } from "../../../../../custom-button";
import { RightArrow } from "../../../../../icons";

const textContainerStyles = {
  position: "absolute",
  left: "44%",
  height: "316px",
  top: "42px",
  borderRadius: "24px",
  backgroundColor: "rgba(222, 222, 222, 0.7)",
  color: "#1B4B66",
  width: "100%",
};

export function CategoryTitles({ title, subtitle }) {
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
          padding: "25px 0 0 47px",
        }}
      >
        <Typography fontSize={60} fontWeight={"800"} lineHeight={"84px"}>
          {title}
        </Typography>
        <Typography fontSize={28} fontWeight={"500"} lineHeight={"38px"}>
          {subtitle}
        </Typography>
      </Box>
      <Box sx={{ position: "absolute", left: "47px", bottom: "16px" }}>
        <CustomButton
          startIcon={<RightArrow borderColor={"#ffffff"} />}
          label="See More"
          variant="contained"
          padding="10px 65px"
        />
      </Box>
    </Paper>
  );
}
