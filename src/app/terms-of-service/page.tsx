export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#1E648A] min-h-[220px] flex flex-col justify-center items-center py-12">
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-5"></div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-display font-bold tracking-tight text-white sm:text-5xl mb-4">
              Terms of Service
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
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the website firstbiotech.com (the "Site"), owned and operated by Първа Биотех Ко ООД (UIC 208104889) ("we", "us", "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Site.
          </p>

          <h2>2. Use of the Website</h2>
          <p>
            You agree to use the Site only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the Site. The content on this Site is for informational purposes only.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            All content included on the Site, such as text, graphics, logos, images, and software, is the property of Първа Биотех Ко ООД or its content suppliers and protected by Bulgarian and international copyright laws. You may not reproduce, distribute, or create derivative works from any content without our express written permission.
          </p>

          <h2>4. Disclaimers</h2>
          <p>
            The Site and its content are provided on an "as is" and "as available" basis without any warranties of any kind, express or implied. We do not warrant that the Site will be error-free or uninterrupted. We disclaim all liability for any damages arising from your use of, or inability to use, the Site.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Първа Биотех Ко ООД shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the Site.
          </p>

          <h2>6. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the Republic of Bulgaria, without regard to its conflict of law provisions.
          </p>

          <h2>7. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page. Your continued use of the Site after such changes constitutes your acceptance of the new Terms.
          </p>

          <h2>8. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
          <p>
            Първа Биотех Ко ООД<br />
            Email: info@firstbiotech.com
          </p>
        </div>
      </div>
    </div>
  )
} 