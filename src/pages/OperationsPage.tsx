import { Truck, Cog, FlaskConical, Fuel, Flame, Wind } from "lucide-react";

const operations = [
  {
    icon: Truck,
    title: "Procurement & Transportation",
    desc: "Household segregated plastic waste & pre-consumer industrial waste collection.",
  },
  {
    icon: Cog,
    title: "Mechanical Recycling",
    desc: "MRF Centre processes rigid/high-level plastics into granules & recycled products.",
  },
  {
    icon: FlaskConical,
    title: "Chemical Recycling (Pyrolysis)",
    desc: "Lowest level / multilayer plastic is processed through chemical means — the 'End of Life' process.",
  },
  {
    icon: Fuel,
    title: "Advanced Bio-Fuel (Plastic Oil)",
    desc: "Alternative to liquid fossil fuel, used in oil-fired burners, boilers & hot mix bitumen plants.",
  },
  {
    icon: Flame,
    title: "Solid Biofuel (Carbon)",
    desc: "Carbon produced is adhesive to bitumen, creating additional value from waste.",
  },
  {
    icon: Wind,
    title: "Gas Reusing",
    desc: "Process gas is captured and reused, ensuring zero-waste operations.",
  },
];

const OperationsPage = () => {
  return (
    <div>
      {/* Header */}
      <section className="section-padding section-alt">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Operations <span className="text-primary">Process</span>
          </h1>
          <div className="green-underline mb-6" />
          <p className="text-muted-foreground leading-relaxed">
            Plastic Pyrolysis Oil is an Alternative fuel declared as 'Advanced Bio-fuel' as per
            'National Policy of Biofuels 2018' by Ministry of Petroleum.
          </p>
        </div>
      </section>

      {/* Operations Grid */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {operations.map((op, i) => (
            <div key={i} className="stat-card p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                <op.icon className="text-accent-foreground" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{op.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{op.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OperationsPage;
