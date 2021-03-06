import Express from 'express';
// import cors from 'cors';
import bodyParser from "body-parser";
import Variable from './config/variable';
const app = Express();
const port = Variable.ServerPort ?? 5000;

app.use('/public', Express.static('public'));
app.use(bodyParser.json());

import { connection } from './database';

connection
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    });

import Router from "./controllers/Router";
app.use(Router());

app.listen(port, async () => {
    console.info(`Port ${port}.`);
});