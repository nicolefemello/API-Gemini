import IAController from "../controller/geminiController.js";

const IARoutesInit = (app) => {
    app.post("/chat", IAController.sendMessage);
}

export default IARoutesInit;