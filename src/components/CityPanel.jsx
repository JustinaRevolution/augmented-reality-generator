import { ResultField } from './ResultField';
import { pick } from '../utils/roll';
import { smells, sounds, sights, bigScreens, onTheRoad, gigEconomy } from '../data/tables';

export function generateCityData() {
  const gig = pick(gigEconomy);
  return {
    smell: pick(smells),
    sound: pick(sounds),
    sight: pick(sights),
    road: pick(onTheRoad),
    screen: pick(bigScreens),
    people: `${gig.role}: ${gig.description}`,
  };
}

export function CityPanel({ city, onRegenerate }) {
  return (
    <section className="bg-stone-800 border border-stone-600 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-amber-300 uppercase tracking-widest text-sm font-bold">The City</h2>
        <button onClick={onRegenerate} className="text-stone-400 hover:text-amber-300 text-xl leading-none" title="Regenerate">↺</button>
      </div>
      <ResultField label="Smell" value={city.smell} />
      <ResultField label="Sound" value={city.sound} />
      <ResultField label="Sight" value={city.sight} />
      <ResultField label="On The Road" value={city.road} />
      <ResultField label="Big Screen" value={city.screen} />
      <ResultField label="What People Do" value={city.people} />
    </section>
  );
}
