import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const User = db.define(
    "user",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nama: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: true,
        },
    },
    {
        tableName: "user",
        timestamps: false
    }
);
export default User;