import React from "react";
import { render, screen } from "@testing-library/react";
import ArticleCard from "./ArticleCard";
import { Article } from "../../../core/models/Article";

jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
}));

const mockArticle: Article = {
  title: "Test Article",
  urlToImage: "test.jpg",
  publishedAt: "2023-01-01",
  author: "Test Author",
  description: "Test Description",
  content: "Test Content",
  url: "http://test.com",
  source: { name: "Test Source" },
};

describe("ArticleCard", () => {
  it("renders article data", () => {
    render(<ArticleCard article={mockArticle} />);
    expect(screen.getByText("Test Article")).toBeInTheDocument();
  });
});
