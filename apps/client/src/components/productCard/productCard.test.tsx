import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductCard } from ".";
import { testProductDetails } from "../../testData";

afterEach(() => {
  cleanup();
});

it("should have line-through on normal price when on sale", () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<ProductCard productDetails={testProductDetails} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
  const normalPrice = screen.getByText(/4.99/i);
  expect(normalPrice).toHaveStyle("text-decoration: line-through");
});

it("should have disabled add to cart button when stock is 0", () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<ProductCard productDetails={testProductDetails} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );

  const addToCartButton = screen.getByTitle("add-to-cart-button");
  expect(addToCartButton).toBeDisabled();
});

/*
it("should navigate to product page after clicking the image", async () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<ProductCard productDetails={testProductDetails} />}
        ></Route>
        <Route path="/products/:productId" element={<></>}></Route>
      </Routes>
    </BrowserRouter>
  );
  const imageLink = screen.getByTestId("card-image-action");
  const user = userEvent.setup();
  await user.click(imageLink);
  expect(window.location.pathname).toBe("/products/1");
});

it("should navigate to category page after clicking the chip", async () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<ProductCard productDetails={testProductDetails} />}
        ></Route>
        <Route path="/categories/:categoryId" element={<></>}></Route>
      </Routes>
    </BrowserRouter>
  );
  const categoryLink = screen.getByTestId("category-chip");
  const user = userEvent.setup();
  await user.click(categoryLink);
  expect(window.location.pathname).toBe("/categories/1");
});
*/
