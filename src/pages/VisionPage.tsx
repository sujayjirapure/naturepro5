import { Eye, Target } from "lucide-react";

const VisionPage = () => {
  return (
    <div>
      {/* Header */}
      <section className="section-padding section-alt">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Vision & <span className="text-primary">Mission</span>
          </h1>
          <div className="green-underline mb-8" />
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="stat-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <Eye className="text-accent-foreground" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed italic text-lg">
              "Our Vision is to promote Circular Economy by diverting plastic waste from
              landfills, oceans etc., create new job opportunities, augment the support to
              India and other countries for their recycling initiatives and reduce carbon
              emissions footprint."
            </p>
          </div>

          {/* Mission */}
          <div className="stat-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <Target className="text-accent-foreground" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed italic text-lg">
              "Our mission is to achieve end of life of low density multilayered plastic
              waste from the environment and also generate alternative fuel which would
              reduce dependency on fossil fuel."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionPage;
