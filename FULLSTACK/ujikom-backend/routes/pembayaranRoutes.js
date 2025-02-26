import express from 'express'
import { createPembayaran, deletePembayaran, getPembayaran, getPembayaranById } from '../controllers/pembayaranController.js';


const router = express.Router();

router.post("/pembayaran/post", createPembayaran)
router.get("/pembayaran", getPembayaran)
router.get("/pembayaran/:id", getPembayaranById)
router.delete("/pembayaran/:id", deletePembayaran)

export default router;