import { verify } from "argon2";
import jwt from "jsonwebtoken"

export const authenticateToken = (req, res, next) => {
    const authHeader = req.header['authorization'];
    const token = authHeader && authHeader.split ('')[1];

    if(!token){
        return res.status(401).json({massage: "Access Denied : No Token Provided"});
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded;

        next()
    } catch (error) {
        res.status(403).json("Invalid Or Expired", error)
    }
}