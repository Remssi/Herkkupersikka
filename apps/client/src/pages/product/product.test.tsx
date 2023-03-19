import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Product } from ".";
import { testFetchedProduct } from "../../testData";
import { renderWithProviders } from "../../utils/test-utils";

export const handlers = [
  rest.get("http://localhost:3001/api/products/10", (req, res, ctx) => {
    return res(ctx.json(testFetchedProduct), ctx.delay(150));
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => server.close());

it("should have lined out normal price when current price is lower", async () => {
  renderWithProviders(
    <MemoryRouter initialEntries={["/products/10"]}>
      <Routes>
        <Route path="/products/:productId" element={<Product />} />
      </Routes>
    </MemoryRouter>
  );
  const stockText = await screen.findByText(/2.95/);
  expect(stockText).toBeInTheDocument();
  expect(stockText).toHaveAttribute("text-decoration", "line-through");
});
/*
it("should show 'out of stock' text when stock is 0", () => {
  renderWithProviders(
    <BrowserRouter>
      <Routes>
        <Route path="/products/10" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
  const stockText = screen.getByTestId("out-of-stock-text");
  expect(stockText.innerText).toBe("out of stock.");
});

it("should see similar product that is initially out of screen", async () => {
  renderWithProviders(
    <BrowserRouter>
      <Routes>
        <Route path="/products/10" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
  const nextProductsButton = screen.getByTestId("next-similar-products");
  const user = userEvent.setup();
  await user.click(nextProductsButton);
  const similarProduct = screen.getByText("Päärynäpizza");
  expect(similarProduct).toBeVisible();
});

it("should navigate to manufacturer page", async () => {
  renderWithProviders(
    <BrowserRouter>
      <Routes>
        <Route path="/products/10" element={<Product />} />
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
  renderWithProviders(
    <BrowserRouter>
      <Routes>
        <Route path="/products/10" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
  const nextImageButton = screen.getByTestId("next-image");
  const user = userEvent.setup();
  await user.click(nextImageButton);
  const image = screen.getByAltText("Persikkapizza-2");
  expect(image).toBeVisible();
});
*/
