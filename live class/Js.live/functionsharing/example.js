var std1 =  {
    name : "Piyush",
    surname : "Kanojiya",
    maths : 100,
    chemistry : 95,
    physics : 100,
    gettheResult : function(city,state){ //normal function : lexical context
        console.log(` you are : ${this.name} ${this.surname} ,from : ${city} (${state}) ,and got :  ${((this.maths + this.chemistry + this.physics)/3).toFixed(2)}%.`);
    },
};
var std2 = {
    name : "Raj",
    surname : "Saoji",
    maths : 90,
    chemistry : 96,
    physics :30,
};
var std3= {
    name : "Raju",
    surname : "Sharma",
    maths : 0,
    chemistry : 96,
    physics :100,
};
var std4 = {
    name : "Bhaskar",
    surname : "kohli",
    maths : 100,
    chemistry : 96,
    physics :100,
};
var std5 = {
    name : "Somesh",
    surname : "Kanojiya",
    maths : 100,
    physics :100,
    chemistry : 50,
}
std1.gettheResult();
std1.gettheResult.call(std5,"Nagpur","MH");
std1.gettheResult.apply(std4,["Nagpur","MH"]);
std1.gettheResult.apply(std3,["Nagpur","MH"]);
std1.gettheResult.apply(std2,["Nagpur","MH"]);
