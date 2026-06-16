/* for odd to print */
console.log("the below are the odd numbers")
for(var a=0;a<1001;a++){
    if(a%2===0){
        continue; /* pure odd numbers print honge  */
    }
    console.log(a);
}
/* for even to print */

console.log("the below are the even numbers")
for(var a=0;a<1001;a++){
    if(a%2!==0){
        continue; /* pure odd numbers print honge  */
    }
    console.log(a);
}