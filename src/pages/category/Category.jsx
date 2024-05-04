import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { SectionContainer } from "../../components/section-container";
import { ProductImage } from "../../components/product-image";
import { CategoryTitle } from "./components/category-title";
import { CategoryProducts } from "./components/category-products";
import { CustomPagination } from "./components/custom-pagination";
import { chunk } from "../../modules/array";
import { categories, products } from "../../fake";
import { Breadcrumbs } from "../../components/breadcrumbs";

export const Category = function () {
  const PAGE_SIZE = 9;
  const pages = chunk(products, PAGE_SIZE);

  const [pageNumber, setPageNumber] = useState(1);
  const [pageProducts, setPageProducts] = useState([]);

  useEffect(() => {
    const pageIndex = pageNumber - 1;
    const pageProducts = pages[pageIndex];

    setPageProducts(pageProducts);
  }, [pageNumber]);

  const [category] = categories;

  const paginationProps = {
    count: pages.length,
    onChange: (_event, page) => setPageNumber(page),
    pageNumber,
  };

  return (
    <>
      <SectionContainer>
        <ProductImage
          width="100%"
          height="400px"
          src={category.categoryImage}
          borderRadius="24px"
        />
      </SectionContainer>
      <SectionContainer>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { xs: "100%", sm: "85%", md: "74%" },
            margin: "auto",
            alignItems: "center",
          }}
        >
          <Box sx={{ alignSelf: "self-start", marginTop: "44px" }}><Breadcrumbs /></Box>
          <CategoryTitle>{category.name}</CategoryTitle>
          <CategoryProducts {...{ products: pageProducts }} />
          <CustomPagination
            {...paginationProps}
            style={{ margin: "37px 0px" }}
          />
        </Box>
      </SectionContainer>
    </>
  );
};
