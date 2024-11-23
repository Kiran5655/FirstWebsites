let a= prompt("enter a number");



// a=5  5*4=20 20+=4*3=12
        

// for (let i = a; i!=0; i--) {
//      let b = b*a*a-1;

// }

function fact(a){
    if(a<=1)
    {
        return a;
    }
    else{
       return a*fact(a-1);
    }

}

console.log(fact(a));

