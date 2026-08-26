import { Minus, Plus } from 'lucide-react';

export function Quantity({ value, onChange }: { value: number; onChange: (value: number) => void }) {
  return (
    <div className="quantity">
      <button onClick={() => onChange(value - 1)}><Minus size={15} /></button>
      <span>{value}</span>
      <button onClick={() => onChange(value + 1)}><Plus size={15} /></button>
    </div>
  );
}
