import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Parse JSON payloads
  app.use(express.json());

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // AI Rewrite Endpoint
  app.post("/api/rewrite", async (req, res) => {
    try {
      const { draft, lang } = req.body;
      const isVi = lang === "vi";

      if (!draft || typeof draft !== "string" || draft.trim().length === 0) {
        return res.status(400).json({ error: "Draft message is required." });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
        // Safe fallback when API key is not configured yet
        return res.json({
          original: draft,
          rewritten: isVi 
            ? "Chào cậu, nếu cậu đang bận việc gì thì tụi mình để dịp khác nói chuyện nhé. Chúc cậu một ngày tốt lành!" 
            : "Hey, since you're busy right now, let's catch up another time. Hope you have a wonderful day!",
          explanation: isVi 
            ? "Mẹo: Khóa API Gemini chưa được cấu hình ở môi trường nhà phát triển. Đây là nội dung mẫu dự phòng. Hãy cấu hình GEMINI_API_KEY để kích hoạt tính năng viết lại thông minh thời gian thực!"
            : "Note: Gemini API key is not configured in the developer environment. This is a local fallback rewrite. Configure your GEMINI_API_KEY in the Secrets panel to enable real-time smart rewriting!",
          isFallback: true
        });
      }

      // Lazy initialization of GoogleGenAI
      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });

      const prompt = `You are a professional psychologist and communication expert specializing in healthy relationship boundaries and "Bơ tin nhắn" (Anti-Ghosting, respectful modern communication).
The user is drafting a message because they have been ignored/ghosted, or they are about to send an anxious, angry, passive-aggressive, or whiny double-text (e.g., "sao seen ko rep", "sao bơ thế", "có đó ko", "ghét tớ rồi à").

Your task is to analyze the draft and rewrite it into a "Khí chất & Văn minh" (dignified, respectful, and self-respecting) alternative. 
The rewrite should either:
1. Be a polite, low-pressure gentle reminder (if they still need a response for work/study)
2. Or a clean, dignified closure message (if it's a social/romantic chat where they want to stop waiting and regain their self-worth without sounding bitter or petty).

Original Draft: "${draft}"
Preferred Language for Response (rewritten text and explanation): ${isVi ? "Vietnamese (Tiếng Việt)" : "English"}

Provide your output in valid JSON matching this schema:
{
  "original": "the original draft",
  "rewritten": "the polite, dignified, calm rewritten message in the preferred language",
  "explanation": "a brief 1-2 sentence explanation in the preferred language explaining why this rewrite protects the user's self-esteem and maintains a high-value vibe, based on communication psychology."
}`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              original: { type: Type.STRING },
              rewritten: { type: Type.STRING },
              explanation: { type: Type.STRING },
            },
            required: ["original", "rewritten", "explanation"],
          },
        },
      });

      const text = response.text;
      if (!text) {
        throw new Error("No response text received from Gemini.");
      }

      const result = JSON.parse(text);
      res.json(result);
    } catch (error: any) {
      console.error("Rewrite error:", error);
      res.status(500).json({
        error: "Failed to process the rewrite request.",
        details: error?.message || String(error),
      });
    }
  });

  // Serve static files / Vite dev server
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
