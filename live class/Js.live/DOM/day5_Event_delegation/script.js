const btn5 = document.querySelector("#five");
btn5.addEventListener("click",(event)=>{
    console.log(event.target); //shows the elemtn which has event on it . ie,. btn5
});


//normal lengthy implementation (forEach=>addeventlistener)
const buttons =document.querySelectorAll("button");
buttons.forEach(button=>{  // means for each button , add event listener
    button.addEventListener("click",(e)=>{
        console.log(e.target);
    });
});


//event Delegation :helpful in REACT, instead of applying and event to each of the children of the parent , we apply event listener on the parent itself , and all the childs grabs those events automatically
const main =document.querySelector("main");
main.addEventListener("click",(e)=>{
    console.log(e.target);
});


/* event is an object that has a target property that has the info on which the event is applied


every event has target property
e=events=target=target has that element */


//some notes

let random =Math.random() *10;//gives random number <1 and if multiplied
// by a num gives less than that number
let fl =Math.floor(random);//rounds down => if 1.2=>1 & if 3.5||3.9=>3
let ce = Math.ceil(random);//rounds up => if1.2=>2 & if3.5||3.9=>4
console.log(random); //prints random numbers from 1-9 (<10)
console.log(fl);//rounds that printed number down
console.log(ce);//rounds that printed number up

/* setInterval(() => {
    console.log("hii"); //hii will get printed depending upon the interval (printed regularly)
},1000);

setTimeout(() => {
    console.log("timeout"); //after 10 sec it will get printed (delayed print)ONLY ONCE
}, 10000); */



/* setInterval() :  after a particular time , repeat itself
&
 settimeout() */











/* project goal : to move the div at random places when start us presses */
const btn  =document.querySelector("button");
const main =document.querySelector("main");
/* const box=document.querySelector(".box"); */
const timerDiv =document.querySelector("#timer");
const timerCount =document.querySelector("p");
const timeInc =document.querySelector("#inc");
const overlay =document.querySelector("#overlay");//for game over screen
const score =document.querySelector("#score")
let time =0;
let interval;
let skore =0;


//added the box dynamically
const box =document.createElement("div");
box.classList.add("box");

//random color generator
const randomColor =()=>{
    let r =Math.floor(Math.random()*256); //this means , we have manually created a random colour like this in css => background-color: rgb(249, 162, 127);
    let g =Math.floor(Math.random()*256);
    let b =Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})` //for proper colour formatfor css like  rgb(122,155,166);
}

const tim=()=>{ //for changing the time and the position and color everysecond


    const mainH =main.clientHeight - box.offsetHeight; // main height -box height to let the box remain inside the main
    const mainW =main.clientWidth -box.offsetWidth ;
    const randY =Math.floor(Math.random()*mainH);
    const randX = Math.random()*mainW;
    console.log(randY,randX);

    box.style.top=`${randY}px`;
    box.style.left=`${randX}px`;
    box.style.backgroundColor=randomColor();

}

btn.addEventListener("click",()=>{
    box.style.backgroundColor=randomColor();
    main.append(box);//added the box to main
    tim(); //immediate appearance of the box,o/w delayed by one sec

    clearInterval(interval);//prevents the multiple taps and occurence of the intervals if clicked multiple times
    interval = setInterval(() => {
        tim();
        time+=1;
        timeInc.textContent=time;
    }, 1000); //1000ms=1sec

    //stopping the timer after 10sec
    setTimeout(() => {
        clearInterval(interval);
        overlay.style.display="flex";
    }, 10000);

});

// for score to increase

box.addEventListener("click",()=>{
    skore +=1; //incrementing scor variable
    score.textContent=skore; // displaying the incremented value in score div
})


/* problem faced : if pressed the interval /start button many times , many intervals were created at once and they all runs simultanously */


//box.offsetHeight;  box ki height jaha jaha woh placed hai










/*
jumbled
btn.addEventListener("click",()=>{
    const randY =Math.random()*100;
    const randX = Math.random()*100;
    box.style.top=`${randY}%`;
    box.style.left=`${randX}%`;

}); */
/*
const mainH =main.clientHeight; // for calculating main height
    const mainW =main.clientWidth; // for calulating main width to let the box remain indie the parent main */
