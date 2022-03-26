import * as dotenv from 'dotenv';
dotenv.config();
import path from 'path';

export default {
    ServerPort: process.env.PORT,
    Database: {
        Host: process.env.DATABASE_HOST ?? 'localhost',
        Name: process.env.DATABASE_NAME,
        User: process.env.DATABASE_USER,
        Password: process.env.DATABASE_PASSWORD,
    },
    PublicFileName: "public/images",
    UploadPath: path.join(__dirname, "../../public/images")
}