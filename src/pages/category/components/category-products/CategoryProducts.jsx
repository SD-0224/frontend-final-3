import { ProductCard } from "../product-card";
import { Grid } from "@mui/material";

export const CategoryProducts = function ({ products }) {
  return (
    <Grid container spacing={4}>
      {products?.map((product) => (
        <Grid item key={product.id}>
          <ProductCard {...product} />
        </Grid>
      ))}
    </Grid>
  );
};
