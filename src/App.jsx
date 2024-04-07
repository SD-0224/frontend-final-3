import "./App.css";
import Box from "@mui/material/Box";
import { Header } from './components/Header';
import { Footer } from "./components/footer";
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
      <Footer />
    </Box>
  );
}

export default App;
