import React from "react";
import { Mail, Phone, Globe } from "lucide-react";

const InstagramIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Footer = () => {
  const currentYear = 2024; // Sticking to 2024 to match the mockup image exactly

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="w-full bg-secondary-bg border-t border-glass pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-12">
          {/* Left Column: Branding */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <h2 className="font-hero text-4xl sm:text-5xl md:text-6xl font-bold uppercase text-warm-beige/90 tracking-[-0.05em] leading-none transform scale-x-[0.7] scale-y-[1.4] origin-left inline-block my-2">
              POORNIMA
            </h2>
            <div className="flex flex-col gap-1 text-[12px] md:text-[13px] text-warm-beige/70 font-body font-light tracking-[0.05em]">
              <p>Graphic Designer & Creative Thinker</p>
              <p>Based in Mumbai, India. Available Worldwide.</p>
            </div>
          </div>

          {/* Middle Column: Navigation */}
          <div className="md:col-span-3 md:col-start-7 flex flex-col gap-4">
            <h3 className="font-body text-[10px] tracking-[0.25em] font-bold text-warm-beige/50 uppercase">
              NAVIGATION
            </h3>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-[13px] md:text-[14px] text-warm-beige hover:text-rose transition-colors duration-300 relative py-1 inline-block group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-rose transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Let's Connect */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h3 className="font-body text-[10px] tracking-[0.25em] font-bold text-warm-beige/50 uppercase">
              LET'S CONNECT
            </h3>
            <div className="flex flex-col gap-3">
              {/* Email */}
              <a
                href="mailto:poornimanaikwade299@gmail.com"
                className="flex items-center gap-3 text-[12px] md:text-[13px] text-warm-beige hover:text-rose transition-colors duration-300 group cursor-pointer relative z-10 w-fit"
              >
                <Mail className="w-4 h-4 text-warm-beige/50 group-hover:text-rose transition-colors duration-300 flex-shrink-0" />
                <span className="underline decoration-warm-beige/30 group-hover:decoration-rose/50">
                  poornimanaikwade299@gmail.com
                </span>
              </a>
              {/* Phone */}
              <a
                href="tel:+918591073838"
                className="flex items-center gap-3 text-[12px] md:text-[13px] text-warm-beige hover:text-rose transition-colors duration-300 group cursor-pointer relative z-10 w-fit"
              >
                <Phone className="w-4 h-4 text-warm-beige/50 group-hover:text-rose transition-colors duration-300 flex-shrink-0" />
                <span>8591073838</span>
              </a>
              {/* Instagram handle */}
              <a
                href="https://instagram.com/bytheway.pooh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[12px] md:text-[13px] text-warm-beige hover:text-rose transition-colors duration-300 group"
              >
                <InstagramIcon className="w-4 h-4 text-warm-beige/50 group-hover:text-rose transition-colors duration-300" />
                <span className="underline decoration-warm-beige/30 group-hover:decoration-rose/50">
                  @bytheway.pooh
                </span>
              </a>
            </div>

            {/* Social Icons row */}
            <div className="flex items-center gap-6 mt-3 text-warm-beige/70">
              <a
                href="https://instagram.com/bytheway.pooh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-rose transition-colors duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-[18px] h-[18px]" />
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-rose transition-colors duration-300 font-body font-bold text-[14px] leading-none"
                aria-label="Behance"
              >
                Be
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-rose transition-colors duration-300 font-body font-bold text-[14px] leading-none"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="#"
                className="hover:text-rose transition-colors duration-300"
                aria-label="Website"
              >
                <Globe className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-glass pt-8 mt-2 flex flex-col md:flex-row items-center justify-between gap-4 text-warm-beige/40 text-[11px] font-body tracking-[0.05em]">
          <p>© {currentYear} Poornima. All Rights Reserved.</p>
          <div className="flex items-center gap-1">
            <span>Designed & Developed with</span>
            <span className="text-rose text-[12px]" aria-label="love">
              ♥
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
