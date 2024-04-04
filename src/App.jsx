import "./App.css";
import Box from "@mui/material/Box";
import { Header } from './components/Header';

import { MainRouter } from "./router";

function App() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "absolute",
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
