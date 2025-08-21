import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import router from './routes/index.js';
import cors from 'cors';
import "./config/Cloudnary.js";

dotenv.config();

const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Port=process.env.PORT || 6000;
const MongoDb=process.env.MONGO_URL;

mongoose.connect(MongoDb).then(()=>{
    console.log("MongoDB connected successfully");
    app.listen(Port,()=>{
        console.log(`Server is running on port ${Port}`);
    })
}).catch((err)=>{
    console.error("❌ MongoDB Connection Error:", err);
})
app.use('/api',router);