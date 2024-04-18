import { Box } from "@mui/material";
import { DualCategoryRow } from "./components/dual-category-row";
import { FullRowCategory } from "./components/full-row-category";

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
      <FullRowCategory
        title={"Limited Edition Products"}
        imageSrc={
          "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
        }
      />

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
