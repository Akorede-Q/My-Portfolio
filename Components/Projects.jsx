const demoProjects = [
  {
    title: "Sovereign Debt Dashboard",
    desc: "Power BI dashboard analyzing debt sustainability across African countries (Debt-to-GDP, Risk Score, Trade & Fiscal health).",
    link: "#"
  },
  {
    title: "Inventory Optimization (Excel + Python)",
    desc: "Synthetic 100k dataset + KPIs for inventory turnover, ABC classification, reorder points.",
    link: "#"
  },
  {
    title: "Customer Behavior SQL Analysis",
    desc: "Cohort and retention analysis using SQL + insights exported to Power BI.",
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <h2 className="text-2xl font-semibold">Selected Projects</h2>
      <p className="mt-2 text-slate-500">Click any project to see case study & code.</p>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {demoProjects.map((p, i) => (
          <a key={i} href={p.link} className="block p-5 bg-white rounded-lg shadow hover:shadow-md transition">
            <div className="text-sm text-slate-500">Project</div>
            <div className="mt-2 text-lg font-medium">{p.title}</div>
            <p className="mt-3 text-slate-600 text-sm">{p.desc}</p>
            <div className="mt-4 text-sm text-primary">View case study →</div>
          </a>
        ))}
      </div>
    </section>
  );
}
