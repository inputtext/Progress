localStorage.setItem("naam","Piyush"); // Stores the name and value in the key value form
localStorage.getItem("naam"); //shows name on the console



/*
notes :
localStorage is the permanent storage of the browser & can only store text files of max 5 mb
every browser has memory which is one of the permanent storage = > localStorage
localStorage rules  :
Every data must be in  = string ;
Every value must be i  => key : value , which both should be in str =>""

To set the local storage :
localStorage.setItem = ("key in str" , "value in str") ;

To display the value  :
let value = localStorage.getItem =("key in str");
console.log(value); shows the value of the key on the console
 */

//array of objects in js :  heterogeneous : can store data of any datatype not like other languages like c which can only store 1 which is statically type
let user = [
    {
        name : "piyush",
        age : 69,
        address : "ABC",
        pincode : 23456,
    },
    {
        name : "raj",
        age : 69,
        address : "ABC",
        pincode : 23456,
    },
    {
        name : "PK",
        age : 69,
        address : "ABC",
        pincode : 23456,
    },
    {
        name : "Rajes",
        age : 69,
        address : "ABC",
        pincode : 23456,
    }
];


localStorage.setItem("users",JSON.stringify(user)); // set kare arr ko in the form of str
let users =localStorage.getItem("users"); // get kare on console
const OGvalue = JSON.parse(users); // converted to original data
console.log(users); //displays the str value which is of no use
console.log(OGvalue);// shows the data properly in original form













/*
to save the uppar array data which is not in string we use JSON.stringify() ans JSON.parse

JSON.stringify -  converts into the string,
JSON.parse() - converts into the original form / or in object


about JSON:
JSON -  JAVASCRIPT OBJECT NOTATION , not a part of js , it is just inspired by js objects
JSON is a formatter which is inspired by js objects and has methods to format

it is the global default language to set the data generation , and to communicate will all the other languages via data
JSON ability =>can transforms any data into the string and then back to the orginal form
 */



/*
diff  between the js and the JSON:

Js object :
let obj = {
    name : "piyush",
    age : 69,
    add : "ABC",
};

JSON
{
    "name" : "piyush",
    "age" : 69,
    "add" : "ABC"
} has key and value both in the form of string
  */
