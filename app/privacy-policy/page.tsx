import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0c1116] text-[#f6f1ea] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#1c2a3a,transparent_55%)] opacity-80" />
      <div className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-[#b4793a] opacity-20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#2f5f6f] opacity-30 blur-3xl" />

      <header className="fixed top-0 w-full backdrop-blur bg-[#0c1116]/80 border-b border-white/10 z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between text-sm">
          <span className="font-semibold tracking-[0.2em] uppercase text-[#f6f1ea]">
            VanSlyke Ventures
          </span>
          <Link
            href="/"
            className="text-[#f6f1ea] hover:text-[#f0c27b] transition-colors"
          >
            Back to Home
          </Link>
        </nav>
      </header>

      <div className="relative max-w-4xl mx-auto px-6 pt-24 pb-16">
        <section className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur">
          <p className="text-[#f0c27b] uppercase tracking-[0.3em] text-xs mb-4">
            Privacy Policy
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-3">
            Your privacy matters.
          </h1>
          <p className="text-sm text-[#c7c0b6] mb-8">
            Last updated: February 5, 2026
          </p>

          <div className="space-y-8 text-sm text-[#c7c0b6]">
            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-[#f6f1ea]">Overview</h2>
              <p>
                This Privacy Policy explains how VanSlyke Ventures, LLC ("we",
                "our", or "us") collects, uses, and protects information when you
                visit this website, our provided applications, or contact us.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-[#f6f1ea]">
                Information We Collect
              </h2>
              <p>
                We may collect information you provide directly, such as your
                name, email address, and any details you include app communications.
                We may also collect basic technical information such as
                browser type, device type, and pages visited to help improve the
                site.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-[#f6f1ea]">
                How We Use Information
              </h2>
              <p>
                We use information to respond to inquiries, provide services,
                improve the website, and maintain the security and performance of
                our systems.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-[#f6f1ea]">
                Information Sharing
              </h2>
              <p>
                We do not sell your personal information. We use the information as needed to
                perform those functions and triage errors.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-[#f6f1ea]">Cookies</h2>
              <p>
                We may use cookies or similar technologies to understand site
                usage and improve your experience. You can control cookies
                through your browser settings.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-[#f6f1ea]">
                Data Security
              </h2>
              <p>
                We take reasonable measures to protect information from
                unauthorized access, disclosure, or misuse. No method of
                transmission or storage is completely secure, so we cannot
                guarantee absolute security.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-[#f6f1ea]">
                Changes to This Policy
              </h2>
              <p>
                This policy may be volatile. The "Last updated"
                date above reflects the most recent changes.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-[#f6f1ea]">Contact Us</h2>
              <p>
                If you have questions about this policy, contact me at{" "}
                <a
                  className="text-[#f6f1ea] hover:text-[#f0c27b] transition-colors"
                  href="mailto:vinny@vanslykeventures.com"
                >
                  vinny@vanslykeventures.com
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
