import "./App.css";
import { ProductCard } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/products/:productId"> </Route>
        <Route path="/categories/:categoryId"></Route>
        <Route path="/">
          <ProductCard
            productDetails={{
              name: "Persikkapizza",
              normalPrice: 4.99,
              currentPrice: 3.99,
              description: "Herkullisin pizza ikinä!",
              nutrients: ["energia: 376kcal", "suola: 2g"],
              stock: 25,
              manufacturer: { name: "Tohtori Persikka" },
              categories: [
                {
                  name: "Pizzat",
                  color: "#F5C6AA",
                  textColor: "white",
                  description: "Pizza on paras herkku.",
                },
              ],
            }}
          />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
