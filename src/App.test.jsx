import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders title and all three panels', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: 'Augmented Reality' })).toBeInTheDocument();
    expect(screen.getByText('The Job')).toBeInTheDocument();
    expect(screen.getByText('The City')).toBeInTheDocument();
    expect(screen.getByText('The NPCs')).toBeInTheDocument();
  });

  it('renders Generate Run button', () => {
    render(<App />);
    expect(screen.getByText('Generate Run')).toBeInTheDocument();
  });

  it('Generate Run button fires without error', () => {
    render(<App />);
    expect(() => fireEvent.click(screen.getByText('Generate Run'))).not.toThrow();
  });

  it('renders footer credit', () => {
    render(<App />);
    expect(screen.getByText(/Paul D Gallagher/)).toBeInTheDocument();
  });
});
