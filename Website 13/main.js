console.log("hello world");
const fs=require("fs");
console.log("starting");

fs.writeFile("kiran.txt", "Kiran is a good boy",()=>{
    console.log("done");
    fs.readFile("kiran.txt", (error, data)=>{
      console.log(error,data.toString())
    
    })
