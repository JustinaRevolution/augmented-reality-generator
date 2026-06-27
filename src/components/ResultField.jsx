export function ResultField({ label, value }) {
  return (
    <div className="mb-3">
      <div className="text-amber-300 uppercase tracking-wider text-xs mb-1">{label}</div>
      <div className="bg-stone-700 rounded p-2 text-amber-100 text-sm leading-relaxed">{value}</div>
    </div>
  );
}
