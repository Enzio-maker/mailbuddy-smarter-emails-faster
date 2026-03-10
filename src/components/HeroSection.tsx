import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-44 lg:pb-32">
      {/* Background shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full opacity-20 animate-pulse-soft"
          style={{ background: "var(--hero-gradient)", filter: "blur(120px)" }}
        />
        <div
          className="absolute -bottom-24 -left-24 h-[400px] w-[400px] rounded-full opacity-15 animate-pulse-soft"
          style={{
            background: "var(--hero-gradient)",
            filter: "blur(100px)",
            animationDelay: "2s",
          }}
        />
        {/* Floating decorative elements */}
        <div className="absolute top-1/4 right-[15%] h-16 w-16 rounded-2xl border border-primary/10 bg-primary/5 animate-float" />
        <div
          className="absolute bottom-1/3 left-[12%] h-12 w-12 rounded-full border border-primary/10 bg-primary/5 animate-float"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-1/3 left-[20%] h-8 w-8 rounded-lg border border-primary/8 bg-primary/4 animate-float"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="container-narrow relative px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            Nu beschikbaar — start gratis
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
        >
          De makkelijkste manier voor kleine ondernemers om{" "}
          <span className="gradient-text">sneller en professioneler</span>{" "}
          te mailen.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-lg text-lg text-muted-foreground md:text-xl"
        >
          Plak je mail → kies toon → klaar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#demo"
            className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-button transition-all hover:opacity-90 hover:shadow-lg"
          >
            Probeer gratis
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#steps"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-8 py-4 text-base font-semibold text-foreground shadow-sm transition-all hover:shadow-card"
          >
            Hoe werkt het?
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 text-sm text-muted-foreground"
        >
          Geen creditcard nodig · 10 mails gratis
        </motion.p>
      </div>
    </section>
  );
}
