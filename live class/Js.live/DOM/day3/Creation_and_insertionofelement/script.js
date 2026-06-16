//creating , inserting & removing elements (html elements) from DOM/Js

//creation
let footer = document.createElement("footer");
console.log(footer);

//inserting into html file :at the very end  : appendChild -old way

document.body.appendChild(footer); //appendChild always inserts into the last -: inserted inside main
const main=document.querySelector("main")
const span = document.createElement("span"); /* created the span */
main.appendChild(footer) //inserted into the end of  main
main.appendChild(span);/*  added the span into the main of html dynamically */
span.textContent="hi thier , this is added dynamically into the html via js "


/* IMP :
document.body       // works
document.head       // works
document.documentElement // works, means <html>
use document.element when it is parent and directly connected to the html like html,body,head
and use directly when their is child of these three
 */



/* inserting : append-new way */
/* main.append(footer,span); */ //can insert multiple elements at a time



//insertBefore

const main = document.querySelector("main");

const box1= document.querySelector(".box1");
const box2= document.querySelector(".box2");
const box3= document.querySelector(".box3");

box2.style.backgroundColor="green";
box3.style.backgroundColor="black";

main.insertBefore(box2,box1)//(kisko,kisse pehele)



//remove
/* main.remove(box1); */

















