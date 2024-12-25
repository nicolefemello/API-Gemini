import express from 'express';
import IARoutesInit from './geminiRouter.js';

const routes = (app) => {
    app.get('/', (req, res) => res.status(200).send('API is running successfully!'));

    IARoutesInit(app);
}

export default routes;