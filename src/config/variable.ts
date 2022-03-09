import * as dotenv from 'dotenv';
dotenv.config();
import path from 'path';

export default {
    ServerPort: process.env.PORT,
    MongoURI: process.env.MONGO_URI,
    PublicFileName: "public/images",
    UploadPath: path.join(__dirname, "../../public/images")
}