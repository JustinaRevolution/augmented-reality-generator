import { render, screen, fireEvent } from '@testing-library/react';
import { CityPanel, generateCityData } from './CityPanel';

describe('generateCityData', () => {
  it('returns all required fields', () => {
    const city = generateCityData();
    ['smell', 'sound', 'sight', 'road', 'screen', 'people'].forEach(key => {
      expect(typeof city[key]).toBe('string');
      expect(city[key].length).toBeGreaterThan(0);
    });
  });
});

describe('CityPanel', () => {
  it('renders all section labels', () => {
    render(<CityPanel city={generateCityData()} onRegenerate={() => {}} />);
    expect(screen.getByText('The City')).toBeInTheDocument();
    expect(screen.getByText('Smell')).toBeInTheDocument();
    expect(screen.getByText('Sound')).toBeInTheDocument();
    expect(screen.getByText('Sight')).toBeInTheDocument();
    expect(screen.getByText('On The Road')).toBeInTheDocument();
    expect(screen.getByText('Big Screen')).toBeInTheDocument();
    expect(screen.getByText('What People Do')).toBeInTheDocument();
  });

  it('calls onRegenerate when ↺ is clicked', () => {
    const fn = vi.fn();
    render(<CityPanel city={generateCityData()} onRegenerate={fn} />);
    fireEvent.click(screen.getByTitle('Regenerate'));
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
