import http from "node:http";
import fs from "node:fs";
import path from "node:path"
import { parse } from "node:url";
const PORT = 3000;

const __dirname = import.meta.dirname;
const filePath = path.join(__dirname, "index.html");
const filePathAbout = path.join(__dirname, "about.html");

const server = http.createServer((req,res) =>{
    const url = req.url;

    console.log(req.url);
    console.log(parse(url));


    switch(url){
        case "/":
            const content = fs.readFileSync(filePath);
            res.write(content); 
            break;
        case "/about":
            const aboutPage = fs.readFileSync(filePathAbout);
            res.write(aboutPage); 
            break;
    }

})
server.listen(PORT, ()=>{
        console.log('Server is running http://localhost:' + PORT);
    });