//creation of the element via the js
const box1 =document.createElement("div");  //<div></div>
const box2 =document.createElement("div");
const box3 =document.createElement("div");
//assining class to div
box1.classList.add("box1");//<div class ="box1"> </div>
box2.classList.add("box2");
box3.classList.add("box3");
box1.textContent="box1";
box2.textContent="box2";
box3.textContent="box3";

//inserting into the main
const main = document.querySelector("main");
main.append(box1,box2,box3);
//adding style to the body
const body =document.querySelector("body"); //slecting the body
body.style.backgroundColor = "black";
body.style.display="flex";
body.style.justifyContent="center";
body.style.alignItems="center"
body.style.marginTop="100px"
//adding style to the main
main.style.height="80vh";
main.style.width="80%";
main.style.backgroundColor="burlywood"
main.style.borderRadius="32px";
main.style.display="flex";
main.style.alignItems="center";
main.style.justifyContent="center";
main.style.gap="10px"
//giving styling to divs
box1.style.backgroundColor="red";
box1.style.width="100px";
box1.style.height="10%";
box2.style.height="30%";
box2.style.width="300px"
box2.style.backgroundColor="green";
box3.style.height="50%";
box3.style.width="500px";
box3.style.backgroundColor="blue";










//insertBefore
/* main.insertBefore(box3,box1); */
//prepend : insert before everyone
/* main.prepend(box3); */
// before and after  ()
/* box1.before(box3); // box 1 ke pehle box3
box2.after(box1); // box2 ke baad box1
main.replaceChild(box2.box1);
box2.before(box3); */
//box3.before(box1);
//main.insertBefore(box3,box1); //simple
//box2.before(box3) // ulta read kar

//after/before - Childrens box1.
//replacechild - parent .main

