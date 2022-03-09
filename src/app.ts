import Express from 'express';
// import cors from 'cors';
import bodyParser from "body-parser";
import Variable from './config/variable';
const app = Express();
const port = Variable.ServerPort ?? 5000;

app.use('/public', Express.static('public'));
app.use(bodyParser.json());

// Database Connection
import { connect } from './models/connection';
connect();
app.listen(port, async () => {
    console.info(`Port ${port}.`);
});