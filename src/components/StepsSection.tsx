import { motion } from "framer-motion";
import { ClipboardPaste, Palette, Sparkles } from "lucide-react";

const steps = [
  {
    icon: ClipboardPaste,
    title: "Plak je mail",
    description: "Kopieer de e-mail die je hebt ontvangen en plak deze in MailBuddy.",
  },
  {
    icon: Palette,
    title: "Kies je toon",
    description: "Formeel, vriendelijk, kort of uitgebreid – jij kiest hoe je overkomt.",
  },
  {
    icon: Sparkles,
    title: "MailBuddy schrijft je antwoord",
    description: "Binnen enkele seconden heb je een professioneel antwoord klaar om te versturen.",
  },
];

export default function StepsSection() {
  return (
    <section id="steps" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Zo simpel is het
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            In drie stappen naar het perfecte antwoord.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card group relative rounded-2xl p-8 transition-all hover:shadow-soft"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <step.icon className="h-6 w-6" />
              </div>
              <span className="absolute top-6 right-6 text-4xl font-extrabold text-muted/60">
                {i + 1}
              </span>
              <h3 className="mb-2 text-xl font-bold text-foreground">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
