import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();

  const links = [
    { path: "/", label: "Home" },
    { path: "/schedule", label: "Schedule" },
    { path: "/bridal-party", label: "Bridal Party" },
    { path: "/rsvp", label: "RSVP" },
    { path: "/chat-bot", label: "Chat" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#D4C5B9]/95 backdrop-blur-sm border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <Link
            to="/"
            className="font-script text-3xl text-[#430813]"
          >
            A & J
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-[0.2em] transition-colors ${
                  location.pathname === link.path
                    ? "text-[#430813] font-medium"
                    : "text-[#1A1A1A]/60 hover:text-[#430813]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}