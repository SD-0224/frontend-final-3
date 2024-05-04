import { useEffect, useState } from "react";
import { TabNavigation } from "../../../../components/tab-navigation";
import { fetchApiData } from "../../../../modules/fetch-api-data";
import { DescriptionPanel } from "./components/description-panel";
import { ProductsPanel } from "./components/products-panel";
import { ReviewsPanel } from "./components/reviews-panel/ReviewsPanel";

export const BottomContent = function ({ description, reviews, categoryId }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const endpoint = `products/category/${categoryId}`;
      const fetchedProducts = await fetchApiData(endpoint);
      const PRODUCTS_COUNT = 5;
      const productsSlice = fetchedProducts.slice(0, PRODUCTS_COUNT);

      setProducts(productsSlice);
    })();
  }, []);

  const tabs = [
    "Product Description",
    "Related Products",
    "Ratings and Reviews",
  ];

  const isDescriptionTab = selectedTab == tabs[0];
  const isProductsTab = selectedTab == tabs[1];
  const isReviewsTab = selectedTab == tabs[2];

  const tabChange = function (tab) {
    setSelectedTab(tab);
  };

  return (
    <>
      <TabNavigation {...{ titles: tabs }} handleTabClick={tabChange} />
      <div style={{ marginTop: "24px" }}>
        {isDescriptionTab && <DescriptionPanel {...{ description }} />}
        {isProductsTab && <ProductsPanel {...{ products }} />}
        {isReviewsTab && <ReviewsPanel {...{ reviews }} />}
      </div>
    </>
  );
};
