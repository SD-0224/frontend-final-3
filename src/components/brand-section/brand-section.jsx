import * as React from "react";
import { Typography, Box } from "@mui/material";
import { ProductImage } from "../product-image/ProductImage";

const brands = [
  "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
];

const brandContainer = {
  display: "flex",
  overflowX: "auto",
  scrollbarWidth: "none",
  msOverflowStyle: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  "& > :not(style)": {
    mr: 6,
    height: "187px",
  },
};

export function BrandSection() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: 263,
        }}
      >
        <Typography
          fontSize={"34px"}
          fontWeight={"500"}
          sx={{ marginBottom: "20px" }}
        >
          Shop by Brands
        </Typography>
        <Box
          sx={{
            ...brandContainer,
          }}
        >
          {brands.map((brand) => {
            return (
              <div key={brand.id}>
                <ProductImage src={brand} width={"168px"} />
              </div>
            );
          })}
        </Box>
      </Box>
    </>
  );
}
