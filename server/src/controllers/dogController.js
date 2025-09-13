import { Router } from "express";


const dogController = Router();

dogController.get("/", (req,res) => {
    res.send("Catalog Controller Works")

})



export default dogController