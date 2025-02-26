import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ msg: "User not found!" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ msg: "Invalid Password" });
        }

        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });

        return res.status(200).json({ msg: "Login successfully", token });
    } catch (error) {
        return res.status(500).json({ msg: "Login failed", error: error.message });
    }
};


export const register = async (req, res) => {
    const {nama, email, password} = req.body;
    const hashedPassword = await bcrypt.hash(password,10);
    try{
        await db.query("INSERT INTO users(nama, email, password) VALUES (?,?,?)", [nama, email, hashedPassword])
        res.json({message : "User registed succesfully"});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};
