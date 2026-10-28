import { useEffect, useRef, useState } from "react";
import { Car } from "./Car";

type Geo = { d: string; w: number; h: number; stations: { x: number; y: number; id: string }[] };

/**
 * A road that winds down the left lane of the journey wrapper, passing through
 * every [data-station] marker. A car follows the road based on scroll position
 * and lingers briefly at each station.
 */
export function Road({ onStation }: { onStation?: (id: string) => void }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const [geo, setGeo] = useState<Geo | null>(null);
  const [active, setActive] = useState<string>("");

  // Build path geometry from station positions
  useEffect(() => {
    const wrap = wrapRef.current?.parentElement;
    if (!wrap) return;
    const build = () => {
      const w = wrapRef.current!.clientWidth;
      const h = wrap.scrollHeight;
      const top = wrap.getBoundingClientRect().top + window.scrollY;
      const cx = w / 2;
      const amp = w * 0.36;
      const stations = Array.from(wrap.querySelectorAll<HTMLElement>("[data-station]")).map((el) => {
        const r = el.getBoundingClientRect();
        return { id: el.dataset["station"]!, x: cx, y: r.top + window.scrollY - top + r.height / 2 };
      });
      const pts = [{ x: cx, y: 0, id: "start" }, ...stations, { x: cx, y: h, id: "end" }];
      let d = `M ${cx} 0`;
      for (let i = 1; i < pts.length; i++) {
        const a = pts[i - 1]!, b = pts[i]!;
        const dy = b.y - a.y;
        const s = i % 2 ? 1 : -1;
        d += ` C ${cx + s * amp} ${a.y + dy * 0.3}, ${cx - s * amp} ${a.y + dy * 0.7}, ${b.x} ${b.y}`;
      }
      setGeo({ d, w, h, stations });
    };
    build();
    const ro = new ResizeObserver(build);
    ro.observe(wrap);
    window.addEventListener("resize", build);
    return () => { ro.disconnect(); window.removeEventListener("resize", build); };
  }, []);

  // Drive the car
  useEffect(() => {
    if (!geo || !pathRef.current || !carRef.current) return;
    const path = pathRef.current;
    const len = path.getTotalLength();
    // lookup table: y -> length
    const N = 600;
    const table: { l: number; y: number }[] = [];
    for (let i = 0; i <= N; i++) { const l = (len * i) / N; table.push({ l, y: path.getPointAtLength(l).y }); }
    const lengthAtY = (y: number) => {
      let lo = 0, hi = N;
      while (lo < hi) { const m = (lo + hi) >> 1; if (table[m]!.y < y) lo = m + 1; else hi = m; }
      return table[lo]!.l;
    };
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wrap = wrapRef.current!.parentElement!;
    let cur = -1, raf = 0, last = "";
    const tick = () => {
      const top = wrap.getBoundingClientRect().top;
      let y = -top + window.innerHeight * 0.55;
      y = Math.max(8, Math.min(geo.h - 8, y));
      // linger at stations
      let near = "";
      for (const s of geo.stations) {
        const dist = y - s.y;
        const zone = 140;
        if (Math.abs(dist) < zone) { y = s.y + Math.sign(dist) * (Math.abs(dist) ** 2) / zone; near = s.id; }
      }
      const target = lengthAtY(y);
      cur = cur < 0 || reduce ? target : cur + (target - cur) * 0.12;
      const p = path.getPointAtLength(cur);
      const q = path.getPointAtLength(Math.min(len, cur + 2));
      const ang = (Math.atan2(q.y - p.y, q.x - p.x) * 180) / Math.PI - 90;
      carRef.current!.style.transform = `translate(${p.x}px, ${p.y}px) translate(-50%, -50%) rotate(${ang}deg)`;
      if (near !== last) { last = near; setActive(near); if (near) onStation?.(near); }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [geo, onStation]);

  return (
    <div ref={wrapRef} aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-36">
      {geo && (
        <svg width={geo.w} height={geo.h} className="absolute inset-0 overflow-visible">
          <path d={geo.d} fill="none" className="stroke-background" strokeWidth={geo.w > 80 ? 34 : 20} strokeLinecap="round" />
          <path ref={pathRef} d={geo.d} fill="none" className="stroke-asphalt" strokeWidth={geo.w > 80 ? 28 : 16} strokeLinecap="round" />
          <path d={geo.d} fill="none" className="stroke-marking" strokeWidth={1.5} strokeDasharray="10 14" />
          {geo.stations.map((s) => (
            <g key={s.id} transform={`translate(${s.x} ${s.y})`}>
              <circle r={geo.w > 80 ? 20 : 13} className={active === s.id ? "fill-primary/20 stroke-primary" : "fill-background stroke-marking"} strokeWidth={2} style={{ transition: "all .5s" }} />
              <circle r={4} className={active === s.id ? "fill-primary" : "fill-muted-foreground"} style={{ transition: "all .5s" }} />
            </g>
          ))}
        </svg>
      )}
      <div ref={carRef} className="absolute left-0 top-0 z-10 w-5 md:w-8 will-change-transform">
        <Car />
      </div>
    </div>
  );
}
