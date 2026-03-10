import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Send, Mail, MessageSquare } from "lucide-react";

const tones = [
  { id: "friendly", label: "Vriendelijk", icon: "😊" },
  { id: "formal", label: "Formeel", icon: "👔" },
  { id: "direct", label: "Direct", icon: "🎯" },
  { id: "casual", label: "Luchtig", icon: "✌️" },
];

export default function DemoSection() {
  const [selectedTone, setSelectedTone] = useState("friendly");
  const [email, setEmail] = useState("");
  const [extraInfo, setExtraInfo] = useState("");
  const [generated, setGenerated] = useState(false);

  const sampleReply =
    selectedTone === "friendly"
      ? "Hoi Lisa,\n\nBedankt voor je bericht! Wat leuk dat je interesse hebt in een samenwerking. Ik ben zeker beschikbaar in week 12 en zou het heel fijn vinden om even te bellen over de mogelijkheden.\n\nZal ik dinsdag of woensdag voorstellen? Dan kunnen we alles rustig doornemen.\n\nGroetjes,\nJan"
      : selectedTone === "formal"
        ? "Geachte mevrouw De Vries,\n\nHartelijk dank voor uw bericht. Met genoegen bevestig ik mijn beschikbaarheid in week 12 voor een kennismakingsgesprek omtrent een mogelijke samenwerking.\n\nZou het u schikken om op dinsdag of woensdag een afspraak in te plannen?\n\nMet vriendelijke groet,\nJan Bakker"
        : selectedTone === "direct"
          ? "Hi Lisa,\n\nJa, ik ben beschikbaar in week 12. Dinsdag of woensdag werkt het beste. Laat maar weten welke dag en tijd je voorkeur heeft.\n\nGr,\nJan"
          : "Hey Lisa! 👋\n\nSuper dat je mailt! Week 12 past prima bij mij. Zullen we dinsdag of woensdag even bellen? Dan spreken we alles door.\n\nLaat maar weten!\n\nJan";

  return (
    <section id="demo" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground">
            <Sparkles className="h-3.5 w-3.5" />
            Probeer het zelf
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl mt-4">
            Ervaar MailBuddy <span className="gradient-text">in actie</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Plak een e-mail, kies je toon en zie direct het resultaat.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-card rounded-2xl overflow-hidden"
        >
          {/* Top bar */}
          <div className="flex items-center gap-2 px-6 py-3 border-b border-border bg-muted/30">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-destructive/60" />
              <span className="h-3 w-3 rounded-full bg-[hsl(45_80%_55%)]" />
              <span className="h-3 w-3 rounded-full bg-[hsl(140_50%_50%)]" />
            </div>
            <span className="ml-3 text-xs font-medium text-muted-foreground tracking-wide">MailBuddy</span>
          </div>

          <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border">
            {/* Left: Input */}
            <div className="p-6 md:p-8 space-y-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                  <Mail className="h-4 w-4 text-primary" />
                  Ontvangen e-mail
                </label>
                <textarea
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setGenerated(false); }}
                  placeholder="Plak hier de e-mail die je hebt ontvangen..."
                  className="w-full min-h-[160px] rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none transition-shadow"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                  <MessageSquare className="h-4 w-4 text-primary" />
                  Extra informatie
                </label>
                <textarea
                  value={extraInfo}
                  onChange={(e) => { setExtraInfo(e.target.value); setGenerated(false); }}
                  placeholder="Geef extra context of instructies mee, bijv. 'Verwijs naar factuur #123' of 'Ik ben beschikbaar op dinsdag'..."
                  className="w-full min-h-[80px] rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none transition-shadow"
                />
              </div>

              {/* Tone selector */}
              <div>
                <label className="text-sm font-semibold text-foreground mb-3 block">Kies je toon</label>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {tones.map((tone) => (
                    <button
                      key={tone.id}
                      onClick={() => { setSelectedTone(tone.id); setGenerated(false); }}
                      className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
                        selectedTone === tone.id
                          ? "border-primary bg-primary/10 text-foreground ring-2 ring-primary/30"
                          : "border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground"
                      }`}
                    >
                      <span>{tone.icon}</span>
                      {tone.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setGenerated(true)}
                className="w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary px-6 py-4 text-base font-bold text-primary-foreground shadow-button transition-all hover:opacity-90 hover:shadow-lg"
              >
                <Send className="h-4.5 w-4.5" />
                Genereer antwoord
              </button>
            </div>

            {/* Right: Output */}
            <div className="p-6 md:p-8 flex flex-col">
              <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                <Sparkles className="h-4 w-4 text-primary" />
                Gegenereerd antwoord
              </label>
              <div className="flex-1 rounded-xl border border-input bg-background p-4 min-h-[280px]">
                {generated ? (
                  <motion.pre
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="whitespace-pre-wrap text-sm text-foreground font-sans leading-relaxed"
                  >
                    {sampleReply}
                  </motion.pre>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground gap-3">
                    <div className="h-12 w-12 rounded-2xl bg-muted flex items-center justify-center">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <p className="text-sm max-w-[200px]">Plak een e-mail en klik op 'Genereer antwoord'</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
