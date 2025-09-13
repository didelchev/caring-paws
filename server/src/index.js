import express from 'express'
import routes from './routes.js';


const app = express();

const PORT = 5000;


app.use(routes)

app.listen(PORT, () => {
    console.log('Server is listening on http://localhost:5000 ...')
})