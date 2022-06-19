import express from "express"
import {self} from "./self.js"
import cors from "cors"
const app = express();


app.cors({
    origin : "http://localhost:5001"
});

app.get("/",(req,res)=>{
    return res.send("시작");
});

app.use("/self",self);

app.listen(5001,()=>{
    console.log("http://localhost:5001 연결");
});