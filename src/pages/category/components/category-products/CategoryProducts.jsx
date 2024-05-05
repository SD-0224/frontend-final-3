import { ProductCard } from "../../../../components/product-card";
import { Grid } from "@mui/material";

export const CategoryProducts = function ({ products }) {
  return (
    <Grid container spacing={4}>
      {products?.map((product) => (
        <Grid item key={product.id}>
          <ProductCard
            {...product}
            image={product.smallImageUrl}
            subtitle={product.shortSubtitle}
          />
        </Grid>
      ))}
    </Grid>
  );
};
