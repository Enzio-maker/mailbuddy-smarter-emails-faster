import { Mail } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container-narrow flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Mail className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold text-foreground">MailBuddy</span>
        </div>
        <a
          href="#pricing"
          className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-button transition-all hover:opacity-90"
        >
          Probeer gratis
        </a>
      </div>
    </nav>
  );
}
