import { Eraser, BarChart3, LineChart, LayoutDashboard, Database } from "lucide-react";

const services = [
  {
    title: "Data Cleaning",
    icon: Eraser,
    color: "from-rose-500 to-orange-400",
    description: "أحوّل البيانات الخام الفوضوية إلى بيانات نظيفة وجاهزة للتحليل.",
    deliverables: ["Missing values & duplicates", "Fixing data types & formats", "Outlier detection", "Cleaned dataset + log"],
    tools: ["Python", "Pandas", "Excel", "SQL"],
    image: "", // اختياري: "/services/data-cleaning.png"
  },
  {
    title: "Data Analysis",
    icon: LineChart,
    color: "from-blue-500 to-cyan-400",
    description: "أستكشف البيانات وأطلع منها الأنماط والتريندات وإجابات أسئلة البزنس.",
    deliverables: ["Exploratory Data Analysis (EDA)", "KPIs & trend analysis", "Statistical summaries", "Insights report"],
    tools: ["Python", "SQL", "Excel"],
    image: "",
  },
  {
    title: "Data Visualization",
    icon: BarChart3,
    color: "from-violet-500 to-fuchsia-400",
    description: "أعمل رسومات واضحة بتحكي قصة البيانات بشكل سهل الفهم.",
    deliverables: ["Charts & visual reports", "Storytelling with data", "Clean, readable design"],
    tools: ["Power BI", "Tableau", "Excel"],
    image: "/projects/airline-powerbi-1.png", // صورة من مشاريعك الموجودة
  },
  {
    title: "Interactive Dashboards",
    icon: LayoutDashboard,
    color: "from-emerald-500 to-teal-400",
    description: "أبني داشبورد تفاعلي يخلّي صاحب القرار يفلتر ويشوف الأرقام بنفسه.",
    deliverables: ["Power BI / Tableau dashboards", "Filters, slicers & drill-down", "Executive summary view"],
    tools: ["Power BI", "Tableau"],
    image: "/projects/bike-1.png",
  },
  {
    title: "SQL Querying & Reporting",
    icon: Database,
    color: "from-amber-500 to-yellow-400",
    description: "أكتب استعلامات SQL لاستخراج وتجميع البيانات من قواعد البيانات.",
    deliverables: ["Joins, aggregations & CTEs", "Reusable queries", "Reports ready for BI tools"],
    tools: ["SQL Server", "SQL"],
    image: "",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-bold">Services I Offer</h2>
        <p className="mt-2 text-center text-muted-foreground">
          How I can help turn your data into decisions
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="overflow-hidden rounded-2xl border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                {s.image ? (
                  <img src={s.image} alt={s.title} loading="lazy" className="h-44 w-full object-cover" />
                ) : (
                  <div className={`flex h-44 items-center justify-center bg-gradient-to-br ${s.color}`}>
                    <Icon className="h-16 w-16 text-white drop-shadow" />
                  </div>
                )}
                <div className="p-5">
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
                  <ul className="mt-4 space-y-1 text-sm">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex gap-2"><span>✓</span><span>{d}</span></li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.tools.map((t) => (
                      <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs">{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}