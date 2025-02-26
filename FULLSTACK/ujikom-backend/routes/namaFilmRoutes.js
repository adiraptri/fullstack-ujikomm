import express from 'express'
import { createNamaFilm, getNamaFilm, getNamaFilmById } from '../controllers/namaFilmController.js'

const router = express.Router()

router.post("/namaFilm/post", createNamaFilm)
router.get("/namaFilm", getNamaFilm)
router.get("/namaFilm/:id", getNamaFilmById)

export default router