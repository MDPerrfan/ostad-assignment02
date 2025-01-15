import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import router from './routes/routes.js';

const app = express();
const port = 4000;
dotenv.config();

app.use(cors());
connectDB();
app.get('/', (req, res) => {
        res.send("API Working")
    })
    //routes
app.use('/api', router)
app.listen(port, () => {
    console.log("Server started!")
})