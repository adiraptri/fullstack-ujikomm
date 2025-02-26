import express from 'express'
import { createGenre, getGenre, getGenreById } from '../controllers/genreController.js'

const router = express.Router()

router.post("/genre/post", createGenre)
router.get("/genre", getGenre)
router.get("/genre/:id", getGenreById)

export default router