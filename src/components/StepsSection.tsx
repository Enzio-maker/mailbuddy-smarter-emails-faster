import { motion } from "framer-motion";
import { ClipboardPaste, Palette, Sparkles } from "lucide-react";

const steps = [
  {
    icon: ClipboardPaste,
    step: "01",
    title: "Plak je mail",
    description: "Kopieer de e-mail die je hebt ontvangen en plak deze in MailMint. Meer hoef je niet te doen.",
  },
  {
    icon: Palette,
    step: "02",
    title: "Kies je toon",
    description: "Formeel, vriendelijk, kort of uitgebreid — jij bepaalt hoe je overkomt bij je klant.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "MailMint schrijft je antwoord",
    description: "Binnen enkele seconden heb je een professioneel antwoord klaar om te kopiëren en te versturen.",
  },
];

export default function StepsSection() {
  return (
    <section id="steps" className="section-padding section-alt">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-bold uppercase tracking-widest text-primary">
            Hoe het werkt
          </span>
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl lg:text-5xl">
            Drie stappen. Dat is alles.
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="glass-card group relative rounded-2xl p-8 lg:p-10"
            >
              <span className="absolute top-6 right-6 text-5xl font-extrabold text-muted/40 transition-colors group-hover:text-primary/15">
                {s.step}
              </span>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-accent-foreground transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-button">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">{s.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
