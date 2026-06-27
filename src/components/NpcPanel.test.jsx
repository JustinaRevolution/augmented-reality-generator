import { render, screen, fireEvent } from '@testing-library/react';
import { NpcPanel, generateNpcData } from './NpcPanel';

describe('generateNpcData', () => {
  it('returns fixer and wildcard with required fields', () => {
    const { fixer, wildcard } = generateNpcData();
    ['type', 'who', 'impression', 'tattoo', 'vice'].forEach(key => {
      expect(typeof fixer[key]).toBe('string');
      expect(typeof wildcard[key]).toBe('string');
    });
  });

  it('fixer is always type Fixer', () => {
    for (let i = 0; i < 10; i++) {
      expect(generateNpcData().fixer.type).toBe('Fixer');
    }
  });

  it('wildcard type varies across calls', () => {
    const types = new Set(Array.from({ length: 60 }, () => generateNpcData().wildcard.type));
    expect(types.size).toBeGreaterThan(1);
    types.forEach(t => expect(['Hacker', 'Gun For Hire', 'Gang']).toContain(t));
  });
});

describe('NpcPanel', () => {
  it('renders The NPCs heading', () => {
    render(<NpcPanel npcs={generateNpcData()} onRegenerate={() => {}} />);
    expect(screen.getByText('The NPCs')).toBeInTheDocument();
  });

  it('calls onRegenerate when ↺ is clicked', () => {
    const fn = vi.fn();
    render(<NpcPanel npcs={generateNpcData()} onRegenerate={fn} />);
    fireEvent.click(screen.getByTitle('Regenerate'));
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
