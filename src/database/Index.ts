import Variable from "../config/variable";
import { DataSource } from "typeorm"

export const connection = new DataSource({
    type: "mysql",
    host: Variable.Database.Host,
    port: 3306,
    username: Variable.Database.User,
    password: Variable.Database.Password,
    database: Variable.Database.Name,
    entities: ["src/entity/*.ts"],
    logging: process.env.NODE_ENV == 'production' ?? false,
    synchronize: true,
});
