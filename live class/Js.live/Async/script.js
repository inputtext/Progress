console.log("start");

setTimeout(function(){
    console.log("hi");
},2000);

//this means after every 2 seconds run the inside function
// settimeout runs only once 


setInterval(() => {
    console.log("hi");
},2000);

console.log("end");




/* syntax of timeout : Delay
setTimeout(function(){
    async task
},value of time in ms )
 */
