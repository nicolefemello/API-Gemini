import IAConnect from "../config/geminiConnect.js";

class IAController {
  static async sendMessage(req, res) {
    const chat = await IAConnect();
    const userMessage = req.body.message;

    await chat.sendMessage(
      "Você é o Gemini. És especializado em responder quaisquer perguntas de forma simples e conversando como se fosse amigo do usuário."
    );

    try {
      const result = await chat.sendMessage(userMessage);
      res.status(200).json({ response: result.response.text() });
    } catch (error) {
      console.error(error);
      res.status(500).json({ response: "Erro ao processar a mensagem." });
    }
  }
}

export default IAController;