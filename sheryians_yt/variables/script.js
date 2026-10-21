var a ;//declare
a=10;//assign

var a =20;//reassign+redeclare allowed


/* let b;
b=100;
let b=1000;//not allowed
 */


function test(){
    var a =10; //accessible to whole application as it doesnt values the function and it is function scoped

    let c =10;//blocked scoped{} , accessible only to the function since blocked scoped
}

console.log(c); //tdz - error: undefined
var c=10;// because of hoisting



console.log(aa); //tdz - error: cannot access a before initialization (same for const)

let aa=100;











