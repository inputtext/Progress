var object = {
    name : "Aryan",
    age  : 30,
    skills : ["competetive Coding" , " web dev " ,"app dev"],
    profession : "BTech Student",
    nationality : "Indian",
    college_details : {
        college_name : "ABC college of enginerring",
        college_id  : 123,
        college_address : "Planet Earth",
    },
    can_vote : (age)=>{
        var canVote = (age>=18 && age<=60)?("you can give vote") : ("you can't give vote");
        return (String)(canVote) ;
    },
};


var enterName = String(prompt("enter name without any space: "));
if(enterName === "aryan" || enterName==="Aryan" || enterName === "ARYAN"){
    var userInput = Number(prompt("enter the age : "));
    var isEligible = object.can_vote(userInput);
    console.log(isEligible);
    console.log(`Your name is ${object.name}`);
    console.log(`You are an ${object.nationality}`);

}
else{
    console.log("Invalid details");
}




/* console.log(`Your name is ${object.name}`);
console.log(`You are an ${object.nationality}`); */
/* var userInput = Number(prompt("enter the age : "));
var isEligible = object.can_vote(userInput);
console.log(isEligible);
 */






/* var obj = {
    //array
    //obj
    //function
    //ternary operator
    //anything
}
 */

/* var obj = {
    isEli : (age)=> {
        var eli = (age>=18 && age<=60)? ("eligible for vote") : ("not eligible");
        return eli;
    },
};

var input = Number(prompt("enter age :"));
var check_eligibility = obj.isEli(input);
console.log(check_eligibility);
 */
