import express from "express";
import connectToMongo from "./database.js";
import { register, verifyOTP } from "./user.js";
import { config } from "dotenv";

const app = express();

config({
  path: "./config.env"
})
connectToMongo();

app.use(express.json());
app.post('/register', register)
app.post('/verifyOTP', verifyOTP)
app.get("/", (req, res) => {
  res.send("Hello World!")
 }
);

app.listen(4000, ()=>{
    console.log("server is working on port 4000")
})
