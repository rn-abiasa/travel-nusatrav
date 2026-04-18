import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function Navbar() {
  return (
    <>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4">
          {/* Logo */}
          <div>
            <a
              href=""
              className="text-lg md:text-xl font-semibold tracking-tight"
            >
              NusaTrav.
            </a>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a
              href="#destinations"
              className="hover:text-foreground transition-colors"
            >
              Destinations
            </a>
            <a
              href="#services"
              className="hover:text-foreground transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#testimonials"
              className="hover:text-foreground transition-colors"
            >
              Reviews
            </a>
          </nav>

          {/* CTA Button */}
          <div>
            <Button>
              Buy a Ticket <ArrowUpRight />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
