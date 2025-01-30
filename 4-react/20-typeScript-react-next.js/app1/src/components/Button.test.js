import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("ボタンが表示される", () => {
  render(<Button>Click</Button>);
  expect(screen.getByText("Click")).toBeInTheDocument();
});