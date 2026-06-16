var user = {
    name : "Piyush",
    age :22 ,
    nationality : "Indian",
    greet : function(user){ /* has lexical scope */
        console.log("hi their ",user);
        console.log(`hi their ,${this.name} , Your age is :  ${this.age}`);
    },
    canVote :function(age){ //if anonymous it will be undefined
        console.log("your age is ",age);
        (this.nationality === "Indian" ||this.nationality=== "indian")?(`${this.name}can vote \t`) : (`${this.name} \t cant vote`)
    },
};


var inputUser = String(prompt("enter your name"));
if(inputUser==="Piyush" || inputUser ==="piyush"){
    console.log(user.greet(inputUser));
    var isEligible = Number(prompt("enter your age : "));
    if(isEligible >= 18 && isEligible <=30 ){
        console.log(canVote(isEligible));
    }
    else {
        console.log("isn't eligible");
    }
};


var obj = {
    name : "Piyush",
    greet : function(){
        console.log(this.name); // prints the name since has lexical scope or the closure
    },
};

var obj1 = {
    name : "piyushkanojiya",
    fun : function(){
        var object 
    }
}








/* if(inputUser==="Piyush" || inputUser ==="piyush") = if(inputUser.toLowerCase()==="piyush") */
