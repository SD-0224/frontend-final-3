import { Outlet } from "react-router-dom";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import Box from "@mui/material/Box";
import { Breadcrumbs } from "../components/breadcrumbs/Breadcrumbs";

export const Layout = function () {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Breadcrumbs />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Box>
  );
};
