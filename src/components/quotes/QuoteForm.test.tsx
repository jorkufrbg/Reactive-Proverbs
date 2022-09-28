import React from "react";
import QuoteForm from "./QuoteForm";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

describe("QuoteForm", () => {
  test("add new quote instance and callback prop", async () => {
    const onAddQuoteMock = jest.fn();

    render(
      <MemoryRouter>
        <QuoteForm onAddQuote={onAddQuoteMock} isLoading={undefined} />
      </MemoryRouter>
    );

    const authorInput = screen.getByLabelText("Author");
    const textInput = screen.getByLabelText("Text");
    const submit = screen.getByRole("button");

    fireEvent.change(authorInput, { target: { value: "Dummy User" } });
    fireEvent.change(textInput, { target: { value: "Did I forget my keys?" } });
    fireEvent.click(submit);

    expect(onAddQuoteMock).toHaveBeenCalledWith({
      author: "Dummy User",
      text: "Did I forget my keys?",
    });
  });
});
