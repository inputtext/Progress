var evenOrOdd =function(num){
    if(num%2 ===0){
        return "even";
    }
    else{
        return "odd";
    }
};

var result =evenOrOdd(10);
console.log(result);

var greet = function(name,age){
    console.log(`hello:${name},you are  ${age}years old`);
}

greet("piyush",22);


var rect =(width,height)=>{
    let area = width*height;
    return area;
}

var inp1 = Number(prompt("enter the width of the rect:"));
var inp2 = Number(prompt("enter the height of the rect:"));
var result =rect(inp1,inp2);
console.log(result);


var counter = ()=>{
    let count=0;

    return function couninc(){
        count ++;
        return count;
    }
}

