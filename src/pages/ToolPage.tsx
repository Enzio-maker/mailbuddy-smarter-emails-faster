import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";
import ToolSection from "@/components/ToolSection";

export default function ToolPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-8 md:pt-36 md:pb-12">
        <div className="container-narrow px-6 text-center">
          <span className="mb-4 inline-block text-sm font-bold uppercase tracking-widest text-primary">
            AI E-mail Tool
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Schrijf in seconden een <span className="gradient-text">professioneel antwoord</span>
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground">
            Plak je mail, kies een toon en MailBuddy schrijft een professioneel antwoord.
          </p>
        </div>
      </section>
      <ToolSection />
      <FooterCTA />
    </div>
  );
}
