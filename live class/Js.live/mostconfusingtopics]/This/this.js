/* normal function :   Regular functions have a dynamic context /lexical context and thats why hold the value of the object
lexical context :  looking at the outer curly braces where the code was physically typed.  */

var obj = {
    name  : "Piyush",
    age :  22,
    getIntro : function (){
        console.log(`Hi,I am ${this.name},I am ${this.age} years old `);
        this.name =  "Piyush.R.Kanojiya"
    },
};
obj.getIntro(); // 1. Logs: "Hi, I am Piyush, I am 22 years old"
console.log(obj.name) // 2. Logs: "Piyush.R.Kanojiya" (Because it is successfully mutated )

// since this = whole object , we can use this.properties too





// arrow function
var obj1 = {
    name  : "Piyush",
    age :  22,
    getIntro :()=>{
        console.log(this);
    },
};
obj1.getIntro();//window object


"use strict ";
var obj2 = {
    name  : "Piyush",
    age :  22,
    getIntro : function (){
        console.log(this);
    },
};
console.log(obj2.getIntro()); //undefined in strict mode 

