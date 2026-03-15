import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    const form = e.target;

    const data = {
      name: form.name.value,
      company: form.company.value,
      email: form.email.value,
      phone: form.phone.value,
      wasteType: form.wasteType.value,
      quantity: form.quantity.value,
      message: form.message.value,
    };

    try {

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await res.json();

      if (res.ok) {

        setSuccessMessage(
          "Thank you for contacting NaturePro Creators. Our team will reach out shortly."
        );

        form.reset();

      } else {
        setErrorMessage(result.error || "Failed to submit inquiry.");
      }

    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

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

      {/* Contact Info + Map */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="space-y-8">

            <div className="stat-card p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="text-primary" size={20}/>
                <h3 className="text-lg font-semibold">Office Address</h3>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                CTS. No. 19, Saraswati Apartment, 2nd Floor,
                Near Sinhagad Institute, Erandwane, Pune 411004.
              </p>
            </div>

            <div className="stat-card p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="text-primary" size={20}/>
                <h3 className="text-lg font-semibold">Plant Address</h3>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                Gat No. 868, Mouje Palshi, Tal. Khandala,
                Dist. Satara, Maharashtra 412801.
              </p>
            </div>

            <div className="stat-card p-8 rounded-xl shadow-sm">

              <h3 className="text-lg font-semibold mb-4">Contact Details</h3>

              <div className="space-y-3 text-sm">

                <a
                  href="tel:+912025412175"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                >
                  <Phone size={16}/> +91 20-25412175
                </a>

                <a
                  href="tel:+918956258824"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                >
                  <Phone size={16}/> +91 89562 58824
                </a>

                <a
                  href="mailto:natureprocreators@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                >
                  <Mail size={16}/> natureprocreators@gmail.com
                </a>

                <a
                  href="https://www.natureprocreators.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                >
                  <Globe size={16}/> www.natureprocreators.com
                </a>

              </div>
            </div>

          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-lg min-h-[420px]">
            <iframe
              title="NaturePro Creators Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3463.2373655771767!2d73.8353878!3d18.5084951!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf00016a9965%3A0x96d89953c43a15f5!2sNaturepro%20Creators%20LLP!5e1!3m2!1sen!2sin!4v1772732437836!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{border:0}}
              loading="lazy"
            />
          </div>

        </div>
      </section>

      {/* Inquiry Form */}
      <section className="section-padding section-alt">

        <div className="max-w-4xl mx-auto">

          <div className="stat-card p-10 md:p-12 rounded-xl shadow-lg">

            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
              Plastic Waste <span className="text-primary">Inquiry</span>
            </h2>

            <div className="green-underline mx-auto mb-6"/>

            {successMessage && (
              <div className="bg-green-50 border border-green-200 text-green-700 p-3 rounded-md mb-6 text-center">
                {successMessage}
              </div>
            )}

            {errorMessage && (
              <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-md mb-6 text-center">
                {errorMessage}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 mt-6"
            >

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>

                <input
                  name="name"
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>

                <input
                  name="company"
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>

                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Type of Plastic Waste
                </label>

                <select
                  name="wasteType"
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                >
                  <option value="">Select Plastic Waste Type</option>
                  <option value="Cat I - Rigid Plastic">
                    Cat I (Rigid Plastic)
                  </option>
                  <option value="Cat II - Flexible Plastic">
                    Cat II (Flexible Plastic)
                  </option>
                  <option value="Cat III - MLP">
                    Cat III (MLP)
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity (Tons / Year)
                </label>

                <input
                  type="number"
                  name="quantity"
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                />
              </div>

              <div className="md:col-span-2">

                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>

                <textarea
                  name="message"
                  rows={4}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                />

              </div>

              <div className="md:col-span-2 text-center mt-4">

                <button
                  type="submit"
                  disabled={loading}
                  className={`px-8 py-2 rounded-md font-medium text-white transition ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-primary hover:opacity-90"
                  }`}
                >
                  {loading ? (
                    <span className="flex items-center gap-2 justify-center">
                      <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4"></span>
                      Sending...
                    </span>
                  ) : (
                    "Submit Inquiry"
                  )}
                </button>

              </div>

            </form>

          </div>

        </div>

      </section>

    </div>
  );
};

export default ContactPage;