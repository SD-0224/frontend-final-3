import "./App.css";
import Box from "@mui/material/Box";
import { Layout } from "./layout/Layout";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Layout />
    </Box>
  );
}

export default App;
