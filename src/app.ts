import Express from 'express';
// import cors from 'cors';
import bodyParser from "body-parser";
const app = Express();
const port = 5000;
app.use('/public', Express.static('public'))
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Port ${port}.`);
});