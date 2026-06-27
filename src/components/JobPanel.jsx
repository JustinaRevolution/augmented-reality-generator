import { ResultField } from './ResultField';
import { pick } from '../utils/roll';
import {
  mrJohnsonClients, mrJohnsonWants, mrJohnsonPeopleActions, mrJohnsonPeopleTargets,
  mrJohnsonThingActions, mrJohnsonThingTargets, locations,
  conflictGroups, conflictSources, conflictOpposing, areaEvents
} from '../data/tables';

export function generateJobData() {
  const client = pick(mrJohnsonClients);
  const want = pick(mrJohnsonWants);
  const usePeople = Math.random() < 0.5;
  const action = usePeople ? pick(mrJohnsonPeopleActions) : pick(mrJohnsonThingActions);
  const target = usePeople ? pick(mrJohnsonPeopleTargets) : pick(mrJohnsonThingTargets);
  const group1 = pick(conflictGroups);
  const source = pick(conflictSources);
  const group2 = pick(conflictOpposing);
  const ev = pick(areaEvents);
  return {
    client,
    objective: `${want} ${action}: ${target}`,
    location: pick(locations),
    conflict: `${group1} vs ${group2} — ${source}`,
    areaEvent: `${ev.event} → ${ev.consequence}`,
  };
}

export function JobPanel({ job, onRegenerate }) {
  return (
    <section className="bg-stone-800 border border-stone-600 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-amber-300 uppercase tracking-widest text-sm font-bold">The Job</h2>
        <button onClick={onRegenerate} className="text-stone-400 hover:text-amber-300 text-xl leading-none" title="Regenerate">↺</button>
      </div>
      <ResultField label="Mr Johnson" value={job.client} />
      <ResultField label="Objective" value={job.objective} />
      <ResultField label="Location" value={job.location} />
      <ResultField label="Local Conflict" value={job.conflict} />
      <ResultField label="Area Event" value={job.areaEvent} />
    </section>
  );
}
