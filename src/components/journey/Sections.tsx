import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowUpRight, Award, Download, Github, GraduationCap, Linkedin, Mail, MapPin, User, Wrench,
  Car as CarIcon, Flag, X, Eraser, BarChart3, LineChart, LayoutDashboard, Database, Briefcase,
  MessageCircle,
} from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { profile, contact, skillGroups, projects, certificates, milestones, education, type Project, type Certificate, type Skill } from "@/content/portfolio";

export const STATIONS = [
  { id: "about", label: "About", name: "The Driver", Icon: User },
  { id: "skills", label: "Skills", name: "The Toolbox", Icon: Wrench },
  { id: "projects", label: "Projects", name: "The Garage", Icon: CarIcon },
  { id: "services", label: "Services", name: "The Workshop", Icon: Briefcase },
  { id: "certifications", label: "Certifications", name: "The Checkpoints", Icon: Award },
  { id: "experience", label: "Experience", name: "Milestones", Icon: Flag },
  { id: "education", label: "Education", name: "The Foundation", Icon: GraduationCap },
  { id: "contact", label: "Contact", name: "Next Stop", Icon: MapPin },
] as const;

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current!;
    const io = new IntersectionObserver(([e]) => { if (e?.isIntersecting) { el.classList.add("is-in"); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

function Station({ id, n, children }: { id: string; n: number; children: ReactNode }) {
  const s = STATIONS[n]!;
  return (
    <section id={id} className="relative scroll-mt-20 py-28 md:py-40">
      <span data-station={id} className="absolute left-[-3rem] top-32 h-1 w-1 md:left-[-9rem] md:top-44" />
      <Reveal>
        <div className="road-sign"><s.Icon className="h-3.5 w-3.5" /> Station {String(n + 1).padStart(2, "0")} · {s.name}</div>
      </Reveal>
      {children}
    </section>
  );
}

function Title({ children, sub }: { children: ReactNode; sub?: string }) {
  return (
    <Reveal delay={80}>
      <h2 className="mt-6 font-display text-5xl leading-[0.95] md:text-7xl">{children}</h2>
      {sub && <p className="mt-5 max-w-xl text-lg text-muted-foreground">{sub}</p>}
    </Reveal>
  );
}

const Ph = ({ show = true }: { show?: boolean }) => (show ? <span className="placeholder-tag">Placeholder</span> : null);

/* ───────────────────────── 0 · About ───────────────────────── */
export function About() {
  return (
    <Station id="about" n={0}>
      <div className="mt-10 grid gap-12 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <Reveal>
          <div className="placeholder-art relative aspect-[4/5] overflow-hidden rounded-lg border shadow-lift">
            {profile.photo ? (
              <img src={profile.photo} alt={profile.name} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-3 text-muted-foreground">
                <User className="h-12 w-12" strokeWidth={1} />
                <span className="placeholder-tag">Your portrait here</span>
              </div>
            )}
            <div className="absolute bottom-4 left-4 eyebrow flex items-center gap-2"><MapPin className="h-3 w-3" />{profile.location}</div>
          </div>
        </Reveal>
        <div>
          <Title>{profile.name}</Title>
          <Reveal delay={150}>
            <p className="mt-4 eyebrow">{profile.identity}</p>
            <p className="mt-8 font-display text-3xl italic leading-snug text-foreground/90">"{profile.intro}"</p>
            <dl className="mt-10 grid gap-8 sm:grid-cols-2">
              <div><dt className="eyebrow">Education</dt><dd className="mt-2 text-foreground/85">{profile.education}</dd></div>
              <div><dt className="eyebrow">Approach</dt><dd className="mt-2 text-foreground/85">{profile.approach}</dd></div>
            </dl>
            <div className="mt-10"><dt className="eyebrow">Interests</dt>
              <div className="mt-3 flex flex-wrap gap-2">{profile.interests.map((i) => <span key={i} className="rounded-full border px-3 py-1 text-sm text-foreground/80">{i}</span>)}</div>
            </div>
            <blockquote className="mt-12 border-l-2 border-primary pl-6">
              <div className="eyebrow">My Philosophy</div>
              <p className="mt-2 text-lg text-foreground/85">{profile.philosophy}</p>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </Station>
  );
}

/* ───────────────────────── 1 · Skills ───────────────────────── */
export function Skills() {
  const [sel, setSel] = useState<Skill>(skillGroups[0]!.skills[0]!);
  return (
    <Station id="skills" n={1}>
      <Title sub="The tools I carry on the road. Select one to see what it's for.">The Toolbox</Title>
      <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
        <div className="space-y-10">
          {skillGroups.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 80}>
              <div className="eyebrow mb-4">{g.title}</div>
              <div className="flex flex-wrap gap-3">
                {g.skills.map((s) => (
                  <button key={s.name} onClick={() => setSel(s)}
                    className={`rounded-md border px-4 py-2.5 text-sm transition-all ${sel.name === s.name ? "border-primary bg-primary text-primary-foreground" : "bg-card hover:-translate-y-0.5 hover:border-primary/60"}`}>
                    {s.name}
                  </button>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <div key={sel.name} className="animate-rise rounded-lg border bg-card p-8 shadow-lift lg:sticky lg:top-28">
            <div className="eyebrow">Selected tool</div>
            <h3 className="mt-3 font-display text-4xl">{sel.name}</h3>
            {sel.level && <div className="mt-3 road-sign">{sel.level}</div>}
            <p className="mt-5 text-foreground/80">{sel.description}</p>
            <div className="mt-6 eyebrow">Used in</div>
            <ul className="mt-2 space-y-1 text-sm">
              {sel.projects.length ? sel.projects.map((p) => <li key={p}>→ {p}</li>) : <li className="text-muted-foreground">No linked projects yet</li>}
            </ul>
          </div>
        </Reveal>
      </div>
    </Station>
  );
}

/* ───────────────────────── 2 · Projects ───────────────────────── */
function Cover({ p, big }: { p: Project; big?: boolean }) {
  return p.cover ? (
    <img src={p.cover} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
  ) : (
    <div className="placeholder-art flex h-full w-full flex-col justify-between p-6 transition-transform duration-700 group-hover:scale-105">
      <span className="placeholder-tag self-start">Cover image placeholder</span>
      <span className={`font-display text-foreground/10 ${big ? "text-9xl" : "text-7xl"}`}>{p.title.split(" ").map((w) => w[0]).join("")}</span>
    </div>
  );
}

export function Projects() {
  const [open, setOpen] = useState<Project | null>(null);
  const featured = projects[0]!;
  const rest = projects.slice(1);
  return (
    <Station id="projects" n={2}>
      <Title sub="Every project is a destination discovered along the road.">The Garage</Title>
      <Reveal delay={100}>
        <button onClick={() => setOpen(featured)} className="group mt-14 grid w-full overflow-hidden rounded-lg border bg-card text-left shadow-lift md:grid-cols-[3fr_2fr]">
          <div className="aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-96"><Cover p={featured} big /></div>
          <div className="flex flex-col justify-between gap-8 p-8 md:p-10">
            <div>
              <div className="flex items-center gap-3"><span className="eyebrow">Featured · {featured.category}</span><Ph show={!!featured.placeholder} /></div>
              <h3 className="mt-4 font-display text-4xl md:text-5xl">{featured.title}</h3>
              <p className="mt-4 text-foreground/75">{featured.summary}</p>
            </div>
            <span className="inline-flex items-center gap-2 text-primary">Open project <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
          </div>
        </button>
      </Reveal>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {rest.map((p, i) => (
          <Reveal key={p.title} delay={i * 100}>
            <button onClick={() => setOpen(p)} className="group w-full overflow-hidden rounded-lg border bg-card text-left transition-transform hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden"><Cover p={p} /></div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-2"><span className="eyebrow">{p.category}</span><Ph show={!!p.placeholder} /></div>
                <h3 className="mt-3 font-display text-3xl">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
              </div>
            </button>
          </Reveal>
        ))}
      </div>
      <Dialog open={!!open} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto p-0">
          {open && (
            <div>
              <div className="aspect-[16/8] overflow-hidden"><Cover p={open} big /></div>
              <div className="p-8">
                <span className="eyebrow">{open.category}</span>
                <DialogTitle className="mt-2 font-display text-4xl font-normal">{open.title}</DialogTitle>
                <DialogDescription className="mt-3 text-base">{open.summary}</DialogDescription>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  {[["Problem", open.problem], ["Solution", open.solution], ["Key findings", open.findings]].map(([k, v]) => (
                    <div key={k}><div className="eyebrow">{k}</div><p className="mt-2 text-sm text-foreground/80">{v}</p></div>
                  ))}
                  <div><div className="eyebrow">Tools</div><div className="mt-2 flex flex-wrap gap-2">{open.tools.map((t) => <span key={t} className="rounded border px-2 py-0.5 text-xs">{t}</span>)}</div></div>
                </div>
                {open.screenshots.length > 0 && <div className="mt-8 grid grid-cols-2 gap-3">{open.screenshots.map((s) => <img key={s} src={s} alt="" loading="lazy" className="rounded border" />)}</div>}
                <div className="mt-10 flex flex-wrap gap-3">
                  {open.github && <a href={open.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm hover:border-primary"><Github className="h-4 w-4" /> Repository</a>}
                  {open.demo && <a href={open.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground">Live demo <ArrowUpRight className="h-4 w-4" /></a>}
                  {open.video && <a href={open.video} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm">Watch video</a>}
                  <button onClick={() => setOpen(null)} className="ml-auto inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm text-muted-foreground hover:text-foreground"><X className="h-4 w-4" /> Back to the journey</button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Station>
  );
}

/* ───────────────────────── 3 · Services ───────────────────────── */
const services = [
  {
    title: "Data Cleaning",
    icon: Eraser,
    color: "from-rose-500 to-orange-400",
    description: "Cleaning and preparing data for accurate analysis.",
    deliverables: ["Missing values & duplicates", "Data formatting & correction", "Outlier detection"],
    tools: ["Python", "Pandas", "Excel", "SQL"],
    image: "/services/data-cleaning.svg",
  },
  {
    title: "Data Analysis",
    icon: LineChart,
    color: "from-blue-500 to-cyan-400",
    description: "Discovering trends and extracting valuable insights.",
    deliverables: ["Exploratory Data Analysis (EDA)", "KPI & trend analysis", "Business insights"],
    tools: ["Python", "SQL", "Excel"],
    image: "/services/data-analysis.svg",
  },
  {
    title: "Data Visualization",
    icon: BarChart3,
    color: "from-violet-500 to-fuchsia-400",
    description: "Turning data into clear and meaningful visuals.",
    deliverables: ["Charts & visual reports", "Data storytelling", "Professional visualizations"],
    tools: ["Power BI", "Tableau", "Excel"],
    image: "/services/data-visualization.svg",
  },
  {
    title: "Interactive Dashboards",
    icon: LayoutDashboard,
    color: "from-emerald-500 to-teal-400",
    description: "Building dashboards for smarter business decisions.",
    deliverables: ["Interactive dashboards", "Filters & drill-downs", "KPI monitoring"],
    tools: ["Power BI", "Tableau"],
    image: "/services/dashboards.svg",
  },
  {
    title: "SQL Querying & Reporting",
    icon: Database,
    color: "from-amber-500 to-yellow-400",
    description: "Extracting and managing data using SQL.",
    deliverables: ["SQL queries & JOINs", "Aggregations & CTEs", "Data reporting"],
    tools: ["SQL Server", "SQL"],
    image: "/services/sql-reporting.svg",
  },
];

export function Services() {
  return (
    <Station id="services" n={3}>
      <Title sub="How I can help turn your data into decisions.">Services I Offer</Title>
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal key={s.title} delay={i * 80}>
              <article className="h-full overflow-hidden rounded-lg border bg-card transition-transform hover:-translate-y-1 hover:border-primary">
                {s.image ? (
                  <img src={s.image} alt={s.title} loading="lazy" className="h-44 w-full object-cover" />
                ) : (
                  <div className={`flex h-44 items-center justify-center bg-gradient-to-br ${s.color}`}>
                    <Icon className="h-16 w-16 text-white drop-shadow" />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="font-display text-3xl">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
                  <ul className="mt-4 space-y-1 text-sm">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex gap-2"><span className="text-primary">✓</span><span>{d}</span></li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.tools.map((t) => (
                      <span key={t} className="rounded-full border px-3 py-1 text-xs">{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Station>
  );
}

/* ───────────────────────── 4 · Certifications ───────────────────────── */
export function Certifications() {
  const [open, setOpen] = useState<Certificate | null>(null);
  return (
    <Station id="certifications" n={4}>
      <Title sub="Courses, training and certifications — each one a checkpoint passed.">The Checkpoints</Title>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((c, i) => (
          <Reveal key={i} delay={i * 80}>
            <button onClick={() => setOpen(c)} className="group w-full rounded-lg border bg-card p-3 text-left transition-transform hover:-translate-y-1">
              <div className="placeholder-art flex aspect-[4/3] items-center justify-center overflow-hidden rounded border">
                {c.image ? <img src={c.image} alt={c.name} loading="lazy" className="h-full w-full object-cover" /> : <Award className="h-10 w-10 text-muted-foreground" strokeWidth={1} />}
              </div>
              <div className="p-3">
                <div className="flex items-center justify-between"><span className="eyebrow">CP-{String(i + 1).padStart(2, "0")}</span><Ph show={!!c.placeholder} /></div>
                <h3 className="mt-2 text-lg font-semibold">{c.name}</h3>
                <p className="text-sm text-muted-foreground">{c.issuer}{c.date && ` · ${c.date}`}</p>
              </div>
            </button>
          </Reveal>
        ))}
      </div>
      <Dialog open={!!open} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
          {open && (
            <div>
              <div className="placeholder-art flex aspect-[4/3] items-center justify-center overflow-hidden rounded border">
                {open.image ? <img src={open.image} alt={open.name} className="h-full w-full object-contain" /> : <span className="placeholder-tag">Certificate image placeholder</span>}
              </div>
              <DialogTitle className="mt-6 font-display text-3xl font-normal">{open.name}</DialogTitle>
              <DialogDescription>{open.issuer}{open.date && ` · ${open.date}`}</DialogDescription>
              <div className="mt-4 flex flex-wrap gap-2">{open.skills.map((s) => <span key={s} className="rounded border px-2 py-0.5 text-xs">{s}</span>)}</div>
              {open.extra && open.extra.length > 0 && (
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {open.extra.map((x) => (
                    <figure key={x.image}>
                      <img src={x.image} alt={x.label} loading="lazy" className="w-full rounded border object-contain" />
                      <figcaption className="mt-2 text-xs text-muted-foreground">{x.label}</figcaption>
                    </figure>
                  ))}
                </div>
              )}
              {open.url && <a href={open.url} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground">Verify credential <ArrowUpRight className="h-4 w-4" /></a>}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Station>
  );
}

/* ───────────────────────── 5 · Experience ───────────────────────── */
export function Experience() {
  return (
    <Station id="experience" n={5}>
      <Title sub="Meaningful steps along the way — projects, learning, and growth.">Milestones</Title>
      <ol className="mt-14 space-y-4">
        {milestones.map((m, i) => (
          <Reveal key={i} delay={i * 80}>
            <li className="grid gap-4 rounded-lg border bg-card p-6 md:grid-cols-[8rem_1fr_auto] md:items-center">
              <span className="font-mono text-xs text-primary">KM {String((i + 1) * 10).padStart(3, "0")}</span>
              <div>
                <div className="eyebrow">{m.kind}{m.date && ` · ${m.date}`}</div>
                <h3 className="mt-1 text-xl font-semibold">{m.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{m.description}</p>
              </div>
              <Ph show={!!m.placeholder} />
            </li>
          </Reveal>
        ))}
      </ol>
    </Station>
  );
}

/* ───────────────────────── 6 · Education ───────────────────────── */
export function Education() {
  const e = education;
  return (
    <Station id="education" n={6}>
      <Title>The Foundation</Title>
      <Reveal delay={120}>
        <div className="mt-14 overflow-hidden rounded-lg border bg-card shadow-lift">
          <div className="flex items-center justify-between bg-primary px-8 py-4 text-primary-foreground">
            <span className="font-mono text-xs tracking-[0.2em] uppercase">Destination</span>
            <GraduationCap className="h-5 w-5" />
          </div>
          <div className="grid gap-10 p-8 md:grid-cols-2 md:p-10">
            <div>
              <div className="flex items-center gap-3"><span className="eyebrow">{e.degree}</span></div>
              <h3 className="mt-3 font-display text-4xl">{e.institution}</h3>
              <p className="mt-2 text-foreground/80">{e.field}</p>
              {(e.start || e.graduation) && <p className="mt-4 font-mono text-sm text-muted-foreground">{e.start} → {e.graduation || "Expected"}</p>}
            </div>
            <div className="space-y-6">
              <div><div className="eyebrow">Relevant coursework</div><div className="mt-2 flex flex-wrap gap-2">{e.coursework.map((c) => <span key={c} className="rounded-full border px-3 py-1 text-sm">{c}</span>)}</div></div>
              <div><div className="eyebrow">Academic projects</div><ul className="mt-2 text-sm text-foreground/80">{e.projects.map((p) => <li key={p}>→ {p}</li>)}</ul></div>
            </div>
          </div>
        </div>
      </Reveal>
    </Station>
  );
}

/* ───────────────────────── 7 · Contact ───────────────────────── */
export function Contact() {
  const items = [
    { label: "Email",       href: contact.email && `mailto:${contact.email}`,                          Icon: Mail },
    { label: "LinkedIn",    href: contact.linkedin,                                                     Icon: Linkedin },
    { label: "GitHub",      href: contact.github,                                                       Icon: Github },
    { label: "Download CV", href: contact.cv,                                                           Icon: Download },
    { label: "WhatsApp",    href: contact.phone && `https://wa.me/${contact.phone.replace("+", "")}`,   Icon: MessageCircle },
  ];
  return (
    <Station id="contact" n={7}>
      <div className="relative">
        <div className="hero-glow pointer-events-none absolute -inset-x-20 -top-40 h-96" />
        <Title sub="Let's connect, exchange ideas, and build something meaningful.">Have an interesting challenge in mind?</Title>
        <Reveal delay={200}>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {items.map(({ label, href, Icon }) =>
              href ? (
                <a key={label} href={href} target="_blank" rel="noreferrer" download={label === "Download CV" || undefined}
                  className="group flex items-center justify-between rounded-lg border bg-card p-5 transition-colors hover:border-primary">
                  <span className="flex items-center gap-3"><Icon className="h-5 w-5 text-primary" />{label}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ) : (
                <div key={label} className="flex items-center justify-between rounded-lg border border-dashed p-5 text-muted-foreground" title="Add this link in the content file">
                  <span className="flex items-center gap-3"><Icon className="h-5 w-5" />{label}</span>
                  <span className="placeholder-tag">Not set</span>
                </div>
              ),
            )}
          </div>
        </Reveal>
        <p className="mt-24 eyebrow">End of the road · {profile.shortName} · {profile.location}</p>
      </div>
    </Station>
  );
}