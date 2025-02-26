import express from 'express';
import { createKursi, getKursi, getKursiById } from '../controllers/kursiController.js';

const router = express.Router();

router.post("/kursi/post", createKursi);


export default router