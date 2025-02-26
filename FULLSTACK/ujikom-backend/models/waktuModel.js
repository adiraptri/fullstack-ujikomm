import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Waktu = db.define(
    "waktu",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nama_film: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        id_bioskop: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_pembayaran: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        waktu_mulai: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        jam: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        tanggal: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    },
    {
        tableName: "waktu",
        timestamps : false
    }
);

export default Waktu;