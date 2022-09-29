import "reflect-metadata"
import { DataSource } from "typeorm"
import { Usuario} from "./model"

export const MariaDBDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "web_orm_insert_usuario_ts",
    synchronize: true,
    logging: false,
    entities: [Usuario],
    migrations: [],
    subscribers: [],
})




