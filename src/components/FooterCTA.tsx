import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function FooterCTA() {
  return (
    <>
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-12 text-center md:p-20"
            style={{ background: "var(--hero-gradient)" }}
          >
            <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
              Klaar om slimmer te mailen?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-lg text-primary-foreground/80">
              Start vandaag nog gratis en ontdek hoeveel tijd MailBuddy je bespaart.
            </p>
            <a
              href="#pricing"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-8 py-3.5 text-base font-semibold text-primary transition-all hover:opacity-90"
            >
              Probeer gratis
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-12">
        <div className="container-narrow flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Mail className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground">MailBuddy</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 MailBuddy. Alle rechten voorbehouden.
          </p>
        </div>
      </footer>
    </>
  );
}
