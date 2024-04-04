import "./App.css";
import Box from "@mui/material/Box";
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
      {/* Header goes here */}
      <main>
        <MainRouter />
      </main>
      {/* Footer goes here */}
    </Box>
  );
}

export default App;
