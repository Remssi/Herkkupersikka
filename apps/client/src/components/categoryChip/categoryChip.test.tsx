import { render, screen, cleanup } from "@testing-library/react";
import { CategoryChip } from ".";

afterEach(() => {
  cleanup();
});

const testCategoryDetails = {
  name: "Pizzat",
  color: "#F5C6AA",
  textColor: "white",
  description: "Pizza on paras herkku.",
};

it("should have the background color as the color given as a prop", () => {
  render(<CategoryChip categoryDetails={testCategoryDetails} />);
  const chip = screen.getByText("Pizzat");
  expect(chip).toHaveStyle("backgroundColor: '#F5C6AA'");
});

// TODO: write test that all chips are visible on the screen (if possible?)
// TODO: write test for clicking the chip to navigate to category search page
