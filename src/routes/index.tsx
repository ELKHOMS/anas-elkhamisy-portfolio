import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { ArrowDown, ArrowUp, Menu, X } from "lucide-react";
import hero from "@/assets/hero-road.jpg";
import { Road } from "@/components/journey/Road";
import { STATIONS, About, Skills, Projects, Certifications, Experience, Education, Contact } from "@/components/journey/Sections";
import { profile } from "@/content/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anas Elkhamisy — The Journey | Data Analyst Portfolio" },
      { name: "description", content: "An interactive road-trip portfolio of Anas Elkhamisy, aspiring data analyst and computer science student from Damietta, Egypt." },
      { property: "og:title", content: "Anas Elkhamisy — The Journey" },
      { property: "og:description", content: "Data, ideas & the journey between them. Explore projects, skills and milestones." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Nav({ active, progress }: { active: string; progress: number }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5">
          <a href="#top" className="font-display text-xl">A<span className="text-primary">.</span>E</a>
          <nav className="hidden items-center gap-1 lg:flex">
            {STATIONS.map((s) => (
              <a key={s.id} href={`#${s.id}`} className={`rounded px-3 py-1.5 text-sm transition-colors ${active === s.id ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>{s.label}</a>
            ))}
          </nav>
          <button className="lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu"><Menu className="h-5 w-5" /></button>
        </div>
        <div className="h-px bg-primary transition-[width] duration-150" style={{ width: `${progress * 100}%` }} />
      </header>
      {open && (
        <div className="fixed inset-0 z-50 bg-background p-6 animate-fade lg:hidden">
          <button className="ml-auto block" onClick={() => setOpen(false)} aria-label="Close menu"><X className="h-6 w-6" /></button>
          <ol className="mt-10 space-y-5">
            {STATIONS.map((s, i) => (
              <li key={s.id}><a href={`#${s.id}`} onClick={() => setOpen(false)} className="flex items-baseline gap-4 font-display text-4xl">
                <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>{s.label}</a></li>
            ))}
          </ol>
        </div>
      )}
      {/* route map */}
      <aside className="fixed right-5 top-1/2 z-30 hidden -translate-y-1/2 xl:block" aria-label="Route map">
        <ol className="relative space-y-4 border-r border-border pr-4">
          {STATIONS.map((s) => (
            <li key={s.id} className="text-right">
              <a href={`#${s.id}`} className={`group flex items-center justify-end gap-3 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors ${active === s.id ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                <span className={active === s.id ? "" : "opacity-0 transition-opacity group-hover:opacity-100"}>{s.name}</span>
                <span className={`absolute -right-[5px] h-2.5 w-2.5 rounded-full border-2 ${active === s.id ? "border-primary bg-primary" : "border-muted-foreground bg-background"}`} />
              </a>
            </li>
          ))}
        </ol>
      </aside>
      {progress > 0.08 && (
        <a href="#top" aria-label="Back to top" className="fixed bottom-5 right-5 z-30 flex h-11 w-11 items-center justify-center rounded-full border bg-card transition-colors hover:border-primary animate-fade">
          <ArrowUp className="h-4 w-4" />
        </a>
      )}
    </>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh items-end overflow-hidden">
      <img src={hero} alt="Miniature orange sports car on a winding road at dusk" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover object-[70%_center] animate-fade" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-32 md:pb-28">
        <div className="road-sign animate-rise" style={{ animationDelay: "0.1s" }}>
          <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {profile.availability}
        </div>
        <h1 className="mt-8 font-display text-6xl leading-[0.9] tracking-tight sm:text-8xl lg:text-[9.5rem] animate-rise" style={{ animationDelay: "0.2s" }}>
          <span className="relative block overflow-hidden">ANAS<span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-foreground/15 to-transparent animate-sweep" /></span>
          <span className="block text-primary">ELKHAMISY</span>
        </h1>
        <p className="mt-8 max-w-xl font-display text-3xl italic animate-rise" style={{ animationDelay: "0.45s" }}>{profile.headline}</p>
        <p className="mt-3 max-w-md text-muted-foreground animate-rise" style={{ animationDelay: "0.55s" }}>{profile.subline}</p>
        <div className="mt-10 flex flex-wrap gap-3 animate-rise" style={{ animationDelay: "0.7s" }}>
          <a href="#about" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">Explore My Journey <ArrowDown className="h-4 w-4" /></a>
          <a href="#projects" className="inline-flex items-center rounded-md border border-foreground/25 px-6 py-3 font-medium transition-colors hover:border-primary hover:text-primary">View My Projects</a>
        </div>
      </div>
    </section>
  );
}

function Index() {
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);
  const onStation = useCallback((id: string) => setActive(id), []);
  useEffect(() => {
    const f = () => setProgress(window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight));
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <main className="overflow-x-clip">
      <Nav active={active} progress={progress} />
      <Hero />
      <div className="mx-auto max-w-7xl px-5">
        <div className="relative pl-14 md:pl-44 xl:pr-40">
          <Road onStation={onStation} />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Experience />
          <Education />
          <Contact />
        </div>
      </div>
    </main>
  );
}
