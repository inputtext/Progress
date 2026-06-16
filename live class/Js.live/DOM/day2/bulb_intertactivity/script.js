const bulb = document.querySelector(".bulb");
console.log(bulb);
const btn = document.querySelector(".btn");
console.log(btn);


/* adding the interactivity  */

// adding eventListener to button : Method 1

let flag = true ;
bulb.style.backgroundColor="black";
btn.addEventListener("click",()=>{
    if(flag===true){
        bulb.style.backgroundColor = "yellow"
        btn.textContent= "off"
        flag = false ;
    }
    else{
        bulb.style.backgroundColor = "black"
        btn.textContent= "on"
        flag =true;
    }
});

//via classList.toggle() : Method 2

btn.addEventListener("click",()=>{
    if(bulb.classList.toggle("lightup")){ // since toggle returns T/F , no need of flag
        btn.textContent =" off";
    }else{
        btn.textContent= "on"
    }
})





/* addEventListener("event","callbackAnonymousFunction")
: as soon as the event occurs ,
 it triggers the callback function */
