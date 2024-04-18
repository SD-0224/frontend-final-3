import { Box, Typography } from "@mui/material";
import { ProductImage } from "../product-image";
import { DualCategoryRow } from "./components/dual-category-row";

const bannerContainer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

export function StaticBanner() {
  return (
    <Box
      sx={{
        ...bannerContainer,
      }}
    >
      <Box
        position={"relative"}
        marginBottom={{ xs: "20px", md: "40px" }}
        height={{ xs: "200px", sm: "250px", md: "350px", lg: "400px" }}
      >
        <ProductImage
          src={
            "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
          }
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
          Limited Edition Products
        </Typography>
      </Box>

      <Box display={"flex"} justifyContent={"space-between"}>
        <DualCategoryRow
          imageSrc={
            "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
          }
          title="15% OFF & more"
          backgroundColor="#F1F1F1"
          borderColor="#A53F64"
          marginRight={{ xs: "20px", md: "32px" }}
        />
        <DualCategoryRow
          imageSrc={
            "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
          }
          title="Popular in community!"
          backgroundColor="#C4C4C4"
          borderColor="#1B4B66"
        />
      </Box>
    </Box>
  );
}
