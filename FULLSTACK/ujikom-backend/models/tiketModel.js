import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Tiket = db.define(
    "tiket",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        id_waktu: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        id_pembayaran: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        jumlah: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        harga_total: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        nama_user: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        nomor_kursi: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    {
        tableName: "tiket",
        timestamps: false
    }
);

export default Tiket;
