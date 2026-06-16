var  gettheResult =  function(city,state){ //normal function : lexical context
    console.log(` you are : ${this.name} ${this.surname} ,from : ${city} (${state}) ,and got :  ${((this.maths + this.chemistry + this.physics)/3).toFixed(2)}%.`)
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

gettheResult.call(std3,"NGP", "MH");
