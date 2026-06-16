/* Object is very similar to that of the structs of the C language  */var a ={
    name : "Piyush",
    age: 22,
    city: "Nagpur"
};
console.log(a.name);// for accessing the element from an object , Dot operator is used , similar to that of the struct of C

//it prints the value of the key


console.log("OBJECT 1");

var obj1={
    model_name : "iPhone 17 pro",
    brand  : "APPLE",
    cost : "1.5Lakhs"
};
console.log(obj1.model_name); /* Access properties */

/* modifying */
obj1.model_name ="iPhone 16 pro"
console.log(obj1.model_name);

/* Add new properties */
obj1.color ="black,grey,manderine";
console.log(obj1.color);

console.log("OBJECT 2");

var obj2 ={
    brand_name : "Samsung",
    model_name : "Samsung S26 Ultra",
    cost : "2Lakhs"
};
console.log(obj2.model_name);
console.log(obj2.cost);


obj2.color="White,Porcelian,Obsidean"; //adding new property
console.log(obj2.color);

obj2.cost = "2.5laks";
console.log(obj2.cost); //Updating the value

/* obj init
acccesing
updating
adding new property */



