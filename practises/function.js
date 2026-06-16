/* Normal functioon */
function name (){
    return  false ;
}
name();

/* function expression */
var a = function (name){
    return `how are you ${name}?`;
}
var b =a("PK");
console.log(b);


/* arrow function */
var z=(naaam)=>{
    return `how are you ${naaam}`;
};
var x = b("piyush ");

/* arrow fucntion but one line */
var y=()=> console.log("hi");


/* IIFE */
(function (){
    return "IIFE";
})();



var arr =[1,2,3,4,5,65];
