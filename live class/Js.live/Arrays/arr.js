var array =[1,2,3,4,5];
/* immutable operations on array  */

/* at end  */
array.push(10);
array.pop();

/* at start */
array.shift();
array.unshift(11);
console.log(array);


/* Mutable operations on array : they changes/mutates the OG array and passes the reference if the Og array */

/* slpice&slice */
var array2=[1,2,3,4,5];
var spl=array2.splice(2,3,30,40,50);
console.log(array2);
var slc= array2.slice(3,5);
console.log(slc);



/* array operations */

var array3 =[1,2,3,4];
console.log(array3.length);

/* comcate */
var myarr=[1,2,3,4];
var myarr2=[5,6,7,8,9];
var result =myarr.concat(myarr2);
console.log(result)
