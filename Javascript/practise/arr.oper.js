/* var arr =[1,2,3,4,5];
arr.push(100);
arr.pop();
arr.unshift(100);
var arr2=arr.slice(0,6);
arr.splice(3,0,100);
console.log(arr);

 */

/* REDUCE */
var arr=[10,20,30,40];
/* to add the array elements using reduce */
var arr2=arr.reduce(function(acc,val){
    return acc+val;
},0);
console.log(arr2);

/* Higher order functions  - passes the function as a parameter */
/* for Each */
arr.forEach(function(element){
    return element;
})
console.log(arr);

/* spread operator */
var arr3=[...arr]; /* spread operator , immuates the og arr with diff address pointing at the stack mem to the heap memz */
console.log(arr3);

/* Map */
arr.map(function(elem){
    arr.includes(40);
});
console.log(arr);
