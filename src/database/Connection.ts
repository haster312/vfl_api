import Variable from "../config/Variable";
import { DataSource } from "typeorm"

export const Connection = new DataSource({
    type: "mysql",
    host: Variable.Database[Variable.Env].Host,
    port: 3306,
    username: Variable.Database[Variable.Env].User,
    password: Variable.Database[Variable.Env].Password,
    database: Variable.Database[Variable.Env].Name,
    entities: ["src/entity/*.ts"],
    logging: process.env.NODE_ENV == 'production' ?? false,
    synchronize: true,
});
