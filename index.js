//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app=express();
const port=3000;
const __dirname=dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
});

// function validateIt(req,res,next){
//      if (req.body["password"]==="coding"){
//         res.sendFile(__dirname + "/public/secret.html")
//     }
//     else{
//         next()   
//     }
 
// } 

function validateIt(req,res,next){
    if (req.body["password"==="coding"]){
        next();
    }
    else{
        next();
    }
}

app.use(validateIt)

app.post("/check",(req,res)=>{
    if (req.body["password"]==="coding"){
        res.sendFile(__dirname + "/public/secret.html")
    }
    else{
        res.sendFile(__dirname + "/public/index.html");
    }
});

app.listen(port,()=>{
    console.log(`currently listening from port ${port}`);
});



// solution 1

//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

// import express from "express";
// import bodyParser from "body-parser";
// import { dirname } from "path";
// import { fileURLToPath } from "url";

// const app=express();
// const port=3000;
// const __dirname=dirname(fileURLToPath(import.meta.url));
// app.use(bodyParser.urlencoded({extended: true}));


// app.get("/",(req,res)=>{
//     res.sendFile(__dirname + "/public/index.html");
// });

// app.post("/check",(req,res)=>{
//     if (req.body["password"]==="coding"){
//         res.sendFile(__dirname + "/public/secret.html")
//     }
//     else{
//         res.sendFile(__dirname + "/public/index.html");
//     }
// });

// app.listen(port,()=>{
//     console.log(`currently listening from port ${port}`);
// });
