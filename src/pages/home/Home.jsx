import { categories, products, brands } from "../../fake";
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
  const categoriesMap = mapBy(categories, "id");
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedCategories = await fetchApiData("categories");

      setCategories(fetchedCategories);
    })();
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
  }, []);

  return (
    <>
      <HeroSection {...{ categories }} />
      <NewArrivalsSection {...{ products }} />
      <HandpickedSection {...{ collections }} />
      <ShopByBrandsSection {...{ brands }} />
      <StaticBannersSection />
    </>
  );
};
