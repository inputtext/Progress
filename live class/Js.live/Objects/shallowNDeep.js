var obj = {
    name : "Piyush",
    skills : ["Cp","Calligraphy","Appdev","Webdev"],
    collegeDetails : {
        collegeID : 4142 ,
        collegeAdd : "asdfghj",
        collegeName : "abc",
    },
};

var obj_shallow = {...obj}; //created a shallow copy of the OG object
console.log(obj_shallow);

//updation of the nested objects and arrays will affect both of the objects , the copied and the OG
obj_shallow.collegeDetails.collegeID = (String)("ABC");
console.log(obj_shallow.collegeDetails.collegeID); // ABC
console.log(obj.collegeDetails.collegeID);//ABC


//To solve this , we use JSON.stringify and then JSON.parse()

/* Syntax :
                JSON.stringify(object name):
                converts  (anything  => String)
                JSON.parse(variable in which stringify is stored
                converts  (String => Object)
*/

//Deep copy
var object = {
    name : "Piyush",
    skills : ["Cp","Calligraphy","Appdev","Webdev"],
    collegeDetails : {
        collegeID : 4142 ,
        collegeAdd : "asdfghj",
        collegeName : "abc",
    },
};

// for loop in object
for(let a in object ){
    console.log("objectssssssssss",a);
}

var a = JSON.stringify(object);
console.log(a); // prints all the content in the object in string format
var object2 =JSON.parse(a); // (new object )Converts the string into the object fully
console.log(object2);

object2.collegeDetails.collegeID = (String)("ABC");
console.log(object2.collegeDetails.collegeID);//ABC
console.log(object.collegeDetails.collegeID);//4142

//using the parse and the stringify won't affect the OG object


// Deep referencing in the array
var arr = [1,2,3,{name:"PK"}];
var arrr2 = structuredClone(arr); // Deep copy of the arr
arrr2[2] = [{name : "piyush"}];
console.log(arrr2[2]); // piyush
console.log(arr[2]); // 3
//instead of the structuredClone we can also use same methods as that used in the objects viz,.  JSON.stringify and parse
