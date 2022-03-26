import Express from 'express';
const app = Express();

import bodyParser from "body-parser";

app.use('/public', Express.static('public'));
app.use(bodyParser.json());

import Routes from "./controllers/Routes";
app.use("/api", Routes());

app.get('/api/abc', (req, res) => {
    return res.json('abc');
});

export default app;
