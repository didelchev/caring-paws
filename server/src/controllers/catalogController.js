import { Router } from "express";


const catalogController = Router();

catalogController.get("/", (req,res) => {
    res.send("Catalog Controller Works")

})


export default catalogController