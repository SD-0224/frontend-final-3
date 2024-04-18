import { Box } from "@mui/material";
import { DualCategoryRow } from "./components/category-row";

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
      <DualCategoryRow
        variant="full"
        imageSrc={
          "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
        }
        title="Limited Edition Products"
        color="#97451F"
      />

      <Box display={"flex"} justifyContent={"space-between"}>
        <DualCategoryRow
          variant="dual"
          imageSrc={
            "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
          }
          title="15% OFF & more"
          backgroundColor="#F1F1F1"
          color="#A53F64"
          marginRight={{ xs: "20px", md: "32px" }}
        />

        <DualCategoryRow
          variant="dual"
          imageSrc={
            "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
          }
          title="Popular in community!"
          backgroundColor="#C4C4C4"
          color="#1B4B66"
        />
      </Box>
    </Box>
  );
}
