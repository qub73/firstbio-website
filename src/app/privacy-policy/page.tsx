export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#1E648A] min-h-[220px] flex flex-col justify-center items-center py-12">
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-5"></div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-display font-bold tracking-tight text-white sm:text-5xl mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-white">
              Last Updated: April 2, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h2>1. Introduction</h2>
          <p>
            This Privacy Policy describes how Първа Биотех Ко ООД (UIC 208104889), referred to as "we", "us", or "our", collects, uses, and shares information about you when you use our website firstbiotech.com (the "Site"). We are committed to protecting your privacy in accordance with applicable data protection laws, including the General Data Protection Regulation (GDPR).
          </p>
          <p>
            Our registered address is 37A Fridtjof Nansen str., 1142 Sofia, Bulgaria.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            We may collect information you provide directly to us, such as when you fill out a contact form (e.g., name, email address, message). We may also collect limited information automatically through cookies and similar technologies regarding your usage of the Site (e.g., IP address, browser type, pages visited) for analytical purposes.
          </p>

          <h2>3. How We Use Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries submitted via the contact form.</li>
            <li>Improve and operate our Site and services.</li>
            <li>Analyze Site usage (typically anonymized or aggregated).</li>
            <li>Comply with legal obligations.</li>
          </ul>

          <h2>4. Legal Basis for Processing</h2>
          <p>
            We process your personal data based on legitimate interests (e.g., operating our Site, responding to inquiries) or your consent (e.g., for specific contact form submissions).
          </p>

          <h2>5. Data Sharing</h2>
          <p>
            We do not sell your personal data. We may share information with third-party service providers who perform services on our behalf (e.g., website hosting, analytics) under strict confidentiality agreements. We may also disclose information if required by law.
          </p>

          <h2>6. Data Security</h2>
          <p>
            We implement reasonable technical and organizational measures to protect your personal data against unauthorized access, loss, or destruction.
          </p>

          <h2>7. Your Rights Under GDPR</h2>
          <p>
            If you are in the European Economic Area (EEA), you have certain rights regarding your personal data, including the right to access, correct, delete, restrict processing, object to processing, and data portability. To exercise these rights, please contact us.
          </p>

          <h2>8. Cookies</h2>
          <p>
            Our Site may use cookies to enhance user experience and analyze traffic. You can manage your cookie preferences through your browser settings.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
          </p>

          <h2>10. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy or our data practices, please contact us at:</p>
          <p>
            Първа Биотех Ко ООД<br />
            37A Fridtjof Nansen str.<br />
            1142 Sofia, Bulgaria<br />
            Email: info@firstbiotech.com
          </p>
        </div>
      </div>
    </div>
  )
} 