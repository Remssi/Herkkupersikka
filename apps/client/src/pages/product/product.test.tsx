import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Product } from ".";
import { testProductDetails } from "../../testData";

afterEach(() => {
  cleanup();
});

it("should show 'out of stock' text when stock is 0", () => {
  render(<Product />);
  const stockText = screen.getByTestId("out-of-stock-text");
  expect(stockText.innerText).toBe("out of stock.");
});

it("should see similar product that is initially out of screen", async () => {
  render(<Product />);
  const nextProductsButton = screen.getByTestId("next-similar-products");
  const user = userEvent.setup();
  await user.click(nextProductsButton);
  const similarProduct = screen.getByText("Päärynäpizza");
  expect(similarProduct).toBeVisible();
});

it("should navigate to manufacturer page", async () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Product />}></Route>{" "}
        <Route path="/manufacturers/:manufacturerId" element={<></>}></Route>
      </Routes>
    </BrowserRouter>
  );
  const manufacturerLink = screen.getByTestId("manufacturer-name");
  const user = userEvent.setup();
  await user.click(manufacturerLink);
  expect(window.location.pathname).toBe("/manufacturers/1");
});

it("should see product's image that is initially out of screen", async () => {
  render(<Product />);
  const nextImageButton = screen.getByTestId("next-image");
  const user = userEvent.setup();
  await user.click(nextImageButton);
  const image = screen.getByAltText("Persikkapizza-2");
  expect(image).toBeVisible();
});
