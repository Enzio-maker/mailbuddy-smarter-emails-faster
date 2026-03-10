import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function FooterCTA() {
  return (
    <>
      {/* CTA Banner */}
      <section className="section-padding section-alt">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl p-12 text-center md:p-20"
            style={{ background: "var(--hero-gradient)" }}
          >
            {/* Decorative blurs */}
            <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-primary-foreground/10 blur-3xl" />

            <div className="relative">
              <h2 className="text-3xl font-extrabold text-primary-foreground md:text-4xl lg:text-5xl">
                Klaar om slimmer te mailen?
              </h2>
              <p className="mx-auto mt-5 max-w-md text-lg text-primary-foreground/80">
                Start vandaag nog gratis en ontdek hoeveel tijd MailBuddy je bespaart.
              </p>
              <a
                href="#pricing"
                className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-primary-foreground px-8 py-4 text-base font-bold text-primary transition-all hover:opacity-90 hover:shadow-lg"
              >
                Probeer gratis
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <p className="mt-4 text-sm text-primary-foreground/60">
                Geen creditcard nodig · 10 mails gratis
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-12">
        <div className="container-narrow">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
                <Mail className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-extrabold text-foreground">MailBuddy</span>
            </a>

            {/* Links */}
            <nav className="flex flex-wrap items-center justify-center gap-6">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Prijzen</a>
              <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </nav>
          </div>

          <div className="mt-8 border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2026 MailBuddy. Alle rechten voorbehouden.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
