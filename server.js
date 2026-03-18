import express from "express";
import cors from "cors";
import OpenAI from "openai";

const app = express();
app.use(cors());
app.use(express.json());

// Maak verbinding met OpenAI
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Endpoint waar jouw website straks naartoe stuurt
app.post("/generate", async (req, res) => {
  const { email, tone } = req.body;

  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `Je bent een AI die e-mails herschrijft in de toon: ${tone}.`
        },
        {
          role: "user",
          content: email
        }
      ]
    });

    const reply = response.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Er ging iets mis." });
  }
});

// Start server
app.listen(3000, () => {
  console.log("Server draait op poort 3000");
});

