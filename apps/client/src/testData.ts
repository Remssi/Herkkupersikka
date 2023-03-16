import { Product } from "../../shared/types";

export const testProductDetails: Product = {
  id: "1",
  name: "Persikkapizza",
  normalPrice: 4.99,
  currentPrice: 3.99,
  description: "Herkullisin pizza ikinä!",
  nutrients: ["energia: 376kcal", "suola: 2g"],
  stock: 25,
  manufacturerId: 1,
  manufacturer: { id: 1, name: "Tohtori Persikka" },
  categoryIds: [1],
  categories: [
    {
      id: 1,
      name: "Pizzat",
      color: "#F5C6AA",
      textColor: "white",
      description: "Pizza on paras herkku.",
    },
  ],
};
