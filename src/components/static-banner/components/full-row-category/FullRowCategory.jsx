import { Box, Typography } from "@mui/material";
import { ProductImage } from "../../../product-image";

export function FullRowCategory({ imageSrc, title }) {
  return (
    <Box
      position={"relative"}
      marginBottom={{ xs: "20px", md: "40px" }}
      height={{ xs: "200px", sm: "250px", md: "350px", lg: "400px" }}
    >
      <ProductImage
        src={imageSrc}
        width="100%"
        height="100%"
        borderRadius="24px"
      />
      <Typography
        position={"absolute"}
        left={"40px"}
        top={{ xs: "40px", sm: "60px", md: "97px", lg: "147px" }}
        fontSize={{ xs: 30, sm: 40, md: 52 }}
        fontWeight={"700"}
        lineHeight={{ xs: "30px", sm: "40px", md: "60px", lg: "68px" }}
        color={"#97451F"}
        sx={{
          maxWidth: "50%",
          maxHeight: { xs: "70px", sm: "90px", md: "110px", lg: "136px" },
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}
