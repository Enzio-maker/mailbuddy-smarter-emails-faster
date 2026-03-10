import { motion } from "framer-motion";
import { Clock, ShieldCheck, PiggyBank, CheckCircle } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Tijdsbesparing",
    desc: "Bespaar tot 30 minuten per dag op e‑mails. Meer tijd voor je échte werk.",
  },
  {
    icon: CheckCircle,
    title: "Professionaliteit",
    desc: "Altijd foutloze, goed geformuleerde antwoorden — ook als je haast hebt.",
  },
  {
    icon: ShieldCheck,
    title: "Consistentie",
    desc: "Dezelfde professionele toon in elke e-mail, ongeacht je humeur of drukte.",
  },
  {
    icon: PiggyBank,
    title: "Betaalbaar",
    desc: "Goedkoper dan een VA, slimmer dan een template. Vanaf €9 per maand.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Waarom MailBuddy?
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card flex gap-5 rounded-2xl p-8"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <b.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-bold text-foreground">{b.title}</h3>
                <p className="text-muted-foreground">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
