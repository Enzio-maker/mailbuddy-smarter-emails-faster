import { Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Tool", href: "/tool" },
  { label: "Voorbeelden", href: "/#examples" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Handle hash scrolling when navigating from another page
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  const renderLink = (link: typeof navLinks[0], mobile = false) => {
    const isHash = link.href.includes("#");
    const className = mobile
      ? "text-base font-medium text-foreground"
      : "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground";

    if (isHash) {
      return (
        <Link
          key={link.href}
          to={link.href}
          onClick={() => mobile && setMobileOpen(false)}
          className={className}
        >
          {link.label}
        </Link>
      );
    }

    return (
      <Link
        key={link.href}
        to={link.href}
        onClick={() => mobile && setMobileOpen(false)}
        className={className}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/85 shadow-soft backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-narrow flex h-16 items-center justify-between px-6 md:h-18">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary shadow-button">
            <Mail className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-extrabold text-foreground tracking-tight">MailBuddy</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => renderLink(link))}
        </nav>

        <Link
          to="/tool"
          className="hidden rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-button transition-all hover:opacity-90 md:inline-flex"
        >
          Probeer gratis
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Menu"
        >
          <span className={`h-0.5 w-5 rounded bg-foreground transition-all ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-5 rounded bg-foreground transition-all ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-5 rounded bg-foreground transition-all ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => renderLink(link, true))}
            <Link
              to="/tool"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-primary-foreground shadow-button"
            >
              Probeer gratis
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
