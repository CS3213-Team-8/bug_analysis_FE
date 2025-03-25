import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import SelectionField from '../components/selectionField';

describe('SelectionField Component', () => {
  // Mock props for testing
  const mockSelectionArray = ['value1', 'value2', 'value3'];
  const mockDisplayArray = ['Label 1', 'Label 2', 'Label 3'];
  const mockOnChange = jest.fn();

  test("opens dropdown when clicked", () => {
    render(
      <SelectionField
        label="Select an option"
        selectionArray={mockSelectionArray}
        displayArray={mockDisplayArray}
        value=""
        onChange={() => {}}
      />
    );

    const selectElement = screen.getByRole("combobox");

    // Click to open dropdown
    fireEvent.mouseDown(selectElement);

    // Ensure options are displayed
    expect(screen.getByText("Label 1")).toBeInTheDocument();
    expect(screen.getByText("Label 2")).toBeInTheDocument();
    expect(screen.getByText("Label 3")).toBeInTheDocument();
  });


  // Test onChange functionality
  test('calls onChange when selection changes', () => {
    render(
      <SelectionField 
        selectionArray={mockSelectionArray}
        displayArray={mockDisplayArray}
        value=""
        onChange={mockOnChange}
      />
    );

    // Open the select dropdown
    const select = screen.getByRole('combobox');
    fireEvent.mouseDown(select);

    // Select the second item
    const secondOption = screen.getByText('Label 2');
    fireEvent.click(secondOption);

    // Verify onChange was called
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  // Test invalid input handling
  test('returns null when display and selection arrays have different lengths', () => {
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    
    const { container } = render(
      <SelectionField 
        selectionArray={mockSelectionArray}
        displayArray={['Label 1', 'Label 2']} // Shorter array
        value=""
        onChange={mockOnChange}
      />
    );

    // Check console warning
    expect(consoleSpy).toHaveBeenCalledWith(
      'SelectionField: displayArray and selectionArray must have the same length'
    );

    // Check that nothing is rendered
    expect(container.firstChild).toBeNull();

    // Restore console.warn
    consoleSpy.mockRestore();
  });

  test("warns when selectionArray and displayArray lengths mismatch", () => {
    const consoleWarnMock = jest.spyOn(console, "warn").mockImplementation(() => {});
    
    render(
      <SelectionField
        label="Select an option"
        selectionArray={["option1", "option2"]}
        displayArray={["Option 1"]}
        value=""
        onChange={() => {}}
      />
    );

    expect(consoleWarnMock).toHaveBeenCalledWith(
      "SelectionField: displayArray and selectionArray must have the same length"
    );

    consoleWarnMock.mockRestore();
  });
  
  // Styling and accessibility checks
  test('has correct aria attributes and styling', () => {
    render(
      <SelectionField 
        selectionArray={mockSelectionArray}
        displayArray={mockDisplayArray}
        value=""
        onChange={mockOnChange}
      />
    );

    const select = screen.getByRole('combobox');
    
    // Check basic accessibility
    expect(select).toHaveAttribute('aria-haspopup', 'listbox');
    expect(select).toHaveAttribute('aria-expanded', 'false');
  });
});