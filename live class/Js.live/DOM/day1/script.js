// Selection Of an element

const h1 = document.querySelector("h1");
h1.textContent = "heyyyy"
/* console.dir(h1); // directory */
console.log(h1);

const box  =document.querySelector(".box");
console.log(box); //shows the div that has the class box
box.textContent = "this is box and manipulated by the js";



//Selection of element : const h1 = document.querySelector("h1");
// console.log(h1);

/* changing the text of html via js , has 3 ways :
1. h1.innertext = " " :  Not used for parent divs , since it will change the whole content inside it
2.h1.innertext= " " " : same , not used for parent divs
3.h1.textcontent= " " :
*/

/* changing the stytle of the html via js */
/*
box.style.backgroundColor ="Brown"
 */
box.style.padding = "100px";
box.style.display = "flex";
box.style.alignItems ="center";
box.style.justifyContent = "space-evenly"
