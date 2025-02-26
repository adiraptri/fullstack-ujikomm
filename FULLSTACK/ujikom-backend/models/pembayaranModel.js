import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Pembayaran = db.define(
    "pembayaran",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        id_tiket: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        harga_tiket: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true,
        },
        metode: {
            type: DataTypes.ENUM("credit card", "transfer bank",  "e-wallet"),
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM("pending", "sukses", "gagal"),
            allowNull: true,
        },
        tanggal_transaksi: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: "pembayaran",
        timestamps: false,
    }
);

export default Pembayaran;
