import { Sequelize } from "sequelize";
import "dotenv/config"


const db = new Sequelize(process.env.DB_NAME, "root", "", {
    dialect: "mysql",
    database : "film",
})

export  default db