import { useEffect, useState } from "react";
import { TabNavigation } from "../../../../components/tab-navigation";
import { fetchApiData } from "../../../../modules/fetch-api-data";
import { DescriptionPanel } from "./components/description-panel";
import { ProductsPanel } from "./components/products-panel";
import { ReviewsPanel } from "./components/reviews-panel/ReviewsPanel";

export const BottomContent = function ({ description, reviews, categoryId }) {
  const PRODUCTS_COUNT = 5;
  const tabs = [
    "Product Description",
    "Related Products",
    "Ratings and Reviews",
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const endpoint = `products/category/${categoryId}`;

    fetchApiData(endpoint)
      .then((fetchedProducts) => {
        const productsSlice = fetchedProducts.slice(0, PRODUCTS_COUNT);

        setProducts(productsSlice);
      })
      .catch(() => {});
  }, [categoryId]);

  const tabChange = function (tab) {
    setSelectedTab(tab);
  };

  return (
    <>
      <TabNavigation {...{ titles: tabs }} handleTabClick={tabChange} />
      <div style={{ marginTop: "24px" }}>
        {selectedTab === tabs[0] && <DescriptionPanel {...{ description }} />}
        {selectedTab === tabs[1] && <ProductsPanel {...{ products }} />}
        {selectedTab === tabs[2] && <ReviewsPanel {...{ reviews }} />}
      </div>
    </>
  );
};
