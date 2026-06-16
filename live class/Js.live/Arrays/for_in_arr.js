var arr=[10,20,30,40];
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}


/* forEach  -Iterates through every element in the array */
arr.forEach(function(element,index){
    console.log(element,index);
});

arr.forEach(function(element,index){
    console.log(index,element); /* ele =index and index =element  */
});

/* Sum of elements using forEach */
sum=0;
arr.forEach(function(elem){
    sum+=elem;
    /* sum=sum+elem; */
    console.log(sum);
});


//---------------------------------------------------------------------------------------------------

/* MAP -Transforms the array and returns entirely new array 
-IMMutates the OG array (doesnt change)
-It doesnt changes the OG array , instead it caries it to another variable with a diff address in the memory !*/



var arr2=arr.map(function(elem){
    return elem*elem;
});
console.log(arr2);

/*  fucntion expression wihout name of fucntion
var a =()=>{

} */

/* MAP WIHTOUT FUNCTION NAME /function expression  */
var withoutname=arr.map=((a)=>{
    return a;
});
var result =withoutname(10);
console.log(result);


/* map - oneline function expression */
var funexp = ((b)=>console.log(b)); 
funexp(20);
/* var a =(a)=>console.log(a);  : normal one liner function */


var array =["name1","name2","name3","name4"];
var array1 =array.map(function(x){
    return x+"surname";
});
console.log(array1);


var even =arr.map(function(x){
    if(x%2==0){
        return "even number";
    }
    else{
        return "odd number";
    }
})

var resu=even();
console.log(resu);

/* BASICALLY MAP RETURNS THE ARRAY OF THE SPECIFIED OPERATION WITHOUT MUTATION*/


//------------------------------------------------------------------------------------------------

/* Filter : Filters out the va;lues from the og array and stores them into the new one withot mutating the OG  */
var arrf =[5,6,-9,-3,10,-10];
var fil=arrf.filter(function(elem){
    return elem>0;
});
console.log(fil); // returns only the nos which are 

var marks =[100,20,0,45,36,46,90];
var validmarks=marks.filter(function(elem){
    return elem>36;
});
console.log(validmarks);

// Map returns the value in true or false if condition stated , where else the filter returns the numeric / integer value 


