import { ArrowUpRight, MapPin, Mail, Phone } from "lucide-react";

const footerLinks = {
  Explore: [
    { label: "Destinations", href: "#destinations" },
    { label: "Services", href: "#services" },
    { label: "About Us", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
  ],
  Support: [
    { label: "Help Center", href: "#" },
    { label: "Booking Guide", href: "#" },
    { label: "Cancellation Policy", href: "#" },
    { label: "Contact Us", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

const socials = [
  { icon: <Mail className="size-4" />, href: "#", label: "Instagram" },
  { icon: <Mail className="size-4" />, href: "#", label: "Twitter" },
  { icon: <Mail className="size-4" />, href: "#", label: "YouTube" },
];

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="text-xl font-semibold tracking-tight">
              NusaTrav.
            </a>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Platform travel Indonesia terpercaya. Temukan destinasi impianmu
              dan buat setiap perjalanan tak terlupakan.
            </p>

            {/* Contact */}
            <div className="mt-5 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-3.5 shrink-0 text-primary" />
                <span>Jakarta Selatan, Indonesia</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="size-3.5 shrink-0 text-primary" />
                <span>halo@nusatrav.id</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="size-3.5 shrink-0 text-primary" />
                <span>+62 812 3456 7890</span>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-5 flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="size-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-sm font-semibold text-foreground mb-4">
                {group}
              </p>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="py-5 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} NusaTrav. All rights reserved.</p>
          <a
            href="#"
            className="flex items-center gap-1 hover:text-foreground transition-colors"
          >
            Back to top <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
