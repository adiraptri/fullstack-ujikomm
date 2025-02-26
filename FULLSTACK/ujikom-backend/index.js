import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

//RUTE
import userRoutes from "./routes/userRoutes.js";
import indexRoutes from "./routes/indexRoutes.js"
import waktuRoutes from "./routes/waktuRoutes.js";
import namaFilmRoutes from "./routes/namaFilmRoutes.js";
import genreRoutes from "./routes/genreRoutes.js";
import tiketRoutes from './routes/tiketRoutes.js'
import bioskopRoutes from './routes/bioskopRoutes.js'
import kursiRoutes from './routes/kursiRoutes.js'
import pembayaranRoutes from './routes/pembayaranRoutes.js'
import authRouted from './routes/authRouted.js'

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", waktuRoutes)
app.use("api", kursiRoutes)
app.use("/api", tiketRoutes)
app.use("/api", userRoutes);
app.use("/api", namaFilmRoutes);
app.use("/api", genreRoutes);
app.use("/api", bioskopRoutes)
app.use("/api", pembayaranRoutes)
app.use("/api", authRouted)
app.use(indexRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server berjalan di port http://localhost:${PORT}`);
});
