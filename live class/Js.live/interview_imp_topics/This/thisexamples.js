var obj1 = {  // 2 object and 1 function
    name : "Piyush",
    obj2 : { // when in object inside object no var
        name : "Raj",
        context : function (){
            console.log(this.name); // for this , lexcial context is the most recent / nearest object's name , ie,. Raj, since it is inside the normal function
        }
    }
}

obj1.obj2.context(); // raj



// to have  the obj 1 as context of this , we use it inside the arrow function nd in nested function
var object  = {  // 2 objects and 2 functions
    name : "piyush",
    age : 23,
    getcontext : function(){ // "this" inherit this
        var object2 = { // when object inside the function use of var
            name : "Raj",
            dontHavecontext : ()=>{
                console.log(this.name) // piyush , since the arrow function doesnt have its own lexical context , it seeks for the nearest object's name , that is of obj 1
            }
        }
        object2.dontHavecontext();
    }
}

object.getcontext()

// piyush , since the arrow function doesnt have its own lexical context , it seeks for the nearest object's name , that is of obj 1

// Arrow functions do not have their own `this`.
// They inherit `this` from the surrounding function.
//
// Here, the surrounding function is `getcontext`.
// Since `getcontext` is called as `object.getcontext()`,
// `this` inside `getcontext` refers to `object`.
//
// Therefore `this.name` inside the arrow function is "piyush".




// to have the lexical context of the farthest object
var objj = {
    name : "Google",
    company : function(){
        const companydetails = {
            name : "Piyush",
            donthaveContext : ()=>{ //arrow function
                console.log(this.name)// takes the google ,
                //  sice arrow method dont have context
            }
        }
        companydetails.donthaveContext(); //company function  = this.name (google of objj)
    }
};

objj.company(); //google

//to have the lexical context of the nearest object
var objjj = {
    name : "piyush",
    company : function (){
        var objects = {
            name : "Google",
            havecontext :  function(){ //normal function
                console.log(this.name);// lexical context = nearest object that is objects
            }
        }
        objects.havecontext(); //company function = google of objects
    }
};

objjj.company(); //google




var obect = {
    name :"piyush",
    objcet : {
        name : "PK",
        greet : function (){
            console.log(this.name); //nearest object  = inner PK
        }
    }
}
obect.objcet.greet();


var obecjt= {
    name : "pk",
    fun : function(){
        var objectttt = {
            name : "Piyush",
            fnn : function(){
                funn2 = ()=>{
                    console.log(this.name);//nearest object = outermost pk
                }
            }
        }
        objectttt.fnn();
    }
}
obecjt.fun();













