import * as React from "react";
import { Box } from "@mui/material";
import { ProductImage } from "../product-image/ProductImage";
import { CustomTypography } from "../custom-typography";

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

export function BrandSection({ brandImages }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: 263,
      }}
    >
      <CustomTypography
        text={"Shop by Brands"}
        fontSize={"34px"}
        fontWeight={"500"}
        marginBottom={"20px"}
      />
      <Box
        sx={{
          ...brandContainer,
        }}
      >
        {brandImages.map((brand) => {
          return (
            <div key={brand}>
              <ProductImage src={brand} width={"168px"} />
            </div>
          );
        })}
      </Box>
    </Box>
  );
}
