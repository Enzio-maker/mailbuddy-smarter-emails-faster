import { motion } from "framer-motion";
import { Check, ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";

const plans = [
  {
    name: "Gratis",
    price: "€0",
    period: "voor altijd",
    desc: "Perfect om MailMint te proberen.",
    features: [
      "10 mails per maand",
      "4 toonstijlen",
      "Basis AI",
      "Werkt in elke browser",
      "Geen creditcard nodig",
    ],
    cta: "Start gratis",
    ctaLink: "/tool",
    featured: false,
  },
  {
    name: "Premium",
    price: "€5",
    period: "per maand",
    desc: "Voor ondernemers die dagelijks mailen.",
    features: [
      "Onbeperkte mails",
      "Snellere AI",
      "Extra toonstijlen",
      "Eigen bedrijfsnaam in antwoorden",
      "Prioriteit support",
      "Nieuwe features als eerste",
    ],
    cta: "Upgrade naar Premium",
    ctaLink: "/upgrade",
    featured: true,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="container-narrow px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <span className="mb-4 inline-block text-sm font-bold uppercase tracking-widest text-primary">
              Prijzen
            </span>
            <h1 className="text-3xl font-extrabold text-foreground md:text-4xl lg:text-5xl">
              Simpele, eerlijke prijzen
            </h1>
            <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
              Geen verborgen kosten. Geen lange contracten. Opzeggen wanneer je wilt.
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-2">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                className={`relative rounded-3xl p-8 lg:p-10 transition-all ${
                  plan.featured
                    ? "border-2 border-primary bg-card shadow-card scale-[1.03]"
                    : "glass-card"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-5 py-1.5 text-xs font-bold text-primary-foreground shadow-button">
                    Meest gekozen
                  </span>
                )}
                <h2 className="text-xl font-bold text-foreground">{plan.name}</h2>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold tracking-tight text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">/ {plan.period}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{plan.desc}</p>

                <ul className="mt-8 space-y-3.5">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-3 text-sm text-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.ctaLink}
                  className={`group mt-8 flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-bold transition-all ${
                    plan.featured
                      ? "bg-primary text-primary-foreground shadow-button hover:opacity-90"
                      : "border border-border bg-card text-foreground hover:shadow-card"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FooterCTA />
    </div>
  );
}
