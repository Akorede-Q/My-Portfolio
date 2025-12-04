export default function Hero() {
  return (
    <section className="grid gap-8 md:grid-cols-2 items-center py-12">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Legit — Data Analyst & Builder
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          I turn messy data into clear insights, dashboards, and automation. Projects: inventory optimization, sovereign-debt analysis, customer behavior, and more.
        </p>

        <div className="mt-6 flex gap-4">
          <a href="#projects" className="px-5 py-3 bg-primary text-white rounded-md font-medium">See Projects</a>
          <a href="#contact" className="px-5 py-3 border border-slate-200 rounded-md text-slate-700">Contact me</a>
        </div>

        <div className="mt-8 text-sm text-slate-500">
          Based in Nigeria • Open to internships & hackathons
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <img src="/avatar.png" alt="avatar" className="w-56 h-56 object-cover rounded-xl shadow-lg" />
      </div>
    </section>
  );
}
