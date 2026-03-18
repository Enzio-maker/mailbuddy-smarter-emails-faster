import { motion } from "framer-motion";
import { Clock, ShieldCheck, PiggyBank, CheckCircle, Globe } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Professionele toon",
    desc: "Altijd foutloze, goed geformuleerde antwoorden — ook als je haast hebt of moe bent.",
  },
  {
    icon: Clock,
    title: "Tijdsbesparing",
    desc: "Bespaar tot 30 minuten per dag op e-mails. Meer tijd voor je échte werk.",
  },
  {
    icon: ShieldCheck,
    title: "Consistentie",
    desc: "Dezelfde professionele toon in elke e-mail, ongeacht je humeur of drukte.",
  },
  {
    icon: PiggyBank,
    title: "Betaalbaar",
    desc: "Goedkoper dan een VA, slimmer dan een template. Slechts €5 per maand.",
  },
  {
    icon: Globe,
    title: "Toegankelijk overal",
    desc: "Werkt in elke browser, op elk apparaat. Geen installatie, geen gedoe.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-bold uppercase tracking-widest text-primary">
            Features
          </span>
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl lg:text-5xl">
            Waarom ondernemers kiezen voor MailMint
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card flex gap-5 rounded-2xl p-8"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <f.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="mb-1.5 text-lg font-bold text-foreground">{f.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
