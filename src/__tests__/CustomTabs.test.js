import { render, screen, fireEvent } from '@testing-library/react';
import CustomTabs from '../components/CustomTabs';  

describe('CustomTabs Component', () => {
  const mockOnTabChange = jest.fn();
  const tabs = [
    { label: 'Tab 1' },
    { label: 'Tab 2' },
    { label: 'Tab 3' }
  ];

  test('renders the correct number of tabs', () => {
    render(<CustomTabs tabs={tabs} selectedTab={0} onTabChange={mockOnTabChange} />);

    // Check if the correct number of tabs are rendered
    expect(screen.getAllByRole('tab')).toHaveLength(tabs.length);
  });

  test('displays the correct label for each tab', () => {
    render(<CustomTabs tabs={tabs} selectedTab={0} onTabChange={mockOnTabChange} />);

    tabs.forEach((tab, index) => {
      // Check if the tab label matches the label provided in the tab prop
      expect(screen.getByText(tab.label)).toBeInTheDocument();
    });
  });

  test('applies correct background color for selected tab', () => {
    render(<CustomTabs tabs={tabs} selectedTab={1} onTabChange={mockOnTabChange} />);

    // Check if the second tab has the selected color
    const selectedTab = screen.getAllByRole('tab')[1];
    expect(selectedTab).toHaveStyle('background-color: rgba(78, 157, 148, 0.7)');
  });

  test('calls onTabChange when a tab is clicked', () => {
    render(<CustomTabs tabs={tabs} selectedTab={0} onTabChange={mockOnTabChange} />);

    const secondTab = screen.getAllByRole('tab')[1];

    // Simulate a click event on the second tab
    fireEvent.click(secondTab);

    // Check if onTabChange was called with the correct index (1 in this case)
    expect(mockOnTabChange).toHaveBeenCalledWith(expect.any(Object), 1);
  });

  test('correctly handles hover effect on tabs', () => {
    render(<CustomTabs tabs={tabs} selectedTab={0} onTabChange={mockOnTabChange} />);

    const firstTab = screen.getAllByRole('tab')[0];

    // Fire a mouseover event to test hover state
    fireEvent.mouseOver(firstTab);

    // Check if the hover style is applied (i.e., the background color changes to a semi-transparent version)
    expect(firstTab).toHaveStyle('background-color: rgba(78, 157, 148, 0.7)');
  });
});
