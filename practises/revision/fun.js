/* types of functions */

//normal function

function a (){
    console.log("hi");
};

//function expression: assigning varible to a function
let b = function(){
    console.log("hi");
};

//arrow function:
let c = ()=>{
    console.log("hi");
};

//arrow function : one liner : can't write return here
let d  = ()=>console.log("hi");


//IIFE : Immediately Invoked Function Expression
(function e (){
    console.log("hi");
})();

