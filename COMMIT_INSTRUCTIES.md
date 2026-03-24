# 📋 Instructies: AI-bestanden committen naar GitHub

## Bestanden die je moet toevoegen/vervangen

| Bestand | Actie |
|---|---|
| `server.js` | Vervangen (root van je project) |
| `src/hooks/useAIChat.ts` | Nieuw aanmaken |
| `src/components/AIChat.tsx` | Nieuw aanmaken |
| `.env.example` | Nieuw aanmaken (root) |

---

## Stap 1 – Dependency toevoegen

De backend heeft `@anthropic-ai/sdk` nodig. Voer uit in je terminal:

```bash
npm install @anthropic-ai/sdk
```

---

## Stap 2 – .env instellen (lokaal, NIET committen)

Maak een `.env` bestand aan in de root (als die nog niet bestaat) en voeg toe:

```
ANTHROPIC_API_KEY=sk-ant-JOUW_SLEUTEL_HIER
VITE_API_URL=http://localhost:3001
```

Haal je API key op via: https://console.anthropic.com/keys

Controleer dat `.env` in je `.gitignore` staat (dat is al zo).

---

## Stap 3 – Bestanden plaatsen

Kopieer de bestanden naar de juiste locaties in je project:

```
mailbuddy-smarter-emails-faster/
├── server.js               ← vervang de bestaande
├── .env.example            ← nieuw
├── src/
│   ├── components/
│   │   └── AIChat.tsx      ← nieuw
│   └── hooks/
│       └── useAIChat.ts    ← nieuw
```

---

## Stap 4 – AIChat gebruiken in je app

Voeg de component toe waar je hem wilt tonen, bijvoorbeeld in `src/pages/Index.tsx` of een andere pagina:

```tsx
import { AIChat } from "@/components/AIChat";

// In je JSX:
<AIChat />
```

---

## Stap 5 – Committen via de terminal

```bash
# Ga naar je projectmap
cd mailbuddy-smarter-emails-faster

# Bekijk wat er gewijzigd is
git status

# Voeg de bestanden toe
git add server.js
git add src/hooks/useAIChat.ts
git add src/components/AIChat.tsx
git add .env.example

# Commit met een duidelijke boodschap
git commit -m "feat: add AI chat with Anthropic backend (/api/ai) and AIChat component"

# Push naar GitHub
git push origin main
```

---

## Stap 6 – Committen via GitHub.com (zonder terminal)

Als je liever de GitHub UI gebruikt:

1. Ga naar https://github.com/Enzio-maker/mailbuddy-smarter-emails-faster
2. Navigeer naar het juiste pad (bijv. `src/components/`)
3. Klik op **"Add file" → "Create new file"**
4. Plak de bestandsnaam en inhoud
5. Klik **"Commit changes"**
6. Herhaal voor elk bestand

---

## Stap 7 – Vercel environment variables (productie)

Als je deployt via Vercel, voeg dan toe in het Vercel dashboard:

- **Settings → Environment Variables**
  - `ANTHROPIC_API_KEY` = jouw sleutel
  - `VITE_API_URL` = URL van je backend (of `/api` als je Vercel serverless gebruikt)

---

## ✅ Testen

Start lokaal met twee terminals:

```bash
# Terminal 1 – backend
node server.js

# Terminal 2 – frontend
npm run dev
```

Open http://localhost:5173 en zoek de `<AIChat />` component op.
