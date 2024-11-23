let a=  Math.floor(Math.random()*5);
let bb=  Math.floor(Math.random()*5);
let c=  Math.floor(Math.random()*5);
let d=  Math.floor(Math.random()*5);
let e=  Math.floor(Math.random()*5);

let color={
    1:"white",
    2:"red",
    3:"black",
    4:"blue"
    
}
let bgcolor={
    1:"green",
    2:"red",
    3:"black",
    4:"blue"
    
}
let b=document.getElementsByClassName("box");
b[a].style.backgroundColor=color[e];
b[bb].style.backgroundColor=color[d];
b[c].style.backgroundColor=color[c];
b[d].style.backgroundColor=color[bb];
b[e].style.backgroundColor=color[a];


b[a].style.color=bgcolor[a];
b[bb].style.color=bgcolor[bb];
b[c].style.color=bgcolor[a];
b[d].style.color=bgcolor[d];
b[e].style.color=bgcolor[e];
