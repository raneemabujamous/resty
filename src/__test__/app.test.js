import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";
test("should ", async () => {
  render(<App />);
  const method = await waitFor(() => screen.getByTestId("Method"));
  expect(method).toHaveTextContent("Request Method:");
});
test("should ", async () => {
  render(<App />);

  const click = screen.getByTestId("click");
  expect(click).toBeInTheDocument();
});
