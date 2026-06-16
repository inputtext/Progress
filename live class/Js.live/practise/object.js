//this
var object = {
    name :"piyush",
    age : 22,
    fun : function (){// has lexical scope
        console.log(this.name); //piyush
    },
};
object.fun();

var objectt = {
    name : "Piyush Kanojiya",
    age : 22,
    funct: function (){
        var obj = {
            name : "Google",
            functt : ()=>{ // arrow function doesnt have lexical scope , so takes the scope value of the nearest object
                console.log(this.name);
            },
        };
        obj.functt();// returning this value to the function
    },
};

objectt.funct();













/* biunding  */
var std1= {
    name :  "piyush kanojiya",
    age :22,
    maths : 100,
    physics : 100,
    chemistry : 100
};
var std2 = {
    name : "Raj saoji",
    age : 22,
    maths : 75 ,
    chemistry : 100,
    physics : 90
};

var std3 ={
    name : "Pooja",
    age : 21,
    maths : 30,
    physics: 100,
    chemistry : 100
};

var getTheResult = function(city,state){
    console.log(`The name of the student is ${this.name} , Belongs to the city and state  : ${city} (${state}) , Got marks  : ${((this.maths
        +this.physics+this.chemistry)/3).toFixed(2)}%`);
};


//bind() : call()  : apply ([""])

getTheResult.apply(std1,["nagpur", "MH"]);
getTheResult.apply(std2,["Raipur","CG"]);
getTheResult.apply(std3,["Bhopal","MP"]);















