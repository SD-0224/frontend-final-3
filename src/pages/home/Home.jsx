import { brands } from "../../fake";
import { useEffect, useState } from "react";
import { mapBy } from "../../modules/array";
import { HandpickedSection } from "./components/handpicked-section";
import { NewArrivalsSection } from "./components/new-arrivals-section";
import { ShopByBrandsSection } from "./components/shop-by-brands-section";
import { StaticBannersSection } from "./components/static-banners-section";
import { HeroSection } from "./components/hero-section";
import { fetchApiData } from "../../modules/fetch-api-data";

export const Home = function () {
  const [categories, setCategories] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [products, setProducts] = useState([]);
  const categoriesMap = mapBy(categories, "id");
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedCategories = await fetchApiData("categories");

      setCategories(fetchedCategories);
    })();

    (async () => {
      const fetchedNewArrivals = await fetchApiData("products/new-arrivals");

      setNewArrivals(fetchedNewArrivals);
    })();

    (async () => {
      const fetchedProducts = await fetchApiData("products");

      setProducts(fetchedProducts);
    })();
    
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
      .map(({ categoryImage, name }) => ({ image: categoryImage, text: name }));

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
