import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const IAConnect = await function IAConnection() {
  try {
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
      
    console.log("API connected successfully!");
    return chat;
  } catch (error) {
    res.status(500).send(error);
  }
};

export default IAConnect;