import { Box, Typography } from "@mui/material";
import { ProductImage } from "../../../../../../../../components/product-image";
import { CircleIconLink } from "../../../../../../../../components/circle-icon-link";
import { RightArrow } from "../../../../../../../../components/icons";

export function CategoryBanner({
  variant = "dual",
  imageSrc,
  title,
  backgroundColor,
  color,
  ...props
}) {
  const isDual = variant === "dual";

  const dualTypo = {
    right: "35px",
    top: { xs: "40px", sm: "60px", md: "22px", lg: "26px" },
    fontSize: { xs: 30, sm: 40, md: 35, lg: 40, xl: 55 },
    lineHeight: { xs: "30px", sm: "40px", md: "45px", lg: "52px" },
    maxHeight: { xs: "100px", sm: "120px", md: "90px", lg: "104px" },
    WebkitLineClamp: 3,
    textAlign: "right",
  };

  const fullTypo = {
    left: "40px",
    top: { xs: "40px", sm: "60px", md: "97px", lg: "147px" },
    fontSize: { xs: 30, sm: 40, md: 52 },
    lineHeight: { xs: "30px", sm: "40px", md: "60px", lg: "68px" },
    maxHeight: { xs: "100px", sm: "120px", md: "110px", lg: "136px" },
    WebkitLineClamp: 3,
  };

  const fullHeight = { xs: "200px", sm: "250px", md: "350px", lg: "400px" };

  const dualHeight = { xs: "200px", sm: "250px", md: "178px", lg: "228px" };

  return (
    <Box
      position={"relative"}
      flex={isDual ? { md: "1" } : "none"}
      height={isDual ? dualHeight : fullHeight}
      {...props}
    >
      <ProductImage
        src={imageSrc}
        width="100%"
        height="100%"
        borderRadius="24px"
      />
      <Typography
        sx={{
          ...(isDual ? dualTypo : fullTypo),
          position: "absolute",
          fontWeight: "700",
          color: color,
          maxWidth: "50%",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
        }}
      >
        {title}
      </Typography>
      {isDual ? (
        <Box
          position={"absolute"}
          right={{ xs: "20px", md: "26px" }}
          bottom={{ xs: "15px", md: "10px", lg: "26px" }}
        >
          <CircleIconLink
            icon={<RightArrow borderColor={color} width={31} height={21} />}
            backgroundColor={backgroundColor}
            height="51px"
          />
        </Box>
      ) : null}
    </Box>
  );
}
