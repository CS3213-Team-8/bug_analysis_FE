import { render, screen } from '@testing-library/react';
import MyIcon from '../components/icon';  
import { Box } from '@mui/material';

describe('MyIcon Component', () => {
  test('renders the "done" icon correctly', () => {
    render(<MyIcon variant="done" />);
    
    // Check if CheckCircleOutlineIcon is rendered
    const icon = screen.getByTestId('CheckCircleOutlineIcon');
    expect(icon).toBeInTheDocument();

    // Check if it has the correct styles
    expect(icon).toHaveStyle('color: #A078FF');
    expect(icon).toHaveStyle('font-size: 30px');
  });

  test('renders the "pending" icon correctly', () => {
    render(<MyIcon variant="pending" />);
    
    // Check if AdjustOutlinedIcon is rendered
    const icon = screen.getByTestId('AdjustOutlinedIcon');
    expect(icon).toBeInTheDocument();

    // Check if it has the correct styles
    expect(icon).toHaveStyle('color: #A0E7E5');
    expect(icon).toHaveStyle('font-size: 30px');
  });

  test('renders the "edit" icon correctly', () => {
    render(<MyIcon variant="edit" />);
    
    // Check if EditIcon is rendered
    const icon = screen.getByTestId('EditIcon');
    expect(icon).toBeInTheDocument();

    // Check if it has the correct styles
    expect(icon).toHaveStyle('color: #FFD166');
    expect(icon).toHaveStyle('font-size: 24px');
  });

  test('renders the "delete" icon correctly', () => {
    render(<MyIcon variant="delete" />);
    
    // Check if DeleteIcon is rendered
    const icon = screen.getByTestId('DeleteIcon');
    expect(icon).toBeInTheDocument();

    // Check if it has the correct styles
    expect(icon).toHaveStyle('color: #EF476F');
    expect(icon).toHaveStyle('font-size: 24px');
  });

  test('renders the "logo" variant correctly', () => {
    render(<MyIcon variant="logo" />);
    
    // Check if BugReportIcon is rendered
    const icon = screen.getByTestId('BugReportIcon');
    expect(icon).toBeInTheDocument();

    // Check if the font size of the BugReportIcon is correct
    expect(icon).toHaveStyle('font-size: 40px');
    expect(icon).toHaveStyle('color: white');
  });

  test('renders the "logo" variant with additional props correctly', () => {
    render(<MyIcon variant="logo" data-testid="my-logo" />);
    
    // Check if the component has the additional props passed through
    const icon = screen.getByTestId('my-logo');
    expect(icon).toBeInTheDocument();
  });

  test('renders nothing if no variant is passed', () => {
    render(<MyIcon />);
    
    // No icon should be rendered
    expect(screen.queryByRole('img')).toBeNull();
  });
});
