import { render, screen, cleanup } from "@testing-library/react";
import { ProductCard } from ".";

afterEach(() => {
  cleanup();
});

const testProductDetails = {
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
};

it("should have line-through on normal price when on sale", () => {
  render(<ProductCard productDetails={testProductDetails} />);
  const normalPrice = screen.getByText(/4.99/i);
  expect(normalPrice).toHaveStyle("text-decoration: line-through");
});

// TODO: write test for navigating to product page after click
// TODO: write test for navigating to category page after click
// TODO: write test for adding the product to cart
// TODO: write test for checking the color of add to cart button
