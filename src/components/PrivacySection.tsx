import { motion } from "framer-motion";
import { ShieldCheck, Trash2, EyeOff } from "lucide-react";

const items = [
  {
    icon: EyeOff,
    title: "Geen opslag van je mails",
    desc: "Je e-mails worden nergens opgeslagen. Na het genereren van je antwoord wordt alles direct verwijderd.",
  },
  {
    icon: ShieldCheck,
    title: "Geen training op jouw data",
    desc: "Je gegevens worden nooit gebruikt om AI‑modellen te trainen. Jouw data is en blijft van jou.",
  },
  {
    icon: Trash2,
    title: "Directe verwijdering",
    desc: "Alle ingevoerde tekst wordt na verwerking onmiddellijk gewist. Niets blijft achter.",
  },
];

export default function PrivacySection() {
  return (
    <section className="section-padding bg-surface-subtle">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Jouw privacy, onze prioriteit
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We nemen je gegevens serieus. Altijd.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-8 text-center"
            >
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
