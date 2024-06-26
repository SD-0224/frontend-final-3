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
import { useResetPageScroll } from "../../hooks/reset-page-scroll";
import { Storage } from "../../modules/sotrage";

export const Product = function () {
  useResetPageScroll();

  const [product, setProduct] = useState({});
  const [galleryImages, setGalleryImages] = useState([]);
  const [searchParams] = useSearchParams();

  const MAX_GALLERY_ITEMS = 30;

  useEffect(() => {
    const randomGalleryLength = Math.ceil(Math.random() * MAX_GALLERY_ITEMS);

    const productId = searchParams.get("productId");

    fetchApiData(`products/${productId}`)
      .then((product) => {
        const { smallImageUrl } = product;

        const galleryUrls = new Array(randomGalleryLength).fill(smallImageUrl);

        setProduct(product);
        setGalleryImages(galleryUrls);
      })
      .catch(() => { });
  }, [searchParams]);

  return (
    product && (
      <SectionContainer padding="20px">
        <Breadcrumbs />
        <Box>
          <Grid container gap="27px">
            <Grid item justifyContent="center">
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
            <Grid item xs={12} md={5}>
              <ProductDetails {...product} />
              <Divider sx={{ marginTop: "24px", marginBottom: "32px" }} />
              <ActionsSection onAddToCart={() => Storage.addProduct(product)} productId={product.id} />
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
