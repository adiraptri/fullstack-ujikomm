import db from "../utils/connection.js"
import Waktu from "./waktuModel.js";
import Tiket from "./tiketModel.js"
import Pembayaran from "./pembayaranModel.js"
import NamaFilm from "./namaFilmModel.js"
import Genre from "./genreModel.js"
import Bioskop from "./bioskopModel.js"

await db.sync({alter:true});    