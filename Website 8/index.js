  
let adj={
    0:"Crazy",
    1:"Amasing",
    2:"Fire"
}
let shop={
    0:"Engine",
    1:"Foods",
    2:"Garmets"
}
let name={
    0:"Bros",
    1:"Limited",
    2:"Hub"
}
let a = Math.floor(Math.random()*3)
let b = Math.floor(Math.random()*3)
let c = Math.floor(Math.random()*3)
console.log(adj[a]+shop[b]+name[c]);
