import React from "react";
import { render, screen } from "@testing-library/react";
import CommentsList from "./CommentsList";

describe("CommentsList Component", () => {
  test("renders the coments list items", () => {
    const loadedComments = [
      { id: "q1", text: "Learning React is fun!" },
      { id: "q2", text: "Learning Jest is great!" },
    ];

    render(<CommentsList comments={loadedComments} />);

    const commentItem = screen.getAllByText("Learning", { exact: false });

    expect(commentItem).toBeTruthy();
  });
});
