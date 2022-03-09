import mongoose from 'mongoose';
import Variable from '../config/variable';

export const connect = () => {
    // @ts-ignore
    mongoose.connect(Variable.MongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

    mongoose.connection.on('connected', () => {
        console.log("Connected to mongo DB");
    })
}