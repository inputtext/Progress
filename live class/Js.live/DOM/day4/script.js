/* const btn =document.querySelector("button");
const div =document.querySelector("div");
const main =document.querySelector("main");
const body =document.body;

// Event Propagation
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
); */
/* {capture:true} || {bubble:false}*/


//Bubbling
/* btn.addEventListener(
    "click",
    ()=>{
    console.log("btn tiggered")
    }
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



//submit events

//form handling: form reloads the webpage , here is the solution
const form  =document.querySelector("form");
const name =document.querySelector("#name");
const email =document.querySelector("#email");
const users =document.querySelector(".users")

form.addEventListener("submit",(events)=>{
    events.preventDefault(); // stops the form to reload the page
    let naam=name.value;
    let mail =email.value;
    if(naam.trim()==="" && mail.trim()==="")return; //null safety
    users.innerHTML +=`
        <div class="user-card">
            <div class="img">
                <img src="https://plus.unsplash.com/premium_photo-1692641346503-730862a6d3a2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image here ">
            </div>
            <div class="text">
                <h3>Name : ${naam}</h3>
                <p>E-mail : ${mail}</p>
            </div>
        </div>
        `
    form.reset(); //clears the input values after clicked the submission buttons

});

/* to see the text inputted
console.log(events.target[0].value); // (way 2 ) DOM mei target rehta hai harr baar , usmei value hai iski
console.log(events.target[1].value);

way 1 recommended : console.log(name.value);
console.log(email.value); */


































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
