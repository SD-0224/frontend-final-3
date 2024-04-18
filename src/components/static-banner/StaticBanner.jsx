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
        <Box
          position={"relative"}
          flex={1}
          marginRight={{ xs: "20px", md: "32px" }}
          height={{ xs: "78px", sm: "128px", md: "178px", lg: "228px" }}
        >
          <ProductImage
            src={"logo192.png"}
            width="100%"
            height="100%"
            borderRadius="24px"
          />
          <Typography
            position={"absolute"}
            right={"35px"}
            top={{ xs: "14px", sm: "18px", md: "22px", lg: "26px" }}
            fontSize={{ xs: 18, sm: 25, md: 40, xl: 55 }}
            fontWeight={"700"}
            lineHeight={{ xs: "20px", sm: "35px", md: "45px", lg: "52px" }}
            color={"#A53F64"}
            sx={{
              maxWidth: "50%",
              maxHeight: { xs: "50px", sm: "70px", md: "90px", lg: "104px" },
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: { xs: "2", md: "3" },
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
          height={{ xs: "78px", sm: "128px", md: "178px", lg: "228px" }}
        >
          <ProductImage
            src={"logo192.png"}
            width="100%"
            height="100%"
            borderRadius="24px"
          />
          <Typography
            position={"absolute"}
            right={"35px"}
            top={{ xs: "14px", sm: "18px", md: "22px", lg: "26px" }}
            fontSize={{ xs: 18, sm: 25, md: 40, xl: 55 }}
            fontWeight={"700"}
            lineHeight={{ xs: "20px", sm: "30px", md: "40px", lg: "52px" }}
            color={"var(--primary)"}
            sx={{
              maxWidth: "50%",
              maxHeight: { xs: "50px", sm: "65px", md: "150px" },
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: { xs: "2", md: "3" },
              WebkitBoxOrient: "vertical",
              textAlign: "right",
            }}
          >
            Popular in community!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
