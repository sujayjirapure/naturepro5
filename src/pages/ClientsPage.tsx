import { MapPin, Clock, Building2 } from "lucide-react";

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

const ClientsPage = () => {
  return (
    <div>
      {/* Header */}
      <section className="section-padding section-alt">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Supply from <span className="text-primary">ULBs & Industries</span>
          </h1>
          <div className="green-underline mb-8" />
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Current */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <MapPin className="text-primary-foreground" size={20} />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Current Tie-ups</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {currentClients.map((c) => (
                <span key={c} className="px-3 py-1.5 bg-accent text-accent-foreground text-sm rounded-full">
                  {c}
                </span>
              ))}
            </div>
            <br></br>
            <br></br>
             <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-5 h-5 text-primary" />
              <h4 className="font-heading font-semibold text-foreground">Companies</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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
