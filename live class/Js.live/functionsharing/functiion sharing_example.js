var std1 ={
    name : "Piyush",
    surname : "Kanojiya",
    maths : 75,
    Physics : 90,
    chemistry : 92
};

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


var getTheResult = function (){
    console.log(`The Student : ${this.name} got ${((this.maths + this.Physics + this.chemistry) / 3).toFixed(2)} %`);
};

getTheResult.call(std1); //bind
getTheResult.call(std2);
getTheResult.call(std3);



// call()

var std1 ={
    name : "Piyush",
    surname : "Kanojiya",
    maths : 75,
    Physics : 90,
    chemistry : 92,
    getTheResult : function (){
        console.log(`The Student : ${this.name} got ${((this.maths + this.Physics + this.chemistry) / 3).toFixed(2)} %`)
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

std1.getTheResult.call(std2); //call student 1's gettheresult binds with the std 2


