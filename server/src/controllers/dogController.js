import { Router } from "express";
import dogService from "../services/dogService.js";


const dogController = Router();


dogController.get("/", async (req, res) => {
    const dogs = await dogService.getAll()

    res.json(dogs)
})

dogController.get('/:dogId', async (req, res) => {
    const dog  = await dogService.getOne(req.params.dogId)

    res.json(dog)
})



export default dogController