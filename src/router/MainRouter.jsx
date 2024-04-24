import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Home } from "../pages/home";
import { MyCart } from '../pages/my-cart';

export const MainRouter = function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/my-cart" element={<MyCart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
