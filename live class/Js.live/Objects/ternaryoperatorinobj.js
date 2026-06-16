/* var terobj = {
    canVote : (age)=>{
        var can = (age >=18)? ( "you are eligible for voting ") : ("you arent ") ;
        return can;
    },
};
var entage = Number(prompt("enter your age : "));
var vote = terobj.canVote(entage);
console.log(vote);
 */

var user = {
    canvote : (age)=>{
        var canUserVote = (age>=18)? ("yes,you are eligible for voting") : ("no,not yet voting for you"); //ternary operator
        return canUserVote;
    },//function
}; //object

var enterage = Number(prompt("enter your age : "));
var validOrNot =user.canvote(enterage);
console.log(validOrNot);

var obj2= {
    isValid : (age)=>{ // recieving the enterAge as an input (parameter)
        var Valid = (age>=21 && age<=35)? ("can apply for marriage"):("Can't apply for ,marriage");
        return (String)(Valid); // returned the value of Valid as a string as per the respective value prompted by the user
    },
};

var enterAge =Number(prompt("enter your age :"));
var Validd = obj2.isValid(enterAge); //passed the  prompted value to the function and stored in var Validd
console.log(Validd);








/* var obj3 = {
    checkAge : (age)=>{
        var vote = (age >=18 && age<=60)? ("yes,you can vote") : ("No,you cant vote");
        var marriage = (age>=21 && age<=35)? ("can marry") : ("you can't");
        return vote,marriage;
    },
};

var enter_age = Number(prompt("enter your age :"));
var valid_status=obj3.checkAge(enter_age);
console.log(valid_status);

 */

var arr =  [""];
arr.unshift(1);
arr["name"] = "pk";
console.log(arr)
console.log(arr[0]);//1
console.log(arr[1]);// empty string
console.log(arr["name"]);// pk , not at arr[2] , an obj form



 //---------------------------------------------------------------------//
//const lets you update/add the properties but not the dataype of the obj itself
//Object.seal(user) :  lets you update the existing values inside the obj but doesn't lets you add new properties/values inside the obj

const  objj = {
    name : "pk",
};
objj.age = 30;
console.log(objj); //valid , we can add properties
console.log(typeof(objj)); //object


//updating the object datatype
objj =Number ; //not valid
console.log(typeof(objj)); //error








