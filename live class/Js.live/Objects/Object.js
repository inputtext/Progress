/* object :
- Reference data type, CRUD , .keys and values,obj-in-obj and array in obj  */
// 2 way representation of data  - keys and values
var obj ={
    name : "Piyush Kanojiya",
    age : 22,
    address : "Somewhere",
    city  : "NGP",
    skills : ["Web dev","app dev","system design","DSA"],
    college : {
        college_name : "Ghrcemn",
        college_code : 4142,
        college_id : 2324+"CPF"+187,
        college_address : "MIDC,NGP",
    },
};

console.log(obj);//full obj
console.log(obj.name); //Piyush Kanojiya
console.log(obj.name + " ", obj.skills[3]);// Piyush kanojiya DSA
console.log(obj.name +" ", obj.college.college_name + " ", obj.college.college_id); //Piyush Kanojiya Ghrcemn 2324CPF187



//operations to perform
/* >Create - done
>Read
>Add new property
>Update new property
>delete
>keys and values to print
 */

//read
console.log(name);


//add new propert
obj.DOB =  "03/07/2000";
console.log(obj.DOB);


//Update new property
obj.city = "Nagpur";
console.log(obj.city);

//deletion of  an obj
/* delete obj.age;
console.log(obj.age); */


//keys and values
console.log("keys are : ", Object.keys(obj));
console.log("values are : ", Object.values(obj));



















