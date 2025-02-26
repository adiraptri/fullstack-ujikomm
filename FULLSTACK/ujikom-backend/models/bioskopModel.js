import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Bioskop = db.define(
    "bioskop",
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
        lokasi: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        kapasitas: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    },
    {
        tableName: "bioskop",
        timestamps: false
    }
);

export default Bioskop;
