import { MapPin, Phone, Mail, Globe } from "lucide-react";

const ContactPage = () => {
  return (
    <div>
      {/* Header */}
      <section className="section-padding section-alt">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Contact <span className="text-primary">Us</span>
          </h1>
          <div className="green-underline mb-8" />
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Office */}
            <div className="stat-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="text-primary" size={20} />
                <h3 className="text-lg font-semibold text-foreground">Office Address</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                CTS. No. 19, Saraswati Apartment, 2nd Floor, Near Sinhagad Institute,
                Erandwane, Pune 411004.
              </p>
            </div>

            {/* Plant */}
            <div className="stat-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="text-primary" size={20} />
                <h3 className="text-lg font-semibold text-foreground">Plant Address</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Gat No. 868, Mouje Palshi, Tal. Khandala, Dist. Satara, Maharashtra 412801.
              </p>
            </div>

            {/* Contact Details */}
            <div className="stat-card p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Contact Details</h3>
              {/* <p className="text-muted-foreground text-sm mb-3">
                <strong className="text-foreground">Seema Bagal</strong> – Project Manager
              </p> */}
              <div className="space-y-2 text-sm">
                <a href="tel:+912025412175" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Phone size={16} /> +91 020-25412175
                </a>
                <a href="mailto:natureprocreators@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={16} /> natureprocreators@gmail.com
                </a>
                <a href="https://www.natureprocreators.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Globe size={16} /> www.natureprocreators.com
                </a>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded-xl overflow-hidden shadow-lg h-full min-h-[400px]">
            <iframe
              title="NaturePro Creators Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3463.2373655771767!2d73.8353878!3d18.5084951!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf00016a9965%3A0x96d89953c43a15f5!2sNaturepro%20Creators%20LLP!5e1!3m2!1sen!2sin!4v1772732437836!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
