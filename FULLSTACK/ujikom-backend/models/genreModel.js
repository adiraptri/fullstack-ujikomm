import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Genre = db.define(
    "genre",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nama: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        deskripsi: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        tableName: "genre",
        timestamps: false
    }
);

export default Genre;
