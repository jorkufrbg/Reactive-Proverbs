import React from "react";
import NewCommentForm from "./NewCommentForm.js";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("NewCommentForm is rendered", () => {
  render(<NewCommentForm />);

  const newCommentTextarea = screen.getByRole("textbox");
  expect(newCommentTextarea).toBeTruthy();
});
