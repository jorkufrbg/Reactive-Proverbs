import React from "react";
import QuoteForm from "./QuoteForm";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

describe("QuoteForm", () => {
  test("add new quote instance", () => {
    render(
      <MemoryRouter>
        <QuoteForm />
      </MemoryRouter>
    );

    const authorInput = screen.getByLabelText("Author");
    const textInput = screen.getByLabelText("Text");
    const submit = screen.getByRole("button");

    userEvent.type(authorInput, "Dummy User");
    userEvent.type(textInput, "Did I forget my keys?");
    userEvent.click(submit);
  });
});
