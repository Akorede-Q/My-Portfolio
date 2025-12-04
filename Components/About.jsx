export default function About() {
  return (
    <section id="about" className="py-12 border-t border-slate-100">
      <h2 className="text-2xl font-semibold">About</h2>
      <p className="mt-4 text-slate-600">
        I build data products that help teams make decisions. I specialize in Excel, Power BI, Python, SQL, and automation — with projects spanning HR analytics, operations, and macroeconomic analysis.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <div className="text-xs font-medium text-slate-500">Skills</div>
          <div className="mt-2 text-sm">Power BI • Python • SQL • Excel • Streamlit</div>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <div className="text-xs font-medium text-slate-500">Experience</div>
          <div className="mt-2 text-sm">Internships, Hackathons, Data Projects</div>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <div className="text-xs font-medium text-slate-500">Interests</div>
          <div className="mt-2 text-sm">Crypto • Automation • Data for good</div>
        </div>
      </div>
    </section>
  );
}
