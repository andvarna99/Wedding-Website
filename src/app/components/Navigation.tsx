import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";


export default function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/schedule", label: "Schedule" },
    { path: "/bridal-party", label: "Bridal Party" },
    { path: "/rsvp", label: "RSVP" },
    { path: "/chat-bot", label: "FAQ Chat" },
  ];

  return (
      <nav className="sticky top-0 z-50 bg-[#250201]/95 backdrop-blur-sm border-b border-[#D4C5B9]/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Name */}
            <Link
                to="/"
                className="font-script text-3xl text-[#8B5A3C]"
                onClick={() => setMobileMenuOpen(false)}
            >
              A & J
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-6">
              {links.map((link) => (
                  <Link
                      key={link.path}
                      to={link.path}
                      className={`text-[#D4C5B9] hover:text-[#8B5A3C] text-lg tracking-[0.2em] transition-colors ${
                          location.pathname === link.path
                              ? "text-[#8B5A3C] font-medium"
                              : "text-[#1A1A1A]/60 "
                      }`}
                  >
                    {link.label}
                  </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-[#D4C5B9] p-2 flex-shrink-0"
                aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Links */}
          {mobileMenuOpen && (
              <div className="lg:hidden pb-4 space-y-2">
                {links.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-[#D4C5B9] hover:text-[#8B5A3C] block py-3 text-lg tracking-[0.2em] transition-colors ${
                            location.pathname === link.path
                                ? "text-[#8B5A3C] font-medium"
                                : "text-[#1A1A1A]/60"
                        }`}
                    >
                      {link.label}
                    </Link>
                ))}
              </div>
          )}
        </div>
      </nav>
  );
}