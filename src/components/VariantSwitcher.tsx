import { useState, useEffect } from "react";

type Variant = "minimal" | "saas" | "warm";

const variants: { id: Variant; label: string }[] = [
  { id: "minimal", label: "Minimalistisch" },
  { id: "saas", label: "Modern SaaS" },
  { id: "warm", label: "Warm & Menselijk" },
];

const themeClasses: Record<Variant, string> = {
  minimal: "",
  saas: "theme-saas",
  warm: "theme-warm",
};

export default function VariantSwitcher() {
  const [active, setActive] = useState<Variant>("minimal");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("theme-saas", "theme-warm");
    const cls = themeClasses[active];
    if (cls) root.classList.add(cls);
    return () => {
      root.classList.remove("theme-saas", "theme-warm");
    };
  }, [active]);

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-1 rounded-full border border-border bg-card p-1 shadow-card">
      {variants.map((v) => (
        <button
          key={v.id}
          onClick={() => setActive(v.id)}
          className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
            active === v.id
              ? "bg-primary text-primary-foreground shadow-button"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {v.label}
        </button>
      ))}
    </div>
  );
}
