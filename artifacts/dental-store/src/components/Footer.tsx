import { SiWhatsapp } from "react-icons/si";

export function Footer() {
  return (
    <footer className="py-12 text-[hsl(28,36%,78%)]" style={{ background: 'hsl(18,60%,10%)' }}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="Dentique"
              className="h-9 w-9 rounded-full object-cover ring-1 ring-white/20"
            />
            <span className="text-lg font-bold tracking-tight text-[hsl(28,40%,90%)]" style={{ fontFamily: 'Georgia, serif' }}>
              Dentique
            </span>
          </div>
          <p className="text-sm text-[hsl(28,28%,62%)] max-w-xs text-center md:text-left">
            Professional-grade dental instruments tailored for students.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-3">
          <p className="text-sm text-[hsl(28,28%,62%)]">Need help? We're available 24/7</p>
          <a
            href="https://wa.me/201108350907"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 bg-[#25D366]/15 text-[#4ade80] hover:bg-[#25D366]/20"
            data-testid="link-footer-whatsapp"
          >
            <SiWhatsapp className="w-4 h-4 mr-2" />
            Contact us on WhatsApp
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-white/10 text-center md:text-left text-xs text-[hsl(28,22%,45%)]">
        &copy; {new Date().getFullYear()} Dentique. All rights reserved.
      </div>
    </footer>
  );
}
