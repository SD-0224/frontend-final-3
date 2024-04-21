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
        variant="full"
        imageSrc={
          "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
        }
        title="Limited Edition Products"
        color="#97451F"
      />

      <Box display={"flex"} justifyContent={"space-between"}>
        <CategoryBanner
          variant="dual"
          imageSrc={
            "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
          }
          title="15% OFF & more"
          backgroundColor="var(--grey)"
          color="#A53F64"
          marginRight={{ xs: "20px", md: "32px" }}
        />
        <CategoryBanner
          variant="dual"
          imageSrc={
            "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
          }
          title="Popular in community!"
          backgroundColor="#C4C4C4"
          color="var(--primary)"
        />
      </Box>
    </Box>
  );
}
