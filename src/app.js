import express from 'express';
import routes from './router/index.js';
import IAConnection from './config/geminiConnect.js';

const app = express();
app.use(express.json());
routes(app);

const IAConnect = await IAConnection();

export default app;