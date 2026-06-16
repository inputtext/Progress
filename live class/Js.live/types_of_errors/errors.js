//Types of errors in js
// 1. Reference error : When a variable is not declared / defined , and it is printed
var a =10 ;
console.log(a);
console.log(b); // reference error  : b is not defined
//however the code above the error still executes


// 2. Type error :  when a const variable is re-assigned a value
const d =10;
d=100;
console.log(d);//type error :  can't assign a value to the const/assingment to a const variable
// however the code above the error still executes


// 3. Syntax error :  When the predefined & build-in functions and keywords are not written in a proper way , this error pops up
/* varr c =10 ; *///syntax error :  unexpected identifier a
console.log(c);
// The whole code doesn't executes at all
