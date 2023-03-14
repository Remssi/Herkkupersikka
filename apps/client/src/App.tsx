import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main } from "./pages/main";
import { Product } from "./pages/product";
import { Footer, Header } from "./components";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";

const theme = createTheme();

const App = () => {
  return (
    <Router>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Header />

          <Routes>
            <Route path="/products/:productId" element={<Product />}></Route>

            <Route path="/categories/:categoryId"></Route>

            <Route path="/" element={<Main />}></Route>
          </Routes>

          <Footer />
        </ThemeProvider>
      </StyledEngineProvider>
    </Router>
  );
};

export default App;
