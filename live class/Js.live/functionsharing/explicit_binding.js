//call
var student_1 = {
    name : "piyush",
    surname  : "kanojiya",
    getIntro : function(){
        console.log("Hi I am ", this.name + "", this.surname);
    },
};
student_1.getIntro();

var student_2 = {
    name : "Raj",
    surname : "Saoji"
};

var student_3 = {
    name : "Raj",
    surname : "Sahu"
};

student_1.getIntro.call(student_2);// call :
student_1.getIntro.call(student_3);//call



// explicit binding (bind)
var a = {
    name : "Google",
    des : "Google was founded in 1998 by American computer scientists Larry Page and Sergey Brin"
};

var description = function (){
    console.log(this.name, ": ",this.des);
};

description.call(a); //binding

