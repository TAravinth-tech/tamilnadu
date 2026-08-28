import { ArrowRight, Facebook, Instagram, Send } from 'lucide-react';
import { Logo } from './Logo';

import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-bar">
        <span>© 2026 TamilnaduGlobals</span>
        <Heart size={13} className="site-footer-heart" />
        <span>WhatsApp: 93609 64448</span>
      </div>
    </footer>
  );
}