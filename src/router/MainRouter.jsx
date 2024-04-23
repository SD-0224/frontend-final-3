import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Home } from "../pages/home";

export const MainRouter = function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
