import plantImg from "@/assets/plant.jpg";

const AboutPage = () => {
  return (
    <div>
      {/* Header */}
      <section className="section-padding section-alt">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            About <span className="text-primary">NaturePro</span>
          </h1>
          <div className="green-underline mb-8" />
        </div>
      </section>

      {/* Content */}
      {/* Content */}
<section className="section-padding">
  <div className="max-w-6xl mx-auto flex flex-col gap-10">

    {/* Image First */}
    <div className="rounded-xl overflow-hidden shadow-lg">
      <img
        src={plantImg}
        alt="NaturePro plant facility"
        className="w-full h-auto"
      />
    </div>

    {/* Text Below */}
    <div>
      <p className="text-muted-foreground leading-relaxed mb-6">
        We are working in the field of integrated plastic waste management by mechanical
        and chemical means of recycling. We convert lowest level plastic waste into fuel
        (Advanced Bio-fuel), as per Maharashtra Pollution Control Board (MPCB) criteria.
        We have EPR and MPCB Certification.
      </p>

      <p className="text-muted-foreground leading-relaxed mb-8">
        We have processed more than <strong className="text-foreground">2000 Tonnes</strong> of
        lowest density multilayered plastic waste to "End of Life" and presently, we have
        capacity of processing around <strong className="text-foreground">1500 tonnes</strong> plastic
        waste per year.
      </p>

      <div>
        <h3 className="text-xl font-semibold text-foreground mb-4">Company Directors</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
            Mr. Dilip Kotibhaskar
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
            Mr. Yogesh Gavankar
          </li>
        </ul>
      </div>
    </div>

  </div>
</section>

      {/* Stats */}
      <section className="section-padding section-alt">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { value: "2000+", label: "Tonnes Processed" },
            { value: "1500", label: "Tonnes/Year Capacity" },
            { value: "EPR & MPCB", label: "Certified" },
          ].map((stat, i) => (
            <div key={i} className="stat-card">
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
