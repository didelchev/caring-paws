import { Router } from "express";


const authController = Router();

authController.get("/login", (req,res) => {
    res.send("Login works")
})

authController.get("/register", (req, res) => {
    res.send("Register Works")
})

export default authController