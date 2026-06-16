/* array operations  */
var arr =[1,2,3,4,5,6,7,8,9];
/* console.log(arr.length); */


//to sort array with one digit
arr.sort();
/* console.log(arr); */

//to sort the arr with 2 digits 
var arr2=[10,20,40,50,30,20,40,60,67,54,45,23,74,75];
var arrMutates1=arr2.sort((a,b)=>a-b);//acsending order 
var arrMutates2=arr2.sort((a,b)=>b-a);//descending order
/* console.log(arrMutates1); */
var rev=arr2.reverse();
/* console.log(rev) */;//ascending , hehe