import { render, screen } from '@testing-library/react';
import { ResultField } from './ResultField';

describe('ResultField', () => {
  it('renders label and value', () => {
    render(<ResultField label="Test Label" value="Test Value" />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByText('Test Value')).toBeInTheDocument();
  });
});
