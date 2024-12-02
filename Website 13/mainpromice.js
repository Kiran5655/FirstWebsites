import fs from "fs/promises";
let a= await fs.readFile("kiran.txt");

console.log(a.toString());
console.log("hello kiran")