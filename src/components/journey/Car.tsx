/** Top-down miniature sports car, nose pointing down (direction of travel). */
export function Car() {
  return (
    <svg viewBox="0 0 40 72" className="block h-auto w-full drop-shadow-[0_6px_6px_oklch(0_0_0/0.6)]">
      {/* wheels */}
      <g className="fill-background">
        <rect x="1" y="12" width="7" height="14" rx="2.5" />
        <rect x="32" y="12" width="7" height="14" rx="2.5" />
        <rect x="1" y="48" width="7" height="14" rx="2.5" />
        <rect x="32" y="48" width="7" height="14" rx="2.5" />
      </g>
      {/* body */}
      <path className="fill-primary" d="M20 2C11 2 6 7 5 16L4 52c0 10 6 18 16 18s16-8 16-18l-1-36C34 7 29 2 20 2Z" />
      {/* cabin glass */}
      <path className="fill-background/80" d="M10 24c3-3 17-3 20 0l-1 18c-3 3-15 3-18 0Z" />
      <path className="fill-foreground/25" d="M12 26c3-1.5 9-1.5 12 0l-1 4c-3-1-7-1-10 0Z" />
      {/* spoiler (rear, top) */}
      <rect x="7" y="4" width="26" height="3" rx="1.5" className="fill-background/50" />
      {/* headlights (front, bottom) */}
      <ellipse cx="11" cy="66" rx="3" ry="1.6" className="fill-foreground" />
      <ellipse cx="29" cy="66" rx="3" ry="1.6" className="fill-foreground" />
      <path className="fill-foreground/10" d="M6 68 L-4 96 L44 96 L34 68Z" />
    </svg>
  );
}
