import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Gratis",
    price: "€0",
    period: "voor altijd",
    desc: "Probeer MailBuddy zonder verplichtingen.",
    features: ["5 mails per dag", "3 toonstijlen", "Geen creditcard nodig"],
    cta: "Start gratis",
    featured: false,
  },
  {
    name: "Pro",
    price: "€9",
    period: "per maand",
    desc: "Voor ondernemers die dagelijks mailen.",
    features: [
      "Onbeperkte mails",
      "Alle toonstijlen",
      "Eigen bedrijfsnaam in antwoorden",
      "Prioriteit support",
    ],
    cta: "Start 14 dagen gratis",
    featured: true,
  },
  {
    name: "Team",
    price: "€19",
    period: "per maand",
    desc: "Voor kleine teams tot 5 personen.",
    features: [
      "Alles van Pro",
      "Tot 5 gebruikers",
      "Gedeelde toonstijlen",
      "Facturatie op bedrijfsnaam",
    ],
    cta: "Neem contact op",
    featured: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Simpele, eerlijke prijzen
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Geen verborgen kosten. Opzeggen wanneer je wilt.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 transition-all ${
                plan.featured
                  ? "border-2 border-primary bg-card shadow-card scale-[1.02]"
                  : "glass-card"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                  Populairst
                </span>
              )}
              <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground">/ {plan.period}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{plan.desc}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full rounded-full py-3 text-sm font-semibold transition-all ${
                  plan.featured
                    ? "bg-primary text-primary-foreground shadow-button hover:opacity-90"
                    : "border border-border text-foreground hover:bg-secondary"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
