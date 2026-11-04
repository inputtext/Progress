/*
primitive datatypes : they are the og datatypes whose copied versions derives the real copy (ssnnubb)
matlab ke:

let a =10;
let b =a;
a=20;
console.log(b); // 10; value of b remains same as it was copied from a

derived : copying them gives reference of the og value
function , arrays and objects

let a = [1,2,3];
let b=a;
a.push(4);
console.log(b); // [1,2,3,4]; value of b changes as it was copied from a
*/



/*
null : jan mujhke null value rakhna
undefined : bydefault behaviour of js, when we declare a variable but not assign any value to it, it is undefined
*/



var a =10;
var b =20;
a++;//11
++a;//12
b++//20
++b;//22
var e =a++;
console.log(e);//12
var d =++a;
console.log(d);//13

var c = a+b; //32
console.log(c);
