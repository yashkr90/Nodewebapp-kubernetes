import express from "express";
import ejs from "ejs";
const app= express();
const port= 3000;

app.set('view engine', 'ejs');

app.get("/",(req,res)=>{
    let time = new Date().toLocaleTimeString();
    res.render("index",{time:time})

});

app.listen(port || process.env.port ,()=>{

    console.log(`Server is running on http://localhost:${port}`);
})