import express from "express"
import { createWaktu, getWaktu, getWaktuById, updateWaktu, deleteWaktu } from "../controllers/waktuController.js";
const router = express.Router();

router.post("/waktu/post", createWaktu)
router.get("/waktu", getWaktu)
router.get("/waktu/delete/:id", getWaktuById)
router.put("/waktu/update/:id", updateWaktu)
router.delete("/waktu/:id", deleteWaktu)

export default router