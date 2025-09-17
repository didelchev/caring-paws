import { Router } from "express";
import dogService from "../services/dogService.js";
import { getErrorMessage } from "../utils/errorUtils.js";


const dogController = Router();


dogController.get("/", async (req, res) => {
    const dogs = await dogService.getAll()

    res.json(dogs)
})

dogController.get('/:dogId', async (req, res) => {
    const dog  = await dogService.getOne(req.params.dogId)

    res.json(dog)
})

dogController.post("/", async (req, res) => {
    const userId = req.user._id;
    const dogData = req.body;

    try {
       const dog =  await dogService.create(dogData, userId)
        res.json(dog)
    } catch (err) {
        res.status(400).json({ message: getErrorMessage(err)})
    }
})

dogController.delete("/:dogId", async (req, res) => {
    try{
        await dogService.delete(req.params.dogId)
        
        res.status(204).end()
    }
    catch(err){
        res.status(400).json({message: getErrorMessage(err)})
    }
})

dogController.put("/:dogId", async(req, res) => {
    const dogData = req.body;
    const dogId = req.params.dogId


    try {
        const updatedDog = await dogService.update(dogId, dogData)

        res.json(updatedDog)
    } catch (err) {
        res.status(400).json({ message: getErrorMessage(err) })
    }
})



export default dogController