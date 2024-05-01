import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Home } from "../pages/home";
import { About } from "../pages/about";
import { MyCart } from "../pages/my-cart";
import { UserProfile } from "../pages/user-profile";
import { Category } from "../pages/category";

export const MainRouter = function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/my-cart" element={<MyCart />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/about" element={<About />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
