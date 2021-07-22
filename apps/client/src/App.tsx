import "./App.css";
import { ProductCard } from "./components";

const App = () => {
  return (
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
  );
};

export default App;
