import { Box } from "@mui/material";
import { ProductImage } from "../product-image";

export function StaticBanner() {
  return (
    <Box
      sx={{
        width: "100%",
        margin: "40px 0",
        height: "668px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <ProductImage
        src={
          "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
        }
        width="100%"
        height="400px"
        borderRadius="20px"
      />
      <Box display={"flex"} justifyContent={"space-between"}>
        <ProductImage
          src={
            "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
          }
          width="49%"
          height="228px"
          borderRadius="20px"
        />
        <ProductImage
          src={
            "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
          }
          width="49%"
          height="228px"
          borderRadius="20px"
        />
      </Box>
    </Box>
  );
}
