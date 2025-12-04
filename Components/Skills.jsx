export default function Skills() {
  const skills = ["Power BI", "Python", "SQL", "Excel", "Streamlit", "Data Visualization"];
  return (
    <section className="py-12">
      <h3 className="text-xl font-semibold">Skills & Tools</h3>
      <div className="mt-4 flex flex-wrap gap-3">
        {skills.map((s) => (
          <div key={s} className="px-3 py-2 bg-white rounded-md shadow-sm text-sm">
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}
