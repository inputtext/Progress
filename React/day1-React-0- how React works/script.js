//object destructring in the function parameters

/* let obj ={
    name : "Raj",
    age  : 69,
    company : "Google",
    address : "Mahal",
};

let user  = ({name,company,address})=>{ //parameters of the object , object mei se sirf name company aur address print karna
    // destructring only the name ,conpany and address
    console.log(name,company,address); //pure object mei se sirf yeh print karwa rahe
};

user(obj);//passed the whole object as an argument

// to iterate through the entire object we use for in loop
for(const key in obj){
    console.log(`${key} : ${obj[key]}`);
};
 */

/* explanation : dry run
iteration 1
key = "name"
obj[key] = obj["name"] = "Raj"

teration 2
key = "age"
obj[key] = obj["age"] = 69

teration 3
key = "company"
obj[key] = obj["company"] = "Google"

teration 4
key = "address"
obj[key] = obj["address"] = "Mahal" */

/* let a =100;

let print =()=>{
    console.log(a);  // gets the nearest lexical scope which is 100
};

let fun=()=>{
    let a =10;

    print(); // function invoked
};

fun(); //print functions prints 100 */







console.log(window);
console.log(React);

//via Real Dom
const realh1 = document.createElement("h1");
realh1.textContent="hiii their, this is a real dom element ";
document.body.append(realh1);



//via React Dom:virtual
const Vh1 = React.createElement("h1",{class: "heading"},"this is a virtual dom ele");// {element,class/props/properties,textcontent}
const Vdiv =React.createElement(
    "div",
    {class:"box"},
    React.createElement("h3",{class:"head"},"this is the heading inside the box created via the React"));
console.log(Vh1);

//React dom tells the real dom how to place the elements and how to work
/* Real dom picks up an element/ tag from the real dom elements , and renders the elements from the React dom via that root node /tag */
/* JS cannot understand !=ReactDom
theflow:
JS=>ReactDom=>RealDom react dom to real dom to js  */

let Rroot =document.querySelector("#root");//selected realdomm elem
let Vroot=ReactDOM.createRoot(Rroot);  //VDOM, root node = root tag of the real dom
Vroot.render(Vh1); //passed the h1 tag of the virtual dom /react
/* Vroot.render(Vdiv); */






