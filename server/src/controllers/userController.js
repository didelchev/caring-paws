import { Router } from "express";


const userController = Router();

userController.post('/register', async (req, res) => {
    const { email, password } = req.body

    const result = await userService.register(email, password);

    res.json(result);
});

userController.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const result = await userService.login(email, password);

    res.json(result);
});

export default userController