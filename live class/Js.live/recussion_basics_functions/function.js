/* function hi(name){
    console.log(`how are you ${name} ?`);
}
hi("raj");
hi("piyush, how are you ");


function add(a,b){
    console.log("add = : ",a+b);
}
function mul(a,b){
    console.log("mul= : ",a*b);
}
function div(a,b){
    console.log("div = : ", a/b);
}

var num1=Number(prompt("enter a number: "));
var num2 =Number(prompt("enter a number: "));
add(num1,num2);
mul(num1,num2);
div(num1,num2); */

function allowance(name,age){
    console.log("Good Morning ..... ",name);

    if(age>=18){
        console.log("you are invited in the party : ".toUpperCase());
    }
    else{
        console.log("dont COME ".toLowerCase());
    }
}
allowance("piyush",22);
allowance("Raj",17);
