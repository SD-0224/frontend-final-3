import { capitalize } from "@mui/material";
import { useEffect, useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { fetchApiData } from "../../modules/fetch-api-data";

function pathNameToTitle(pathname) {
  return pathname
    ?.replace("/", "")
    .replaceAll("-", " ")
    .split(" ")
    .filter((word) => word)
    .map((word) => capitalize(word))
    .join(" ");
}

function getPageSearchParams(searchParams) {
  const categoryId = searchParams.get("categoryId");
  const brandId = searchParams.get("brandId");
  const query = searchParams.get("query");

  return { categoryId, brandId, query };
}

function getProductsApiEndpoint(pathname, searchParams) {
  const { categoryId, brandId, query } = getPageSearchParams(searchParams);

  if (pathname == "/category" && categoryId)
    return `products/category/${categoryId}`;

  if (pathname == "/brand" && brandId) return `products/brand/${brandId}`;

  if (pathname == "/handpicked" && categoryId)
    return `products/handpicked/${categoryId}`;

  if (pathname == "/search" && query) return `products/search/${query}`;

  return `products/${pathname}`;
}

async function getPageData(pathname, searchParams) {
  const { categoryId, brandId, query } = getPageSearchParams(searchParams);

  let title = pathNameToTitle(pathname);
  let image = `https://via.placeholder.com/1000x1000.png?text=${title}`;
  let products = [];

  try {
    const productsEndpoint = getProductsApiEndpoint(pathname, searchParams);

    products = await fetchApiData(productsEndpoint);

    if (categoryId) {
      const category = await fetchApiData(`categories/${categoryId}`);

      title = category.name;
      image = category.categoryImage;
    }

    if (brandId) {
      const brand = await fetchApiData(`brands/${brandId}`);

      title = brand.name;
      image = brand.image;
    }
  } catch (e) {}

  if (query) {
    title = "Search Results";
    image = `https://via.placeholder.com/1000x1000.png?text=${title}`;
  }

  return { products, title, image };
}

export const useFetchCategoryPageData = function () {
  const defaultPageData = {
    title: "",
    image: "",
    products: [],
  };
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [pageData, setPageData] = useState(defaultPageData);

  useEffect(() => {
    getPageData(pathname, searchParams).then(setPageData);
  }, [pathname, searchParams]);

  return pageData;
};
