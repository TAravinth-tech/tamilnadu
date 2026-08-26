import { Globe2 } from 'lucide-react';

export function Logo() {
  return (
    <a
      href="/"
      className="brand"
      style={{ display: "inline-flex", alignItems: "center" }}
    >
      <span
        className="brand-mark"
        style={{
          width: 72,
          height: 72,
          borderRadius: "35%",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <img
          src="/src/images/logo.jpeg"
          alt="Tamil Nadu Global"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </span>
    </a>
  );
}