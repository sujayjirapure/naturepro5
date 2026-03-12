import { MapPin, Clock, Building2, Car, Pill, ShoppingBag, Settings, CheckCircle2, Factory } from "lucide-react";

const currentClients = [
  "Shrivardhan", "Karjat", "Karad", "Shirala", "Vita", "Ashta",
  "Urun Islampur", "Pachgani", "Mahad", "Hingoli", "Ambad",
  "Vengurla", "Pandharpur", "Indapur", "Devrukh", "Rajapur",
  "Ratnagiri", "Akkalkot", "Vellore (TN)",
];

const pipelineClients = [
  "Saswad", "Sinnar", "Jalna", "Shirdi", "Chakan", "Lonavala",
  "Kolhapur", "Barshi", "Pathardi", "Rajgurunagar", "Roha",
  "Murud", "Kerala",
];

const currentCompanies = [
  "Kirloskar Pneumatics Ltd.",
  "Chitale Bandhu Mithaiwale",
  "Weikfield Foods Pvt Ltd",
  "Shogini Technoarts Pvt Ltd",
];

const industries = [
  { icon: Car, name: "Automotive Industry", desc: "Plastic packaging waste, liners, and industrial plastic scrap." },
  { icon: Pill, name: "Pharmaceutical Industry", desc: "Plastic packaging materials and flexible plastic waste." },
  { icon: ShoppingBag, name: "FMCG & Packaging", desc: "Plastic wrapping films, packaging bags, and liners." },
  { icon: Settings, name: "Engineering & Manufacturing", desc: "Industrial plastic waste generated during production and packaging." },
];

const plasticTypes = [
  "LDPE / HDPE Industrial Packaging",
  "Plastic Bags from Raw Material Packaging",
  "Flexible Plastic Scrap",
  "Plastic Liners & Wrapping Films",
  "Industrial Plastic Packaging Waste",
];

const ClientsPage = () => {
  return (
    <div>
      {/* Header */}
      {/* <section className="section-padding section-alt">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Supply from <span className="text-primary">ULBs & Industries</span>
          </h1>
          <div className="green-underline mb-8" />
        </div>
      </section> */}

      {/* Industries We Serve */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Industries <span className="text-primary">We Serve</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide professional plastic waste recycling solutions designed to meet industry safety standards and regulatory requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((item, i) => (
              <div key={i} className="p-6 bg-card border border-border rounded-xl hover:shadow-md transition-shadow">
                <item.icon className="text-primary mb-4" size={32} />
                <h3 className="font-bold text-foreground mb-2">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Plastic Waste (Two Column Layout) */}
      <section className="section-padding section-alt">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Types of Plastic Waste <span className="text-primary">We Accept</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              NaturePro specializes in handling industrial plastic waste streams. Our team evaluates each waste stream to ensure safe and suitable recycling through pyrolysis technology.
            </p>
            <div className="space-y-3">
              {plasticTypes.map((type, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary shrink-0" size={20} />
                  <span className="text-foreground font-medium">{type}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-primary/5 border border-primary/10 p-8 rounded-2xl text-center">
            <Factory className="mx-auto text-primary mb-4" size={48} />
            <h3 className="text-xl font-bold mb-2">Sustainable Resource Recovery</h3>
            <p className="text-sm text-muted-foreground">
              Trusted by industries for responsible plastic waste recycling and environmental compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Current Tie-ups & Pipeline (Existing Section) */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Current */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <MapPin className="text-primary-foreground" size={20} />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Current Tie-ups (ULBs)</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {currentClients.map((c) => (
                <span key={c} className="px-3 py-1.5 bg-accent text-accent-foreground text-sm rounded-full">
                  {c}
                </span>
              ))}
            </div>
            
            <div className="mt-12">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-5 h-5 text-primary" />
                <h4 className="font-heading font-semibold text-foreground text-xl">Partner Companies</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentCompanies.map((c) => (
                  <div
                    key={c}
                    className="flex items-center gap-2 px-3 py-2 bg-accent/40 rounded-md text-sm text-foreground font-medium hover:bg-accent transition"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pipeline */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Clock className="text-secondary-foreground" size={20} />
              </div>
              <h2 className="text-2xl font-bold text-foreground">In Pipeline</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {pipelineClients.map((c) => (
                <span key={c} className="px-3 py-1.5 bg-muted text-muted-foreground text-sm rounded-full">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientsPage;