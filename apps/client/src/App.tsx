import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Main } from "./pages/main";
import { Footer } from "./components";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/products/:productId"></Route>
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
