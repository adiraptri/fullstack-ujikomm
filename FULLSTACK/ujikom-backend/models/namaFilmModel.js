import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const NamaFilm = db.define(
    "nama_film",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        deskripsi: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        judul: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        durasi: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        rating: {
            type: DataTypes.DECIMAL(3, 1),
            allowNull: false,
        },
        genre_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        tableName: "nama_film",
        timestamps: false
    }
);

export default NamaFilm;
