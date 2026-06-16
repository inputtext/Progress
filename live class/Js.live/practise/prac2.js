//Lexical scope and closure practise

//lexical Scope : the inner function can always access the variables of the outer function , but not the vice versa

var obj = {
    name : "Piyush", // this is a variable property of the object and greet function can access this but not the vice versa
    greet : function(){
        console.log(this.name); // prints the name since has lexical scope
    },
};

var obj1 = {
    name : "Meta",
    fun : function(){
        var object=  {
            name :  "Google",
            company : ()=>{
                console.log(this.name); //meta ,since anonymous functions dont have closures or lexical scope
            }
        };
        object.company();
    },
};

obj1.fun();





var obj2  = {
    name : "Apple",
    func:function(){
        console.log(this.name);//Apple
        var obj3 ={
            name : "Samsung",
            func2 : function(){
                console.log(this.name); //Samsung
                var obj4={
                    name : "Piyush",
                    noLexical : ()=>{
                        console.log(this.name);//Samsung
                    }
                };
                obj4.noLexical();
            }
        };
        obj3.func2();
    }
};

obj2.func();


var obj5=  {
    name : "Sam",
    obje : {
        func3: ()=>{
            console.log(this.name); //window
        },
    }
}
obj5.obje.func3();






//closure  : It is the ability of the inner function to remember the variables of the outer functions even the outer function has been executed
"use strict"

const counter = ()=>{
    let count = 0 ;

    let counterinc=()=>{
        count++;
        return  count ;
    };
    return  counterinc; // returned the  value , not by running it ()
};


const count = counter();
console.log(count()); //1
console.log(count()); //2








// best example of the lexical scope
var obbj=  {
    name : "Apple",
    fun: function(){
        console.log(this.name);//Apple
        let name = "Nothing"
        obbjj = {
            name : "vivo",
            fun1 : ()=>{ // no lexical scope therefore can't access the variables of the outer function, that means it can't access the "fun" function , thats why it acesses the nearest object that is obbj , if it wasnt their , it will access the window object
                console.log(this.name); //not Nothing , not vivo ,  APPLE
            }
        };
        obbjj.fun1();
    }
};
obbj.fun();
