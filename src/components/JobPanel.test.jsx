import { render, screen, fireEvent } from '@testing-library/react';
import { JobPanel, generateJobData } from './JobPanel';

describe('generateJobData', () => {
  it('returns all required fields as non-empty strings', () => {
    const job = generateJobData();
    expect(typeof job.client).toBe('string');
    expect(typeof job.objective).toBe('string');
    expect(typeof job.location).toBe('string');
    expect(typeof job.conflict).toBe('string');
    expect(typeof job.areaEvent).toBe('string');
    expect(job.client.length).toBeGreaterThan(0);
    expect(job.objective.length).toBeGreaterThan(0);
  });

  it('produces different results across calls', () => {
    const results = new Set(Array.from({ length: 20 }, () => generateJobData().client));
    expect(results.size).toBeGreaterThan(1);
  });
});

describe('JobPanel', () => {
  it('renders all section labels', () => {
    render(<JobPanel job={generateJobData()} onRegenerate={() => {}} />);
    expect(screen.getByText('The Job')).toBeInTheDocument();
    expect(screen.getByText('Mr Johnson')).toBeInTheDocument();
    expect(screen.getByText('Objective')).toBeInTheDocument();
    expect(screen.getByText('Location')).toBeInTheDocument();
    expect(screen.getByText('Local Conflict')).toBeInTheDocument();
    expect(screen.getByText('Area Event')).toBeInTheDocument();
  });

  it('calls onRegenerate when ↺ is clicked', () => {
    const onRegenerate = vi.fn();
    render(<JobPanel job={generateJobData()} onRegenerate={onRegenerate} />);
    fireEvent.click(screen.getByTitle('Regenerate'));
    expect(onRegenerate).toHaveBeenCalledTimes(1);
  });
});
