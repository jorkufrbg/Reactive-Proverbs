import React from "react";
import { waitFor, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import QuoteList from "./QuoteList";
import { MemoryRouter } from "react-router-dom";

describe("QuotesList Component", () => {
  test("renders the Button element and Quotes List Items", () => {
    //Arrange
    const route = "/quotes";
    const loadedQuotes = [
      { id: "q1", author: "User 1", text: "Learning React is fun!" },
      { id: "q2", author: "User 2", text: "Learning Jest is great!" },
    ];

    render(
      <MemoryRouter initialEntries={[route]}>
        <QuoteList quotes={loadedQuotes} />
      </MemoryRouter>
    );

    //Act
    const sortingButton = screen.getByRole("button");

    //Assert
    expect(sortingButton).toBeInTheDocument();
  });

  test("is in Ascending order", async () => {
    //Arrange
    const route = "/quotes";
    const loadedQuotes = [
      { id: "q1", author: "User 1", text: "Learning React is fun!" },
      { id: "q2", author: "User 2", text: "Learning Jest is great!" },
    ];

    render(
      <MemoryRouter initialEntries={[route]}>
        <QuoteList quotes={loadedQuotes} />
      </MemoryRouter>
    );

    //Act
    const sortingButton = screen.getByRole("button");

    //Assert
    expect(sortingButton).toHaveTextContent("Sort Ascending", { exact: false });
  });

  test("is in Descending order", async () => {
    //Arrange
    const route = "/quotes";
    const loadedQuotes = [
      { id: "q1", author: "User 1", text: "Learning React is fun!" },
      { id: "q2", author: "User 2", text: "Learning Jest is great!" },
    ];

    render(
      <MemoryRouter initialEntries={[route]}>
        <QuoteList quotes={loadedQuotes} />
      </MemoryRouter>
    );

    //Act
    const sortingButton = screen.getByRole("button");
    userEvent.click(sortingButton);

    //Assert
    await waitFor(() => {
      const sortingButtonChanged = screen.getByRole("button");
      expect(sortingButtonChanged).toHaveTextContent("Sort Descending", {
        exact: false,
      });
    });
  });
});
