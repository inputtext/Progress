var std1 ={
    name : "Piyush",
    surname : "Kanojiya",
    maths : 75,
    Physics : 90,
    chemistry : 92,
    getTheResult : function (a,b){
        console.log(`The Student : ${this.name} got ${((this.maths + this.Physics + this.chemistry) / 3).toFixed(2)} ${a} ${b}`)
    }
}

var std2 ={
    name : "Raj",
    surname : "Saoji",
    maths : 80,
    Physics : 50,
    chemistry : 75
};

var std3 ={
    name : "Raja",
    surname : "sahu",
    maths : 50,
    Physics : 36,
    chemistry : 30
};

var std4={
    name : "Raju",
    surname : "sharma",
    maths : 36,
    Physics : 100,
    chemistry : 100
};

std1.getTheResult.call(std2,"Nagpur","MH"); //call student 1's gettheresult binds with the std 2
std1.getTheResult.apply(std3,["Raipur","CG"]); //apply mei array ke form mei argument pass karte hai


var rajusharma = std1.getTheResult.bind(std4,"Mumbai","MH"); //returns the value into a function
rajusharma();
