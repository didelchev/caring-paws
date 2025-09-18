import { Router } from "express";
import userService from "../services/userService.js";
import { getErrorMessage } from "../utils/errorUtils.js";


const userController = Router();

userController.post('/register', async (req, res) => {
    const { email, password, username } = req.body

    try {
        const result = await userService.register(email,username, password)
        res.json(result);
        
    } catch (err) {
        res.status(400).json({message: getErrorMessage(err)})
    }

    
});

userController.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await userService.login(email, password);

        res.json(result);
        
    } catch (err) {
        res.status(400).json({message: getErrorMessage(err)})
    }

    
});

export default userController