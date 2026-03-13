import React from "react";

const Legal = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-20 pb-40 text-foreground" style={{ marginBottom: "100px" }}>
      {/* <h1 className="text-3xl font-bold mb-8 border-b pb-4">Legal Documents</h1> */}

      {/* Privacy Policy Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
        {/* <p className="text-sm text-muted-foreground mb-4">Effective Date: {new Date().toLocaleDateString()}</p> */}
        <div className="space-y-4 text-sm leading-relaxed opacity-90">
          <p>Nature Pro Creators ("we," "our," or "us") respects your privacy and is committed to protecting the personal information you share with us. This policy explains our practices regarding our website and LinkedIn Lead Generation Forms.</p>
          
          <h3 className="font-bold mt-4">1. Information We Collect</h3>
          <p>We collect information you voluntarily provide, such as your Full Name, Email, Phone Number, Company Name, Job Title, and Location. We also automatically collect data like IP addresses, browser types, and cookies.</p>

          <h3 className="font-bold mt-4">2. How We Use Your Information</h3>
          <p>We use your data to respond to inquiries, provide services, send marketing communications (if permitted), and improve our website experience.</p>

          <h3 className="font-bold mt-4">3. LinkedIn Lead Ads</h3>
          <p>Data submitted via LinkedIn Lead Forms is used only for business communication related to our services. We do not sell or rent this information.</p>

          <h3 className="font-bold mt-4">4. Sharing and Security</h3>
          <p>We do not sell personal data. We may share it with trusted service providers or legal authorities when required. We implement reasonable security measures, though no internet transmission is 100% secure.</p>

          <h3 className="font-bold mt-4">5. Your Rights</h3>
          <p>You may request to access, correct, or delete your data, or opt out of marketing. Contact us at natureprocreators@gmail.com to exercise these rights.</p>
        </div>
      </section>

      {/* Terms of Use Section */}
      <section className="mb-12 pt-8 border-t">
        <h2 className="text-2xl font-semibold mb-4">Terms of Use</h2>
        <div className="space-y-4 text-sm leading-relaxed opacity-90">
          <p>By accessing this website, you agree to comply with these terms.</p>
          <p><strong>Prohibited Actions:</strong> You agree not to use the site for unlawful purposes, attempt unauthorized access, or disrupt website functionality.</p>
          <p><strong>Intellectual Property:</strong> All content, logos, and materials are the property of Nature Pro Creators and may not be reproduced without permission.</p>
          <p><strong>Liability:</strong> We are not liable for any direct or indirect damages resulting from the use of this website.</p>
        </div>
      </section>

      {/* Cookie Policy & Disclaimer */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t">
        <section>
          <h3 className="text-xl font-semibold mb-3">Cookie Policy</h3>
          <p className="text-sm opacity-90">This website uses cookies to improve experience and analyze traffic. Cookies may store user preferences, session info, and analytics data. You can manage these via your browser settings.</p>
        </section>
        <section>
          <h3 className="text-xl font-semibold mb-3">Disclaimer</h3>
          <p className="text-sm opacity-90">Information here is for general purposes only. We make no guarantees regarding accuracy. Any action taken based on this info is strictly at your own risk.</p>
        </section>
      </div>
    </div>
  );
};

export default Legal;