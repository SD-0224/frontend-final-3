import { Divider, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { ProductImage } from "../../components/product-image";
import { SectionContainer } from "../../components/section-container";
import { fetchApiData } from "../../modules/fetch-api-data";
import { ActionsSection } from "./components/actions-section";
import { BottomContent } from "./components/bottom-content/BottomContent";
import { BottomGallery } from "./components/bottom-gallery";
import { ProductDetails } from "./components/product-details";
import { Breadcrumbs } from "../../components/breadcrumbs";
import { useSearchParams } from "react-router-dom";

export const Product = function () {
  const [product, setProduct] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const MAX_GALLERY_ITEMS = 30;
  const randomGalleryLength = Math.ceil(Math.random() * MAX_GALLERY_ITEMS);

  useEffect(() => {
    const productId = searchParams.get("productId");

    (async () => {
      const product = await fetchApiData(`products/${productId}`);
      const galleryUrls = new Array(randomGalleryLength).fill(
        product.smallImageUrl
      );

      setGalleryImages(galleryUrls);

      setProduct(product);
    })();
  }, [searchParams]);

  return (
    product && (
      <SectionContainer padding="20px">
        <Breadcrumbs />
        <Box>
          <Grid container gap="27px">
            <Grid item xs={12} sm={10} md={8} lg={6} justifyContent="center">
              <Box width="100%" maxWidth="588px">
                <ProductImage
                  src={product.largeImageUrl}
                  borderRadius="16px"
                  width="100%"
                  height="auto"
                />
                <BottomGallery
                  imagesUrls={galleryImages}
                  style={{
                    padding: "0px 10%",
                    marginTop: "24px",
                  }}
                />
              </Box>
            </Grid>
            <Grid item>
              <ProductDetails {...product} />
              <Divider sx={{ marginTop: "24px", marginBottom: "32px" }} />
              <ActionsSection />
            </Grid>
          </Grid>
          <Box marginTop="30px">
            <BottomContent {...product} />
          </Box>
        </Box>
      </SectionContainer>
    )
  );
};
