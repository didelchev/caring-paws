import { Router } from "express";
import dogService from "../services/dogService.js";


const dogController = Router();


dogController.get("/", async (req, res) => {
    const dogs = await dogService.getAll()

    res.json(dogs)
})



export default dogController