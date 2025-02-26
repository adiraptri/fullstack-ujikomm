import express from 'express'
import { createTiket, deleteTiket, getTiket, getTiketById } from '../controllers/tiketController.js';

const router = express.Router();

router.post("/tiket/post", createTiket)
router.get("/tiket", getTiket)
router.get("/tiket/:id", getTiketById)
router.delete("/tiket/:id", deleteTiket)

export default router