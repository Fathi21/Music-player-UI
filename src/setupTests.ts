import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LikeButton from "./LikeButton";

jest.mock("../Utilities/ApiCalls/LikeASongById");
jest.mock("../Utilities/ApiCalls/GetLikesBySongId");
jest.mock("../components/UserDetails", () => ({
  __esModule: true,
  default: () => ({ userId: "123" }),
}));

describe("LikeButton component", () => {
  it("should render with the black heart icon", () => {
    render(<LikeButton songId="1" />);
    const heartIcon = screen.getByTestId("heart-icon");
    expect(heartIcon).toHaveStyle({ color: "black" });
  });

  it("should toggle the heart icon color on click", async () => {
    render(<LikeButton songId="1" />);
    const heartIcon = screen.getByTestId("heart-icon");
    fireEvent.click(heartIcon);

    await waitFor(() => {
      expect(heartIcon).toHaveStyle({ color: "red" });
    });

    fireEvent.click(heartIcon);

    await waitFor(() => {
      expect(heartIcon).toHaveStyle({ color: "black" });
    });
  });
});
