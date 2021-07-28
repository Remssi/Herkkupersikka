import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Main } from "./pages/main";
import { ContentWrapper, Footer, Header } from "./components";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/products/:productId">
          <ContentWrapper />
        </Route>
        <Route path="/categories/:categoryId"></Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
