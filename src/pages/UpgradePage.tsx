import { motion } from "framer-motion";
import { Check, ArrowRight, ShieldCheck, CreditCard, Zap, Mail, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";

const benefits = [
  "Onbeperkt e-mails genereren",
  "Snellere AI-antwoorden",
  "Extra toonstijlen beschikbaar",
  "Eigen bedrijfsnaam in antwoorden",
  "Prioriteit support",
  "Nieuwe features als eerste",
];

const trustItems = [
  { icon: ShieldCheck, text: "Veilig betalen via SSL" },
  { icon: CreditCard, text: "Geen verborgen kosten" },
  { icon: Zap, text: "Direct toegang na betaling" },
];

export default function UpgradePage() {
  const checkoutUrl = "#"; // Placeholder — vervang met echte checkout URL

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="container-narrow px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground">
              <Star className="h-3.5 w-3.5" />
              Premium
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl mt-4">
              Upgrade naar <span className="gradient-text">MailBuddy Premium</span>
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground">
              Onbeperkt professionele e-mails schrijven voor slechts €5 per maand.
              Meer tijd voor je échte werk.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-xl"
          >
            <div className="glass-card rounded-3xl p-8 lg:p-10">
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-extrabold tracking-tight text-foreground">€5</span>
                <span className="text-muted-foreground">/ per maand</span>
              </div>
              <p className="text-sm text-muted-foreground mb-8">Maandelijks opzegbaar. Geen verplichtingen.</p>

              <ul className="space-y-4 mb-10">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm font-medium">{b}</span>
                  </li>
                ))}
              </ul>

              <a
                href={checkoutUrl}
                className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-button transition-all hover:opacity-90 hover:shadow-lg"
              >
                Upgrade naar Premium
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Trust elements */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-border">
                {trustItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <item.icon className="h-4 w-4 text-primary" />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterCTA />
    </div>
  );
}
