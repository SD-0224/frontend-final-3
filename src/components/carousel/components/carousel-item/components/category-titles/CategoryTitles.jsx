import { Typography, Paper, Box } from "@mui/material";
import { CustomButton } from "../../../../../custom-button";
import { RightArrow } from "../../../../../icons";

const textContainerStyles = {
  position: "absolute",
  left: "44%",
  height: { xs: "170px", sm: "200px", md: "280px", lg: "316px" },
  top: { xs: "20px", sm: "25px", md: "30px", lg: "42px" },
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
          maxWidth: "50%",
          padding: "25px 0 0 47px",
          maxHeight: { xs: "65%", lg: "60%" },
          overflow: "hidden",
        }}
      >
        <Typography
          fontSize={{ xs: 30, sm: 40, md: 60 }}
          fontWeight={"800"}
          lineHeight={{ xs: "30px", sm: "40px", md: "60px", lg: "84px" }}
          sx={{
            maxHeight: { xs: "95px", sm: "107px", md: "200px", lg: "220px" },
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {title}
        </Typography>
        <Typography
          fontSize={{ xs: 0, sm: 22, md: 28 }}
          fontWeight={"500"}
          lineHeight={{ xs: "15px", sm: "25px", md: "38px" }}
          sx={{
            maxHeight: { xs: "75px", sm: "80px", md: "120px", lg: "140px" },
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
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
