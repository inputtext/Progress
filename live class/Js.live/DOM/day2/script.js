console.log(document);  // DOM , it has whole html but in object (key:value) form

const body = document.querySelector("body"); //selects body
console.log(body.childNodes); // nodelist[text,main,text,script]  :  shows all the nodes but in nodelist : its not live , it not gets updated as we make changes in the code , while the HTMLcollection is live


console.log(body.children);//HTMLcolection[main,script] :  shows array in the form of HTMLcollection which points to the html elements

/* `---------------------------------------------------------------------` */


/* diff between nodelist and HTMLCollection :  IMP AS PER INTERVIEW
nodelist : Points to the tree where all the things are nodes
HTMLCollection : points only to the html element
 */


const main = document.querySelector("main");// selects the main
console.log(main.childNodes);
console.log(main.children);


// to change the html via js
const toChangeh1 = document.querySelector("h1");
toChangeh1.textContent = "Updated via the DOM"


console.log(body.innerText); //gives only the text on console.
console.log(body.textContent); // we use this , same as innerText but gives the text ina proper place where they are in the html file
console.log(body.innerHTML);//gives the html layout from the body

// to style the html via the js
toChangeh1.style.backgroundColor= "brown" ;// changed the bg of h1 to brown via js
toChangeh1.style.color="beige";
toChangeh1.style.fontSize="100px";
toChangeh1.style.fontWeight = "";
toChangeh1.style.fontStyle= "italic"
toChangeh1.style.display="flex";
toChangeh1.style.alignItems="center";
toChangeh1.style.justifyContent="center";


// Understanding the classes : their are total 5 methods that the classes can be interpreted
/* classlist.remove(); // removes the class
classlist.add();    // adds a new class
classlist.contain("classname");// returns a boolean value , (is listed = true) and (is not =false)
classlist.toggle(); //if it exists => Removes it  & if doesn't exists => adds
classlist.replace("class,newclass") */;// takes 2 parameter with it , (class , new class)  , replace the older class with the new class


// selecting the head 2 via the class
const h2 = document.querySelector(".head2");
//changing the text of the h2 via js
h2.textContent = "hi thier , this is h2 changed via the js ";
//changing the css of the h2 via the js
h2.style.color = "brown";
h2.style.fontSize = "100px";
h2.style.fontStyle = "italic";
h2.style.display = "flex";
h2.style.alignItems = "center";
h2.style.justifyContent ="center";


/* ClassMethods */
// to check is h2 has class ? : classlist.contains
const isClass = h2.classList.contains("head2");
console.log(isClass); //true


//change or replace the class of the h2 tag/element
h2.classList.replace("head2","h2"); // head2 => h2 classname of the element h2
const isClassh2 = h2.classList.contains("h2"); // seeing if class is updated or not
console.log(isClassh2);


//toggle class :  if their => removes , if not their => adds a class
/* h2.classlist.toggle("h2");  */// removes the class


//add a class  :  to add a class on the div with id = div2
const div = document.querySelector("#div2"); // selected the div using the id
console.log(div); //printed the div
const toAdd =div.classList.add("div2"); // added a class to the div via the js
console.log(toAdd);


