import express, { Router } from 'express'

const router = express.Router();

router.get('/', (req,res) => {
    res.status(200).json({
        code : "200",
        messege : "Succes",
        data: {
            messege : "System is healty!"
        }
    })
})

export default router