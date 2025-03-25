import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../components/SearchBar"

describe("SearchBar Component", () => {
  test("renders SearchBar correctly", () => {
    render(<SearchBar value="" onChange={() => {}} onSearch={() => {}} />);
    
    // Check if input field is present
    const inputElement = screen.getByPlaceholderText(/search/i);
    expect(inputElement).toBeInTheDocument();

    // Check if search icon is present
    const searchIcon = screen.getByTestId("SearchIcon");
    expect(searchIcon).toBeInTheDocument();
  });

  test("calls onChange and onSearch when typing", () => {
    const mockOnChange = jest.fn();
    const mockOnSearch = jest.fn();

    render(<SearchBar value="" onChange={mockOnChange} onSearch={mockOnSearch} />);

    const inputElement = screen.getByPlaceholderText(/search/i);

    // Simulate typing
    fireEvent.change(inputElement, { target: { value: "bug report" } });

    // Expect onChange and onSearch to be called with the new value
    expect(mockOnChange).toHaveBeenCalledWith("bug report");
    expect(mockOnSearch).toHaveBeenCalledWith("bug report");
  });

  test("clears input when clear button is clicked", () => {
    const mockOnChange = jest.fn();
    const mockOnSearch = jest.fn();

    render(<SearchBar value="bug report" onChange={mockOnChange} onSearch={mockOnSearch} />);

    // Check if the clear button appears
    const clearButton = screen.getByRole("button");
    expect(clearButton).toBeInTheDocument();

    // Simulate clear button click
    fireEvent.click(clearButton);

    // Expect onChange and onSearch to be triggered with an empty string
    expect(mockOnChange).toHaveBeenCalledWith("");
    expect(mockOnSearch).toHaveBeenCalledWith("");
  });

  test("input is disabled when the disabled prop is true", () => {
    render(<SearchBar value="" disabled={true} onChange={() => {}} onSearch={() => {}} />);
    
    const inputElement = screen.getByPlaceholderText(/search/i);
    expect(inputElement).toBeDisabled();
  });
});
