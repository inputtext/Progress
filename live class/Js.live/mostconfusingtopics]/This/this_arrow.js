var object = {
    name : "Pk",
    age  : 22 ,
    getIntro :  function (){
        const iner = ()=>{ //arrow function :  has no lexical context , but since it is nested inside the function , it holds the value/context of the obj nearest to it
                console.log(this.name); // now this has the lexical context of the object , because its nested inside the normal function which has dynamic context
        }
        iner();
    },
};
object.getIntro();




// this inside the lexical context of the normal function , dymanic context
var obj ={ // =piyush.r.kanojiya
    name : "Piyush",
    age : 23,
    outer : function () {
        var inner = ()=>{
            console.log(this.name); // =Piyush// here this = whole obj due to the lexical context of the outer function
            this.name = "Piyush.kanojiya";

        }
        inner();
    },
};

obj.outer(); // Piyush
console.log(obj.name); //piyush .kanojiya
obj.outer(); //now updated value 


