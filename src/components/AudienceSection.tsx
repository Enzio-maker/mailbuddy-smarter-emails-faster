import { motion } from "framer-motion";
import { Briefcase, Camera, Code, HardHat, HeartHandshake, Palette } from "lucide-react";

const profiles = [
  { icon: Briefcase, label: "Freelancers" },
  { icon: HeartHandshake, label: "Coaches" },
  { icon: Camera, label: "Fotografen" },
  { icon: Code, label: "Webdesigners" },
  { icon: Palette, label: "Consultants & VA's" },
  { icon: HardHat, label: "Bouw & Techniek" },
];

export default function AudienceSection() {
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
            Gemaakt voor jou
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Of je nu fotograaf bent, coach of aannemer — MailBuddy past zich aan jouw stijl aan.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {profiles.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card flex flex-col items-center gap-3 rounded-2xl p-6 text-center transition-all hover:shadow-soft"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <p.icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-semibold text-foreground">{p.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
