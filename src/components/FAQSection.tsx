import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Wat is MailBuddy precies?",
    a: "MailBuddy is een simpele online tool waarmee je in seconden een professioneel e-mailantwoord kunt laten schrijven. Je plakt een ontvangen e-mail, kiest je gewenste toon, en MailBuddy genereert direct een antwoord dat je kunt kopiëren en versturen.",
  },
  {
    q: "Hoe werkt het gratis plan?",
    a: "Met het gratis plan kun je tot 10 mails per maand laten beantwoorden. Geen creditcard nodig, geen verplichtingen. Wil je meer? Upgrade naar Premium voor onbeperkt gebruik voor slechts €5 per maand.",
  },
  {
    q: "Is mijn data veilig?",
    a: "Absoluut. We slaan je e-mails niet op en gebruiken je data nooit om AI-modellen te trainen. Alle tekst wordt direct na verwerking verwijderd. Jouw privacy is onze prioriteit.",
  },
  {
    q: "Moet ik iets installeren?",
    a: "Nee! MailBuddy werkt volledig in je browser. Geen downloads, geen plugins, geen technische kennis nodig. Gewoon openen en beginnen.",
  },
  {
    q: "Kan ik MailBuddy opzeggen wanneer ik wil?",
    a: "Ja, je kunt je Premium-abonnement op elk moment opzeggen. Geen opzegtermijn, geen kleine lettertjes. Je houdt toegang tot het einde van je betaalperiode.",
  },
  {
    q: "Voor wie is MailBuddy bedoeld?",
    a: "MailBuddy is gemaakt voor zzp'ers, freelancers, coaches, fotografen, consultants, VA's en andere kleine ondernemers die professioneler willen mailen zonder er veel tijd aan kwijt te zijn.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-6 text-left"
      >
        <span className="pr-4 text-base font-semibold text-foreground md:text-lg">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all ${
          open ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="leading-relaxed text-muted-foreground">{a}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-bold uppercase tracking-widest text-primary">
            FAQ
          </span>
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl lg:text-5xl">
            Veelgestelde vragen
          </h2>
        </motion.div>

        <div className="mx-auto max-w-2xl">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
