const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const router = require('./routes/auth');

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

const connectDB = async () => {
    try{
        await mongoose.connect(
            process.env.MONGO_URI || "mongodb://localhost:27017/simple-auth-node-app"
        );
        console.log("MongoDB connected");
    }catch(error){
        console.error(error);
    }
};

connectDB();

app.use(express.json());
app.use("/api", router);

app.listen(port, () => {
    console.log('Server listening at http://localhost:'+port);
});