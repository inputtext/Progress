/* normal function */
function abc(){
    console.log("normal");
}

/* expression function */
var a = function(){
    console.log("expression function");
}

/* arrow function */
var b =(a)=>console.log("arrow function");

/* arrow function without parameter , or only 1 variable as a parameter  */
var c =z=>console.log("without ()");

/* Immediately invoked function expression  :IIFE*/
(function xyz (){
    console.log("IIFE");
})();

/* IIFE with arrow function and function exp */
var zz =(()=>console.log("IIFE with arrow"))();

/* IIFE with arrow function and without function exp */
(()=>console.log(""))()