const impact = [
  { n: "12426", l: "Volunteers across India" },
  { n: "341", l: "Districts Covered" },
  { n: "4.7M", l: "Lives touched" },
  { n: "134+", l: "Events completed till now" },
];

const Impact = () => {
  return (
    <section id="impact" className="mx-auto max-w-7xl px-6 pt-12 pb-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 rounded-3xl bg-card shadow-elegant border border-border overflow-hidden">
        {impact.map((s: any, i: any) => (
          <div
            key={s.l}
            className={`p-8 text-center ${i !== 0 ? "lg:border-l border-border" : ""} ${i % 2 === 1 ? "border-l border-border lg:border-l" : ""}`}
          >
            <div className="font-display text-4xl lg:text-5xl font-bold text-primary">
              {s.n}
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Impact;
