import { Box, Typography } from "@mui/material";
import { ProductImage } from "../product-image";

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
        marginBottom={"40px"}
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

      <Box
        display={{ xs: "block", md: "flex" }}
        justifyContent={"space-between"}
      >
        <Box
          position={"relative"}
          flex={1}
          margin={{ xs: "0 0 40px ", md: "0 32px 0 0" }}
          height={{ xs: "178px", lg: "228px" }}
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
            right={"35px"}
            top={{ xs: "22px", lg: "26px" }}
            fontSize={{ xs: 40, xl: 55 }}
            fontWeight={"700"}
            lineHeight={{ xs: "40px", md: "45px", lg: "52px" }}
            color={"#A53F64"}
            sx={{
              maxWidth: "50%",
              maxHeight: { xs: "150px", lg: "104px" },
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              textAlign: "right",
            }}
          >
            15% OFF & more
          </Typography>
        </Box>

        <Box
          position={"relative"}
          flex={1}
          height={{ xs: "178px", lg: "228px" }}
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
            right={"35px"}
            top={{ xs: "22px", lg: "26px" }}
            fontSize={{ xs: 40, xl: 55 }}
            fontWeight={"700"}
            lineHeight={{ xs: "40px", md: "40px", lg: "52px" }}
            color={"#1B4B66"}
            sx={{
              maxWidth: "50%",
              maxHeight: { xs: "150px", lg: "104px" },
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              textAlign: "right",
            }}
          >
            Popular in the community!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
