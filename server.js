import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) =>
  res.status(200).send("API is running successfully!")
);

const genAI = new GoogleGenerativeAI(process.env.PASSWORD_API);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const chat = model.startChat({
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Olá, qual seu nome e quem é você?",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "Olá! Eu sou a API do Gemini. Sou especializado em responder quaisuer perguntas. Como posso ajudar hoje?",
        },
      ],
    }
  ],
});

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  await chat.sendMessage("Você é o Gemini. És especializado em responder quaisquer perguntas de forma simples e conversando como se fosse amigo do usuário.");

    try {
      const result = await chat.sendMessage(userMessage);
      res.status(200).json({ response: result.response.text() });
    } catch (error) {
      console.error(error);
      res.status(500).json({ response: "Erro ao processar a mensagem." });
    }
});

app.listen(3000, () => {
  console.log("Server is running successfully!");
});

