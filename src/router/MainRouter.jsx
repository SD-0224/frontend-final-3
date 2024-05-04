import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Home } from "../pages/home";
import { About } from "../pages/about";
import { Category } from "../pages/category";
import { Product } from "../pages/product";
import { MyCart } from "../pages/my-cart";
import { UserProfile } from "../pages/user-profile";
import { CheckoutPage } from "../pages/checkout";
import { DataContextProvider } from "../contexts";

export const MainRouter = function () {
  const categoryPagePaths = [
    "/category",
    "/brand",
    "/popular",
    "/search",
    "/handpicked",
    "/new-arrivals",
    "/limited-edition",
    "/on-sale",
  ];

  return (
    <DataContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {categoryPagePaths.map((path) => (
              <Route path={path} element={<Category />} />
            ))}
            <Route path="/product" element={<Product />} />
            <Route path="/my-cart" element={<MyCart />} />
            <Route path="/user-profile/*" element={<UserProfile />} />
            <Route path="/about" element={<About />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="*" element={<h1>404 Page Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataContextProvider>
  );
};
