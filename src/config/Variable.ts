import * as dotenv from 'dotenv';
dotenv.config();
import path from 'path';


export default {
    Env: process.env.NODE_ENV ?? 'development',
    ServerPort: process.env.PORT,
    Database: {
        test: {
            Host: 'localhost',
            Name: 'test_db',
            User: 'root',
            Password: 'root',
        },
        development: {
            Host: process.env.DATABASE_HOST,
            Name: process.env.DATABASE_NAME,
            User: process.env.DATABASE_USER,
            Password: process.env.DATABASE_PASSWORD,
        },
        production: {
            Host: process.env.DATABASE_HOST,
            Name: process.env.DATABASE_NAME,
            User: process.env.DATABASE_USER,
            Password: process.env.DATABASE_PASSWORD,
        }
    },
    PublicFileName: "public/images",
    UploadPath: path.join(__dirname, "../../public/images")
}