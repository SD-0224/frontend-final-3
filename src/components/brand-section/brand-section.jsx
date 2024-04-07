import * as React from "react";
import { Typography, Box } from "@mui/material";
import { ProductImage } from "../product-image/ProductImage";

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

export function BrandSection({ brands }) {
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
