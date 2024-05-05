import { Box } from "@mui/material";
import { CategoryBanner } from "./components/category-banner";

const bannerContainer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: { xs: "20px", md: "40px" },
};

export function StaticBanner() {
  return (
    <Box
      sx={{
        ...bannerContainer,
      }}
    >
      <CategoryBanner
        to={`/limited-edition`}
        variant="full"
        imageSrc="/images/static-banner/limited.png"
        title="Limited Edition Products"
        color="#97451F"
      />

      <Box
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        gap={{ xs: "20px", md: "32px" }}
      >
        <CategoryBanner
          to={`/on-sale`}
          variant="dual"
          imageSrc="/images/static-banner/onsale.png"
          title="15% OFF & more"
          backgroundColor="var(--grey)"
          color="#A53F64"
        />

        <CategoryBanner
          to={`/popular`}
          variant="dual"
          imageSrc="/images/static-banner/popular.png"
          title="Popular in community!"
          backgroundColor="#C4C4C4"
          color="var(--primary)"
        />
      </Box>
    </Box>
  );
}
