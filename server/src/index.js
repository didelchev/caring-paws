import express from 'express'
import routes from './routes.js';
import cors from 'cors'
import mongoose from 'mongoose'
import 'dotenv/config'

const dbUri = process.env.MONGO_URI

mongoose.connect(dbUri, { dbName: 'paws' })
    .then(() => console.log("DB Connected successfully !"))
    .catch((err) => console.log(`DB failed to connect: ${err}`))


const app = express();

const PORT = 5000;

app.use(cors())

app.use(express.json())

app.use(routes)

app.listen(PORT, () => {
    console.log('Server is listening on http://localhost:5000 ...')
})