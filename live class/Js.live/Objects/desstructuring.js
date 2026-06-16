/* Destructuring in array */
var arr = [1,2,3,4,5,6,7];
var [a,b,...c] = arr; // ... on left of the = is Rest operator
console.log(a);
console.log(c); // c has rest of the elements

var arr2= [...arr];//spread opertor after the equals sign
console.log(arr2);


/* destructuring in object  */
var obj = {
    name : "Piyush Kanojiya",
    age : 22 ,
    college : "ghrcemn",
};

var {name , age , college } = obj;
console.log(name,age,college);
