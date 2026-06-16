/* function in the objects are called as methods
methods are the  functions that are  stored inside the object as a property
ex : Greet : function(){
console.log("hii...");
}; */
var obj={
    user_name : "Piyush Kanojiya",
    greet : function(){
        console.log("hii");
        return "hii their too"
    },
    add : (a,b)=>{
        return a+b;
    },
    multi : (x,y)=>{
        if(x&&y !== 0){
            return ("multiply : ", x*y);
        }
        else{
            return "error";
        };
    },
    division :(p,q)=>{
        if(p&&q !== 0 && q !== 0){
            return ("division : ",p/q);
        }
        else{
            return ("invalid");
        };
    },
};


console.log(obj.greet); //full function
console.log(obj.greet());//function call = hii

//addiiton
var result = obj.add(5,10);
console.log(result);

//multiply
var mul=obj.multi(0,0);
console.log(mul);

//division prompted by the user
var div_p = Number(prompt("enter a number :"));
var div_q = Number(prompt("enter a number :"));
var divide = obj.division(div_p,div_q);
console.log(divide);
