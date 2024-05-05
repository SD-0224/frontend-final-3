import { useEffect, useState } from "react";
import { mapBy } from "../../modules/array";
import { HandpickedSection } from "./components/handpicked-section";
import { NewArrivalsSection } from "./components/new-arrivals-section";
import { ShopByBrandsSection } from "./components/shop-by-brands-section";
import { StaticBannersSection } from "./components/static-banners-section";
import { HeroSection } from "./components/hero-section";
import { fetchApiData } from "../../modules/fetch-api-data";
import { useResetPageScroll } from "../../hooks/reset-page-scroll";

export const Home = function () {
  useResetPageScroll();

  const [categories, setCategories] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetchApiData("categories")
      .then(setCategories)
      .catch(() => {});

    fetchApiData("products/new-arrivals")
      .then(setNewArrivals)
      .catch(() => {});

    fetchApiData("products")
      .then(setProducts)
      .catch(() => {});

    fetchApiData("brands")
      .then(setBrands)
      .catch(() => {});
  }, []);

  useEffect(() => {
    const categoriesMap = mapBy(categories, "id");
    const productCategoriesMap = {};

    for (let product of products) {
      if (productCategoriesMap[product.categoryId]) continue;

      const category = categoriesMap[product.categoryId];

      productCategoriesMap[product.categoryId] = category;
    }

    const productCategories = Object.values(productCategoriesMap);
    const categoryCollections = productCategories
      .filter((category) => category)
      .map(({ categoryImage, name, id }) => ({
        image: categoryImage,
        text: name,
        categoryId: id,
      }));

    setCollections(categoryCollections);
  }, [products, categories]);

  return (
    <>
      <HeroSection {...{ categories }} />
      <NewArrivalsSection {...{ products: newArrivals }} />
      <HandpickedSection {...{ collections }} />
      <ShopByBrandsSection {...{ brands }} />
      <StaticBannersSection />
    </>
  );
};
