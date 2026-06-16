/* Reduce : reduces the whole array into 1 value
and returns a single value */
var arr =[1,2,3,4,5,6,7,8,9];
var a=arr.reduce(function(accumulator,value){
    return accumulator+value;
});
console.log(a);


// addition
var arr1=[100,200];
var b =arr1.reduce((acc,val)=>{
    return acc+val;
});
console.log(b);

//accumulator holds the initial value , and also values after each iteration
var arr2=[10,20,30,40,50,60,70,80,90,100];
var c=arr2.reduce((acc,val)=>{
    return acc =acc+val; // isntead of sum =0 we have used acc+=value;
}, 0)/* accumulator value =0 initially / instead of sum=0 */
console.log(c);



/* ---------------------------------------------------------------------------- */
/* arrow operator */
var a =(x)=>{
    return x ;
}
var resul = a(9);
console.log(resul)

var a=(y)=>console.log(y);
a(10);
/* ---------------------------------------------------------------------------- */


/* operations using the reduce() HOF */

var arr3=[10,20,30,40];
var sum=arr3.reduce((acc,val)=>{
    return acc+=val;
},0); // acc initial value = 0 for addition
var mul=arr3.reduce((acc,val)=>{
    return acc*val;
},1); // acc initial value =1 for multiplication
var div=arr3.reduce((acc,val)=>{
    return acc/val;
},1);

console.log(sum);
console.log(mul);
console.log(div.toFixed(10));
//acc stores previous result after every iteration


/* To find max in an array(given array) */
var arr4=[90,54,80,30,990,1001,1000,1002,1002.2];
var max=arr4.reduce((acc,val)=>{
    if(val>acc){
        return val; /* if value is greater than the acc , save that value to the accumulator */
    }
    else{
        return acc; /* if not , return acc value only  */
    }
},0);

/*
dry run fo above code
val>acc
90>0 - true , acc=90
54>90 - false ,acc =90
80>90 - false , acc=90
30>90 - false ,acc=90
990>90 - true ,acc=990
1001>990 - true,acc=1001
1002>1001 - true,acc=1002
1002.2>1002 - true,acc=1002.2
*/

console.log(max);
console.log(!!max); // to check the nature of the max , falsy or true we use !! before the var name



//-------------------------------------------------------------------------------


/* Find : find() returns the first matching element that satifies the condition */

var arr5=["rohit","virat","sharma","dhoni"];
var fdn=arr5.find((element)=>{
    return  element== "virat";
});
console.log(fdn);
var ensure =arr5.find((a)=> a.includes("n"));
var ensuree =arr5.find((a)=> a.endsWith("t"));
console.log(ensure);
console.log(ensuree);

/* some and every   : returns the op in t&f*/
var sme=arr5.some((a)=> a.includes("a")); // some character contains "a" - true
var eve=arr5.every((a)=> a.includes("a")); //every character contains "a" - false
console.log(sme);
console.log(eve);







