import { ResultField } from './ResultField';
import { pick } from '../utils/roll';
import {
  fixerRoles, fixerAppearances,
  gunsForHireNames, gunsForHireDescriptions,
  hackerNames, hackerDescriptions,
  gangAdj1, gangNoun, gangType, gangActivity,
  firstImpressions, tattooWhat, tattooStyle, tattooWhere,
  vices, viceLevels
} from '../data/tables';

function npcExtras() {
  return {
    impression: pick(firstImpressions),
    tattoo: `${pick(tattooWhat)}, ${pick(tattooStyle)}, on ${pick(tattooWhere)}`,
    vice: `${pick(vices)} — ${pick(viceLevels)}`,
  };
}

export function generateNpcData() {
  const idx = Math.floor(Math.random() * fixerRoles.length);
  const fixer = {
    type: 'Fixer',
    who: `${fixerRoles[idx]}: ${fixerAppearances[idx]}`,
    ...npcExtras(),
  };

  const roll = Math.floor(Math.random() * 3);
  let wildcard;
  if (roll === 0) {
    const i = Math.floor(Math.random() * hackerNames.length);
    wildcard = { type: 'Hacker', who: `${hackerNames[i]}: ${hackerDescriptions[i]}`, ...npcExtras() };
  } else if (roll === 1) {
    const i = Math.floor(Math.random() * gunsForHireNames.length);
    wildcard = { type: 'Gun For Hire', who: `${gunsForHireNames[i]}: ${gunsForHireDescriptions[i]}`, ...npcExtras() };
  } else {
    wildcard = {
      type: 'Gang',
      who: `${pick(gangAdj1)} ${pick(gangNoun)} (${pick(gangType)}): ${pick(gangActivity)}`,
      ...npcExtras(),
    };
  }

  return { fixer, wildcard };
}

function NpcCard({ npc }) {
  return (
    <div>
      <div className="text-amber-400 text-xs uppercase tracking-widest mb-2 font-bold">{npc.type}</div>
      <ResultField label="Who" value={npc.who} />
      <ResultField label="First Impression" value={npc.impression} />
      <ResultField label="Tattoo" value={npc.tattoo} />
      <ResultField label="Vice" value={npc.vice} />
    </div>
  );
}

export function NpcPanel({ npcs, onRegenerate }) {
  return (
    <section className="bg-stone-800 border border-stone-600 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-amber-300 uppercase tracking-widest text-sm font-bold">The NPCs</h2>
        <button onClick={onRegenerate} className="text-stone-400 hover:text-amber-300 text-xl leading-none" title="Regenerate">↺</button>
      </div>
      <NpcCard npc={npcs.fixer} />
      <div className="border-t border-stone-600 my-4" />
      <NpcCard npc={npcs.wildcard} />
    </section>
  );
}
