/* Normal function */
function add(a,b){
    return a+b;
};
var addition=add(10,20); //addtion =30
console.log(addition);

/* function expression */
var subs=function (a,b){
    return  a-b;
};
var substract=subs(10,10);
console.log(substract);

/* Arrow function */
var mul =(a,b)=>{
    return a*b;
};

var mull=(a,b)=>{
    /* return a*b; */
    console.log(a*b);
}
var promp=(num1,num2)=>{
    var num1 =Number(prompt("enter a number :"));
    var num2 =Number(prompt("enter a number :"));
    var result =mull(num1,num2);
    /* console.log(result); */
}
// promp();

/* OR */
/* var mull=(a,b)=>{
    return a*b;
    
var promp=(num1,num2)=>{
    var num1 =Number(prompt("enter a number :"));
    var num2 =Number(prompt("enter a number :"));
    var result =mull(num1,num2);
    console.log(result);
}
promp(); */

/* Arrow function without () and one liner function */
var add = a=>{ return a;};
var addi=add(10);    
console.log(addi);

/* Immediately Invoked Function expression */
(function(a,b){
    return a*b;
})();

/* Anonymous function */
var ret=function(){
    return a; // fun without name ; but var assigned 
}






