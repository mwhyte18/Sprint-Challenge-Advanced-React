import React from "react";
import ReactDOM from "react-dom";
import Players from "./components/Players";
import Switch from "./components/Switch";
import App from "./App";
import { render, fireEvent, waitForElement } from "@testing-library/react";

test("Players are rendering", () => {
  const { getByTestId } = render(<Players />);
  getByTestId("player");
});
test("Switch are rendering", () => {
  const { getByTestId } = render(<Switch />);
  getByTestId("button");
});

test("There is a button", () => {
  const { getByTestId } = render(<Switch />);
  getByTestId("switch");
});
