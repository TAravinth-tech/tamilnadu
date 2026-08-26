import { useEffect } from 'react';
import { BadgeCheck, X } from 'lucide-react';

export function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  useEffect(() => { const timer = setTimeout(onClose, 2600); return () => clearTimeout(timer); }, [onClose]);
  return <div className="toast"><BadgeCheck size={19} /><span>{message}</span><button onClick={onClose}><X size={15} /></button></div>;
}
