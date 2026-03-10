import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sanne de Vries",
    role: "Freelance webdesigner",
    quote:
      "MailBuddy bespaart me elke dag minstens 20 minuten. Mijn klanten krijgen nu altijd professionele antwoorden, ook als ik met mijn hoofd bij een project zit.",
  },
  {
    name: "Mark Jansen",
    role: "Fotograaf",
    quote:
      "Ik was altijd slecht in e-mails. Nu klik ik op 'vriendelijke toon' en MailBuddy doet de rest. Mijn klanten merken het verschil!",
  },
  {
    name: "Linda Bakker",
    role: "Business coach",
    quote:
      "Eindelijk een tool die niet ingewikkeld is. Plakken, klikken, klaar. En voor maar €5 per maand — dat verdien ik in 1 bespaard uur terug.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-padding section-alt">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-bold uppercase tracking-widest text-primary">
            Ervaringen
          </span>
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl lg:text-5xl">
            Wat ondernemers zeggen
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card flex flex-col rounded-2xl p-8"
            >
              {/* Stars */}
              <div className="mb-5 flex gap-1">
                {[...Array(5)].map((_, si) => (
                  <Star
                    key={si}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>

              <p className="mb-6 flex-1 leading-relaxed text-foreground italic">
                "{t.quote}"
              </p>

              <div>
                <p className="text-sm font-bold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
