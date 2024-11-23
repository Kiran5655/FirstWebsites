console.log("Welcome This is a faulty calculater");
// console.log("Enter what operations that want to be perform \n1.add \n2.sub \n3.mul \n4.div");
// switch (expression) {
//     case x:
//         // code block
//         break;
//     case y:
//         // code block
//         break;
//     default:
//         // code block
// }
// console.log("Enter two numbers that arthemetic operations have to be performed");
function add(a,b){
    let c= Math.random();
    if(c>0.1)
    {
        console.log(a+b);
    }
    else{
       console.log(a-b);
    }
}
function sub(a,b){
    let c= Math.random();
    if(c>0.1)
    {
        console.log(a-b);
    }
    else{
       console.log(a/b);
    }
}
function mul(a,b){
    let c= Math.random();
    if(c>0.1)
    {
        console.log(a*b);
    }
    else{
       console.log(a+b);
    }
}
function div(a,b){
    let c= Math.random();
    if(c>0.1)
    {
        console.log(a/b);
    }
    else{
       console.log(a**b);
    }

}
add(5,10);
sub(5,10);
mul(5,10);
div(5,10);
