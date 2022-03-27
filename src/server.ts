import app from './app';
import Variable from './config/Variable';
const port = Variable.ServerPort ?? 5000;

import { Connection } from './database/Connection';

Connection
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    });

app.listen(port, async () => {
    console.info(`Port ${port}.`);
});