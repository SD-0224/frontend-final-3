import { Box, Typography } from "@mui/material";
import { ProductImage } from "../../../product-image";
import { CircleIconLink } from "../../../circle-icon-link";
import { RightArrow } from "../../../icons";

export function DualCategoryRow({
  imageSrc,
  title,
  backgroundColor,
  borderColor,
  ...props
}) {
  return (
    <Box
      position={"relative"}
      flex={1}
      height={{ xs: "78px", sm: "128px", md: "178px", lg: "228px" }}
      {...props}
    >
      <ProductImage
        src={imageSrc}
        width="100%"
        height="100%"
        borderRadius="24px"
      />
      <Typography
        position={"absolute"}
        right={"35px"}
        top={{ xs: "14px", sm: "18px", md: "22px", lg: "26px" }}
        fontSize={{ xs: 20, sm: 25, md: 40, xl: 55 }}
        fontWeight={"700"}
        lineHeight={{ xs: "20px", sm: "35px", md: "45px", lg: "52px" }}
        color={borderColor}
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
        {title}
      </Typography>
      <Box
        position={"absolute"}
        top={{ xs: "10px", md: "auto" }}
        left={{ xs: "10px", md: "auto" }}
        right={{ xs: "auto", md: "26px" }}
        bottom={{ xs: "auto", md: "15px", lg: "26px" }}
      >
        <CircleIconLink
          icon={<RightArrow borderColor={borderColor} width={31} height={21} />}
          backgroundColor={backgroundColor}
          width="51px"
        />
      </Box>
    </Box>
  );
}
