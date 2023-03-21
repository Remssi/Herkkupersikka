import { screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { MemoryRouter, Route, Routes, useParams } from "react-router-dom";
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
  expect(stockText).toHaveStyle("text-decoration: line-through");
});

it("should have add to cart button disabled when stock is 0", async () => {
  renderWithProviders(
    <MemoryRouter initialEntries={["/products/10"]}>
      <Routes>
        <Route path="/products/:productId" element={<Product />} />
      </Routes>
    </MemoryRouter>
  );

  const addToCartButton = await screen.findByTitle("add-to-cart-button");

  expect(addToCartButton).toBeDisabled();
});

const TestManufacturerPage = () => {
  const { manufacturerId } = useParams();

  return <>The Manufacturer Page {manufacturerId}</>;
};

it("should navigate to manufacturer page", async () => {
  renderWithProviders(
    <MemoryRouter initialEntries={["/products/10"]}>
      <Routes>
        <Route path="/products/:productId" element={<Product />} />
        <Route
          path="/manufacturers/:manufacturerId"
          element={<TestManufacturerPage />}
        ></Route>
      </Routes>
    </MemoryRouter>
  );

  const manufacturerLink = await screen.findByRole("manufacturer-link");
  const user = userEvent.setup();
  await user.click(manufacturerLink);
  expect(screen.getByText("The Manufacturer Page 4")).toBeInTheDocument();
});

/*
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
