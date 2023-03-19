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

export const testFetchedProduct = {
  id: 10,
  name: "Herkkupersikka",
  normalPrice: 2.95,
  currentPrice: 1.99,
  description: "Maailman herkullisin persikka.",
  image: " ",
  nutrients: "100kcal/100g.",
  stock: 200,
  manufacturerId: 4,
  saleId: 3,
  categories: [
    {
      id: 16,
      name: "Fruits",
      color: "#6cb56b",
      description: "Sweet & sometimes sour",
    },
  ],
  manufacturer: {
    id: 4,
    name: "Jokapäivä Food Co",
  },
  sale: {
    id: 3,
    multiplier: 1,
    startDate: "2023-03-11T22:00:00.000Z",
    endDate: "2023-03-18T22:00:00.000Z",
  },
  categoryIds: [16],
};
