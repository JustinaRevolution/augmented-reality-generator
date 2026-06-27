import { useState } from 'react';
import { generateJobData, JobPanel } from './components/JobPanel';
import { generateCityData, CityPanel } from './components/CityPanel';
import { generateNpcData, NpcPanel } from './components/NpcPanel';

export default function App() {
  const [job, setJob] = useState(() => generateJobData());
  const [city, setCity] = useState(() => generateCityData());
  const [npcs, setNpcs] = useState(() => generateNpcData());

  function generateAll() {
    setJob(generateJobData());
    setCity(generateCityData());
    setNpcs(generateNpcData());
  }

  return (
    <div className="min-h-screen bg-amber-950 text-amber-100">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-amber-300 uppercase tracking-widest mb-1">
            Augmented Reality
          </h1>
          <p className="text-stone-400 text-sm tracking-wider">Cyberpunk Run Generator</p>
        </header>

        <div className="mb-6 text-center">
          <button
            onClick={generateAll}
            className="bg-amber-400 hover:bg-amber-300 text-stone-900 font-bold uppercase tracking-widest px-8 py-3 rounded text-sm transition-colors"
          >
            Generate Run
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <JobPanel job={job} onRegenerate={() => setJob(generateJobData())} />
          <CityPanel city={city} onRegenerate={() => setCity(generateCityData())} />
          <NpcPanel npcs={npcs} onRegenerate={() => setNpcs(generateNpcData())} />
        </div>

        <footer className="text-center text-stone-500 text-xs mt-10">
          Based on <em>Augmented Reality</em> by Paul D Gallagher (Geist Hack Games, 2017). Fan project — not for sale.
        </footer>
      </div>
    </div>
  );
}
