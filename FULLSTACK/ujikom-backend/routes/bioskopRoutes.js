import express from 'express'
import { createBioskop, deleteBioskop, getBioskop, getBioskopById } from '../controllers/bioskopController.js'

const router = express.Router();

router.post("/bioskop/post", createBioskop);
router.get("/bioskop", getBioskop);
router.get("/bioskop/:id", getBioskopById)
router.delete("/bioskop/:id", deleteBioskop)


export default router