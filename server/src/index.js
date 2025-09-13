import express from 'express'
import routes from './routes.js';
import cors from 'cors'



const app = express();

app.use(cors())

app.use(express.json())


const PORT = 5000;


app.use(routes)

app.listen(PORT, () => {
    console.log('Server is listening on http://localhost:5000 ...')
})