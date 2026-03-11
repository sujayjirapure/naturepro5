import { Recycle, Leaf, Users, Award } from "lucide-react";

const stats = [ 
  { icon: Recycle, value: "2000+", label: "Tonnes Plastic Recycled" },
  { icon: Leaf, value: "1500", label: "Tonnes/Year Capacity" },
  { icon: Users, value: "200+", label: "Clients Served" },
  { icon: Award, value: "EPR & MPCB", label: "Certified Operations" },
];

const StatsBar = () => {
  return (
    <section className="section-padding bg-card">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="stat-card text-center animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
            <stat.icon className="mx-auto mb-3 text-primary" size={32} />
            <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
            <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
