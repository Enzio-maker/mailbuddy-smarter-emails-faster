import express from "express";
import cors from "cors";
import Anthropic from "@anthropic-ai/sdk";
import { createClient } from "@supabase/supabase-js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:5173" }));
app.use(express.json());

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

// AI Chat endpoint
app.post("/api/ai", async (req, res) => {
  const { messages, context } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "messages array is required" });
  }

  try {
    const systemPrompt = `You are MailBuddy, an AI email assistant. 
Your job is to help users write better emails faster.
You can:
- Draft new emails based on a brief description
- Improve tone, clarity, and professionalism of existing emails
- Suggest subject lines
- Shorten or expand email drafts
- Translate emails to a different language or tone (formal/informal)
${context ? `\nExtra context about the user: ${context}` : ""}
Always respond in the same language the user writes in.
Keep responses concise and actionable.`;

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      system: systemPrompt,
      messages: messages.map((m) => ({
        role: m.role,
        content: m.content,
      })),
    });

    const text = response.content
      .filter((block) => block.type === "text")
      .map((block) => block.text)
      .join("\n");

    res.json({
      reply: text,
      usage: response.usage,
    });
  } catch (error) {
    console.error("Anthropic API error:", error);
    res.status(500).json({ error: "AI service unavailable. Please try again." });
  }
});

app.listen(PORT, () => {
  console.log(`MailBuddy backend running on port ${PORT}`);
});
