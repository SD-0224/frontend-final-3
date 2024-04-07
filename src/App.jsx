import "./App.css";
import Box from "@mui/material/Box";
import { Header } from './components/Header';
import { MainRouter } from "./router";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <main>
        <MainRouter />
      </main>
      {/* Footer goes here */}
    </Box>
  );
}

export default App;
