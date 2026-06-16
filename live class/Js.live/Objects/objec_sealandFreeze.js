const obj = {
    name : "pk",
    age : 22,
    college : "ghrcemn",
};

//obj = String; //invalid due to the const keyword
Object.seal(obj);
obj.name = "Piyush.Kanojiya"
console.log(obj.name); //updation of a property , valid ✔️
obj.occupation = "Student";
console.log(obj.occupation); //addition of a new property , invalid❌



"use strict";//forces the js to throw errors isntead of failing silently
const object  = {
    arr : [1,2,3,4],
    obj_username : {
        age : 22,
        name : "Piyush",
        skills : ["CP", "calligraphy"],
    },
    greet : (age)=>{
        var admission = (age>=18 && age<=30)?("can have admission"):("can't have admission");
        return admission ;
    },
}
//shallow freeze
Object.freeze(object);


//deep freeze
Object.freeze(object);
Object.freeze(object.arr);
Object.freeze(object.obj_username);
Object.freeze(object.skills);
object.arr[2] = 4;
console.log(object.arr[2]);


