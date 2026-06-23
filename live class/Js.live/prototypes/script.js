var arr  = [1,2,3,4];

console.log(arr.__proto__); // gives all the methods avaliable in the array.

console.log(arr.__proto__.__proto__); //gives the methods of the object

console.log(arr.__proto__.__proto__.__proto__); //gives null

/*
1 time proto on arr -  gives the methods of the array
2 times proto on the arr -  gives the methods of object
3 times proto on the arr  - gives null */

console.log("---------------------")

let object ={
    name  : "",
};

console.log(object.__proto__);// gives all the methods available in the objects

console.log(object.__proto__.__proto__); //gives null since no methods inside object


//prototyple inheritence
var college = {
    name : "ABX",
    age : 99,
    stds : "good",
    saySlogan: function(){
        console.log("hii");
    },
};

var user = {
    userName : "piyush",
    age : 22,
};


user.__proto__ =college; // user can inherit things from the college now
console.log(college.__proto__); // = user's object in proto


console.log("prototype chaining ")
//prototyple chaining

var college2 ={
    name : "IIT B ",
    rating: "best ",
    stds : 3000,
    saySlogan : ()=>{
        console.log("hiii this is iitb");
    },
};

var branch ={
    bname : "CSE",
    stds : "300",
    saySlogan : ()=>{
        console.log("hi this is cse branch : ");
    },
    sub : ["ASM", "CD", "TOC"],
};

var user1 = {
    name :"raja",
    age :30,
    marks : 100,
};

user1.__proto__ = branch; //object user1's properties is now equal to the branch  , we can acccess the branch's properties via the user (inheritence)
branch.__proto__=college2; //branch's properties =  college


console.log(user1.saySlogan); // we are able to access the sayslogan property of the colllege 2 via the user now

console.log(user1.__proto__); //proto chaining : user=>branch=>college2=>null
