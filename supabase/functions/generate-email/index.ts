import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `Jij bent MailMint, een AI-assistent die ondernemers helpt om snel professionele e-mailantwoorden te schrijven.

Regels voor elk antwoord:
1. Reageer altijd in dezelfde taal als de inkomende mail.
2. Gebruik de toon die de gebruiker kiest (vriendelijk, formeel, direct, luchtig).
3. Geef een volledig, professioneel en logisch e-mailantwoord.
4. Neem de inhoud van de originele mail correct over.
5. Voeg geen informatie toe die niet in de mail staat.
6. Houd het antwoord kort, duidelijk en zakelijk.
7. Gebruik altijd een begroeting en afsluiting.
8. Schrijf alsof de gebruiker een kleine ondernemer of zzp'er is.
9. Als er extra informatie/context is meegegeven, verwerk die op een natuurlijke manier in het antwoord.
10. Geef ALLEEN het e-mailantwoord terug, geen uitleg of toelichting.

Structuur van elk antwoord:
- Begroeting
- Duidelijk antwoord op de vraag of situatie
- Eventuele vervolgstap of verduidelijking
- Professionele afsluiting

Doel: Maak e-mailcommunicatie sneller, eenvoudiger en professioneler voor kleine ondernemers.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, tone, extraInfo } = await req.json();

    if (!email || !tone) {
      return new Response(JSON.stringify({ error: "Email en toon zijn verplicht." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const userMessage = `Ontvangen e-mail:
"""
${email}
"""

Gewenste toon: ${tone}
${extraInfo ? `\nExtra informatie/context:\n"""\n${extraInfo}\n"""` : ""}

Schrijf nu het e-mailantwoord.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userMessage },
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Te veel verzoeken, probeer het later opnieuw." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Geen credits meer beschikbaar." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI-fout opgetreden" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("generate-email error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Onbekende fout" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
