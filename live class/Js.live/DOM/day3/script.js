/* quick Revision : slection of an element of the html via js
chaning the element via js
adding the style css prop on the elemnt of html via js
classlist
adding interactivity  */

/* const h1 = document.querySelector(".h1"); //selection
console.log(h1);//printing it
h1.textContent="Hiiiiii , thier ";
h1.style.color= "beige";

const body =document.querySelector("body");
body.style.backgroundColor="burlywood"; */

/* h1.classList.toggle("lightup"); */

/* h1.addEventListener("click",()=>{
    if(h1.classList.toggle("lightup")){
        h1.textContent="you clicked me ? click once again "
        console.log("hi");
    }else{
        console.log("bye");
    }
}) */











const h1 = document.querySelector("#h1");
// to know how many attributes does the class and
// id holds ,we use: attributes : they are HOF

//get attribute  :  only to store on a variable
var noOfVClasses= h1.getAttribute("class")
console.log(noOfVClasses);//C1 C2 C3
var noOfId = h1.getAttribute("id");

//set attribute
console.log(noOfId);//h1
h1.setAttribute("width","200"); // adds the attribute to the class
console.log(h1.getAttribute("width")); //prints the attribute 200
/* syntax of the setAttribute : Element.setAttribute("attribute name",
"value of the attribute"); */


//removeAttribute
const h2 = document.querySelector("h2")
h2.removeAttribute("class");
var isThier = h2.getAttribute("class") ;
console.log(isThier); //null

//hasAttribute
console.log(h2.hasAttribute("class")); //false
h2.setAttribute("height","500px"); //sets the height attribute in the html via dom /js
var getAttri = h2.getAttribute("height") ; //get the attribute
console.log(getAttri)/* printing it */
console.log(h2.hasAttribute("height")); //true



// important as per MNC's point of view : asked in interviews
//selection and creation of the custom attribute
const user =document.querySelector("#user-data");
console.log(user.getAttribute("data-user-id")); //prints the property of the
// attribute that is :100

//changing the custom attribute
user.dataset.userId="101";//dataset key words lets the
// access of the data-user-id attri to change
console.log(user.getAttribute("data-user-id"));//101

/* input.value :real time  & input.getAttribute("value") static  */
/* seeking the input from the user through htmp input tag */
const inp =document.querySelector("input");

const btn =document.querySelector("button");

btn.addEventListener("click",()=>{
    console.log(inp.value);//  dynamic value gets printed
    console.log(inp.getAttribute("value")); //static attribute property gets printed
})

console.log(inp.value) ;//prints what user has inputted in the real time

console.log(inp.getAttribute("value")) //shows the value of the attribute that is text





/* attribute revision

var a = Element.getAttribute("attributeName"); //shows the property of the attribute on the console
element.setAttribute("attribute name");//adds an attribute
element.removeAttribute("attributename"); //removes the attrubutes from that element
element.hasAttribute("attributename"); // tells that an element has an attribute or not in true or false


Custom attribute making and changing
data-attribute-name="property"
ex : */
const users = document.querySelector("#user-data");
console.log(users.getAttribute("data-user-pass")); //prints the 12345


//tochange
users.dataset.userPass = "67890";
console.log(user.getAttribute("data-user-pass")); //changes 12345  to 67890

/* taking the value input by the user in the html "input" taking */

const ip = document.querySelector("#inp");
/* console.log(ip.value);
console.log(ip.getAttribute("value")) ; */

const button = document.querySelector("#btn");
button.addEventListener("click",()=>{
    console.log(ip.value) ; //shows the dynamic value in real time on console
    console.log(ip.getAttribute("value")); //shows the static value that the html "value" attribute has
});


//extra : custom atriibute slection,printing ,changing
const extra = document.querySelector("#inp");
console.log(extra.getAttribute("data-custom")); //hii

extra.dataset.custom="changed";
console.log(extra.getAttribute("data-custom")); //changed





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
main.append(footer,span); //can insert multiple elements at a time








///removal of elements
main.removeChild(span);


/* replace with  -siblings
box1.replaceWith(box3);
replacechilds - parent
main.replaceChild(box3,box1) */































