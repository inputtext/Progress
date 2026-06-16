const btn =document.querySelector("button");
const div =document.querySelector("div");
const main =document.querySelector("main");
const body =document.body;


//CAPTURING :
btn.addEventListener(
    "click",
    ()=>{
    console.log("btn tiggered")
    },
    {capture:true} // adding this anables the CAPTURING MODE ,hierarchy of the event capturing from top to bottom
);

div.addEventListener(
    "click",
    ()=>{
    console.log("div triggered");
    },
    {capture:true} // its bydefault being at false, bydefault bubbling mode is true
);

main.addEventListener(
    "click",
    ()=>{
    console.log("main tiggered");
    },
    {capture:true}
);

body.addEventListener(
    "click",
    ()=>{
    console.log("body triggered");
    },
    {capture:true}
);
/* {capture:true} || {bubble:false}*/


//Bubbling
/* btn.addEventListener(
    "click",
    ()=>{
    console.log("btn tiggered")
    },
);

div.addEventListener(
    "click",
    ()=>{
    console.log("div triggered");
    },
);

main.addEventListener(
    "click",
    ()=>{
    console.log("main tiggered");
    },
);

body.addEventListener(
    "click",
    ()=>{
    console.log("body triggered");
    },
); */








/* structure of event */
/* addEventListener(
    "click" ,  event name

    ()=>{   anonymous function

    },

    {capture:true}  Object
); */




































/* types of events

btn.addEventListener("click",(events)=>{
    console.log(events); //PointerEvent
btn.addEventListener("dblclick",(events)=>{
    console.log(events);//MouseEvent
});
btn.addEventListener("mouseover",(events)=>{
    console.log(events)//MouseEvent
})
window.addEventListener("keypress",(events)=>{
    console.log(events);// KeyboardEvent
}) */
