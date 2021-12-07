import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";
test("should Request Method:", async () => {
  render(<App />);
  const method = await waitFor(() => screen.getByTestId("Method"));
  expect(method).toHaveTextContent("Request Method:");
});
test("should have button", async () => {
  render(<App />);

  const click = screen.getByTestId("click");
  expect(click).toBeInTheDocument();
});
test("should have form", () => {
  render(<App />);

  const form = screen.getByTestId("form");
  console.log(form);
  expect(form).toBeTruthy(); //check if it apper in screen
});

test("should have go inside button", () => {
  render(<App />);

  const click = screen.getByTestId("click");
  expect(click.innerHTML).toBe("GO!");
  fireEvent.click(click);
});
test("should have loading ", () => {
  render(<App />);

  const result = screen.getByTestId("RESULT");
  expect(result).toHaveTextContent("loading ... 💆");
});
