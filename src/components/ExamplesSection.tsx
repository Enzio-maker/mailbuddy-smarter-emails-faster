import { motion } from "framer-motion";
import { useState } from "react";

const examples = [
  {
    label: "Offerte opvolgen",
    incoming: "Hoi, ik heb je offerte ontvangen maar wil er nog even over nadenken. Kan ik volgende week reageren?",
    reply:
      "Hoi Mark,\n\nGeen probleem! Neem rustig de tijd. Mocht je nog vragen hebben over de offerte, dan hoor ik het graag. Ik houd de plek voor je vrij tot vrijdag.\n\nVriendelijke groet,\nSanne",
    tone: "Vriendelijk",
  },
  {
    label: "Klacht afhandelen",
    incoming: "Ik ben niet tevreden over het resultaat. Dit is niet wat we hadden afgesproken.",
    reply:
      "Beste Lisa,\n\nDank je voor je eerlijke feedback. Ik begrijp dat het resultaat niet aan je verwachtingen voldoet en dat vervelend is. Laten we deze week even bellen zodat we dit samen kunnen oplossen.\n\nMet vriendelijke groet,\nTom",
    tone: "Professioneel",
  },
  {
    label: "Samenwerking afwijzen",
    incoming: "We willen graag met je samenwerken aan ons nieuwe project. Ben je beschikbaar?",
    reply:
      "Hoi Jasper,\n\nWat leuk dat jullie aan mij denken! Helaas zit mijn planning de komende maanden vol. Ik raad je aan om contact op te nemen met [collega]. Die doet vergelijkbaar werk en is uitstekend.\n\nSucces!\nEva",
    tone: "Hartelijk",
  },
  {
    label: "Factuurherinnering",
    incoming: "Kun je de factuur nog een keer sturen? Ik kan hem niet meer vinden.",
    reply:
      "Hoi David,\n\nNatuurlijk, bij deze stuur ik de factuur opnieuw mee (zie bijlage). Het factuurnummer is #2024-087 met een betalingstermijn van 14 dagen.\n\nLaat het weten als je nog vragen hebt!\n\nGroet,\nMarieke",
    tone: "Zakelijk",
  },
];

export default function ExamplesSection() {
  const [active, setActive] = useState(0);
  const ex = examples[active];

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
            Zie het in actie
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Echte situaties, echte antwoorden.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {examples.map((e, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                active === i
                  ? "bg-primary text-primary-foreground shadow-button"
                  : "bg-secondary text-secondary-foreground hover:bg-accent"
              }`}
            >
              {e.label}
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid gap-6 md:grid-cols-2"
        >
          <div className="glass-card rounded-2xl p-6">
            <span className="mb-3 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
              Ontvangen e-mail
            </span>
            <p className="whitespace-pre-line text-muted-foreground">{ex.incoming}</p>
          </div>
          <div className="glass-card rounded-2xl border-primary/20 p-6">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                MailBuddy antwoord
              </span>
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                {ex.tone}
              </span>
            </div>
            <p className="whitespace-pre-line text-foreground">{ex.reply}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
