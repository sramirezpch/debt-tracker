import React from "react";
import { render, screen } from "@testing-library/react";
import DebtTracker from "./DebtTracker";

test("renders learn react link", () => {
  render(<DebtTracker />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
