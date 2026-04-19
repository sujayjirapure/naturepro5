import { Link } from "react-router-dom";
import { Recycle, Leaf, Users, Award, Factory, Droplets, Flame, ArrowRight, CheckCircle, Shield, TrendingUp } from "lucide-react";
import heroBg from "@/assets/natureprobanner.avif";
import plantImg from "@/assets/plant.jpg";

const HomePage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="NaturePro recycling facility" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Innovative 'End Of Life' Plastic Waste Management company {" "}
              {/* <span className="text-secondary">Sustainable Solutions</span> */}
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
  Naturepro provides advanced <strong>plastic waste management services</strong> using 
  <strong> plastic pyrolysis technology</strong> to convert difficult to recycle Municipal plastic waste and <strong>industrial plastic waste </strong> 
  into valuable <strong>Advanced Bio-fuel</strong>. Our process supports <strong>sustainability</strong>, 
  promotes a <strong>circular economy in plastic recycling</strong>, and generates  
  <strong> renewable energy from waste</strong> while fulfilling
  <strong> EPR (Extended Producer Responsibility)</strong> and CSR environmental goals.
</p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/operations"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Our Operations
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-card text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* About Brief */}
      {/* About Brief */}
<section className="section-padding section-alt">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
      About <span className="text-primary">Naturepro</span>
    </h2>
    <div className="green-underline mb-8" />
    <p className="text-muted-foreground leading-relaxed text-lg mb-12">
      Naturepro Creators LLP is a leading <strong>plastic waste management company </strong> 
      specializing in <strong>plastic pyrolysis</strong> and sustainable recycling solutions. 
      We process difficult to recycle<strong> Municipal plastic waste</strong> and <strong>industrial plastic waste</strong> and multilayer plastic through 
      advanced chemical recycling technology to produce <strong>Advanced Bio-fuel</strong>, 
      contributing to <strong>sustainability</strong>, CSR initiatives, and the 
      <strong> circular economy for plastic recycling</strong>.
    </p>

    {/* Centered 2-Box Info Area */}
   

    <Link
      to="/about"
      className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
    >
      Learn More
    </Link>
  </div>
</section>

      {/* What We Do */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              What We <span className="text-primary">Do</span>
            </h2>
            <div className="green-underline mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From collection to conversion — our integrated process ensures zero plastic waste reaches landfills.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="stat-card p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-5">
                  <service.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plant Section */}
<section className="section-padding section-alt">
  <div className="max-w-6xl mx-auto">

    <div className="flex flex-col md:flex-row gap-12 items-center">

      {/* Text Section - 30% */}
      <div className="w-full md:w-[30%]">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Our <span className="text-primary">Plant</span>
        </h2>

        <div className="green-underline !mx-0 mb-6" />

        <p className="text-muted-foreground leading-relaxed mb-6">
          Located at Palshi, Satara, Maharashtra — just 6 km from Shirwal.
          Our facility is equipped with advanced pyrolysis technology and
          operates under full MPCB compliance with live CCTV cameras for
          transparent operations.
        </p>

        <ul className="space-y-3 mb-8">
          {plantFeatures.map((feat, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="text-primary mt-0.5 shrink-0" size={18} />
              <span className="text-muted-foreground text-sm">{feat}</span>
            </li>
          ))}
        </ul>

        <Link
          to="/operations"
          className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
        >
          View Operations <ArrowRight size={16} />
        </Link>
      </div>

      {/* Image Section - 70% */}
      <div className="w-full md:w-[70%] rounded-xl overflow-hidden shadow-lg">
        <img
          src={plantImg}
          alt="NaturePro Plant at Palshi"
          className="w-full h-full object-cover"
        />
      </div>

    </div>

  </div>
</section>
      {/* Highlights */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Why Choose <span className="text-primary">Naturepro</span>
            </h2>
            <div className="green-underline mb-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <div key={i} className="stat-card p-6 text-center hover:shadow-lg transition-shadow">
                <item.icon className="mx-auto mb-4 text-primary" size={28} />
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio-fuel Info */}
      <section className="section-padding section-alt">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Advanced <span className="text-primary">Bio-Fuel</span>
          </h2>
          <div className="green-underline mb-8" />
          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
  Our facility produces <strong>Advanced Bio-fuel from plastic waste</strong> using advanced 
  <strong> plastic pyrolysis technology</strong>. This innovative process converts 
  low-value plastic waste into <strong>renewable energy from waste</strong>, helping 
  industries achieve <strong>CSR sustainability goals</strong> and comply with 
  <strong> EPR (Extended Producer Responsibility)</strong> regulations.
</p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            It is presently used in oil-fired burners/boilers, hot mix bitumen plants, and more.
            This process achieves the "End of Life" for lowest density multilayered plastic waste.
          </p>
          <Link
            to="/vision"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            Our Vision & Mission
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Partner With Us For a Greener Future
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Whether you're a municipality, industry, or organization — we provide end-to-end
            plastic waste management solutions tailored to your needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-card text-foreground font-semibold rounded-lg hover:bg-muted transition-colors text-lg"
          >
            Get In Touch
          </Link>
        </div>
      </section>
      <section className="section-padding">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-foreground mb-6">
      Sustainable Plastic Waste Management Solutions
    </h2>

    <p className="text-muted-foreground leading-relaxed">
      Naturepro offers complete solutions for <strong>plastic waste management</strong>, 
      including collection, processing, and conversion of <strong>industrial plastic waste</strong> 
      into energy through <strong>plastic pyrolysis</strong>. As a responsible 
      <strong> Advanced Bio-fuel manufacturer</strong>, we support businesses in achieving 
      <strong> sustainability</strong>, fulfilling <strong>CSR environmental responsibilities</strong>, 
      and building a <strong>circular economy in plastic recycling</strong>.
    </p>
  </div>
</section>
    </div>
  );
};

// Data
const stats = [
  { icon: Recycle, value: "2000+", label: "Tonnes Plastic waste completely finished from Environment" },
  { icon: Leaf, value: "3000", label: "Tonnes/Year Capacity" },
  { icon: Users, value: "25+", label: "Clients Served" },
  { icon: Award, value: "EPR & MPCB", label: "Certified Operations" },
];

const stats2 = [
  { 
    icon: Factory, 
    value: "≈4500 Tons", 
    label: "CO2 Emission Reduced" 
  },
  { 
    icon: Droplets, 
    value: "≈4,50,000 + Litres", 
    label: "Advanced Bio-fuel generated" 
  },
];

const services = [
  { icon: Recycle, title: "Mechanical Recycling", desc: "Rigid and high-level plastics are recycled through mechanical means at our MRF centres, producing granules and recycled products." },
  { icon: Flame, title: "Chemical Recycling (Pyrolysis)", desc: "Lowest level multilayer plastics are converted into Advanced Bio-fuel, Carbon (adhesive to Bitumen), and Gas through pyrolysis process." },
  // { icon: Factory, title: "Waste Procurement", desc: "We procure household segregated plastic waste, industrial waste, and work with ULBs across Maharashtra and beyond." },
];

const plantFeatures = [
  "3000 Tonnes/Year processing capacity",
  "EPR & MPCB Certified operations",
  "Live CCTV cameras for transparency",
  "Advanced pyrolysis technology",
  "Zero harmful emissions as per MPCB guidelines",
];

const highlights = [
  { icon: Shield, title: "Fully Compliant", desc: "EPR & MPCB certified with zero harmful emissions." },
  { icon: Droplets, title: "Alternative Fuel", desc: "Advance Bio-fuel recognized under National Policy of Biofuels 2018." },
  { icon: TrendingUp, title: "Scalable Capacity", desc: "Currently 3000 TPY with growing pipeline across different cities." },
  { icon: Recycle, title: "End of Life", desc: "Complete processing of lowest density multilayered plastic." },
];

const StatsSection = () => (
  <section className="section-padding bg-card">
    <div className="max-w-6xl mx-auto">

      {/* First Row - 4 boxes */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, i) => (
          <div key={i} className="stat-card text-center">
            <stat.icon className="mx-auto mb-3 text-primary" size={32} />
            <div className="text-2xl md:text-3xl font-bold text-primary">
              {stat.value}
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Second Row - 2 boxes centered */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {stats2.map((stat, i) => (
          <div
            key={i}
            className="stat-card p-6 text-center border border-primary/10 bg-card rounded-xl shadow-sm"
          >
            <stat.icon className="mx-auto mb-3 text-primary" size={40} />
            <div className="text-2xl md:text-3xl font-bold text-primary">
              {stat.value}
            </div>
            <div className="text-sm font-medium text-muted-foreground mt-2 uppercase tracking-wide">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default HomePage;
