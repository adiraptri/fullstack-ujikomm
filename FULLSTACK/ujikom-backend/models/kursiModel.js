import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Bioskop from "./bioskopModel.js"; 

const Kursi = db.define(
    "kursi",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        id_bioskop: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Bioskop, 
                key: "id"
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
        },
        nomor_kursi: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tipe_kursi: {
            type: DataTypes.ENUM("Reguler", "VIP", "Premium"),
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM("Tersedia", "Dipesan", "Rusak"),
            allowNull: false,
            defaultValue: "Tersedia",
        },
    },
    {
        tableName: "kursi",
        timestamps: false
    }
);

Kursi.belongsTo(Bioskop, { foreignKey: "id_bioskop" });
Bioskop.hasMany(Kursi, { foreignKey: "id_bioskop" });

export default Kursi;
