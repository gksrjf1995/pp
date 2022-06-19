import express from "express"

export const self = express.Router();

self.get("/",(req,res)=>{
    return res.send("self 메인");
});



