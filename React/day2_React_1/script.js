import React from "react";
import ReactDOM from "react-dom";




const root =document.querySelector(".root");

const h1 = React.createElement("h1",{},"hii this is a react elem");
const Vroot = ReactDOM.createRoot(root);
Vroot.render(h1);



/* Js has its own full fledged package manager known as "npm-node package manager" inorder to use and download React and all just like smartphones has app-store to download apps
npm increases the functionality of the js
npm is just a distributor */

/* npm i react and npm install react-dom  */
/* never ever touch the node modules and package-lock.json files */











/* ----------------------------------- */
/*NOTES
The Whole process :
Real dom => virtual dom => old vs new VDom (reconsciliation(engine))=>works on diffing algo=>Updates he Real dom (commit phase)=> paint inn UI(renders changes in ui)=> new Real Dom=>New Virtual Dom => Repeat if any new thing changed, and after comparison , old virtual dom gets deleted
 */

/* 3 steps that runs behind the scenes in the REACT:
1: React.createElement
2: ReactDOM.createRoot
3: root.render();
 */

/* Always VDom to VDom comparison */

/* till 2015 React followed reconsiliation engine known as "stack", and in 2016 ,new reconsciliation engine "fibre" was introduced */

/* stack vs fiber
stack wasnt  as efficient and optimised  as the fiber is ,stack stucks the whole process untill the current change is applied , but fiber sides up the change and then executes the below code ,
so the VDOM is the Fiber tree */

//----------------------------------------------------------------

// npm :
/* Js has its own full fledged package manager known as "npm-node package manager" inorder to use and download React and all just like smartphones has app-store to download apps
npm increases the functionality of the js
npm is just a distributor */

/* npm i react and npm install react-dom  */
/* never ever touch the node modules and package-lock.json files */


/* command to build package.json file : npm init -y hyphen y means all to yes
 */

/* commands of npm :
1.npm init -y
2.npm i react
3.npm i react-dom
4.npm run dev
 */



/* npm doesnt have access to the Real Dom */


//----------------------------------------------------------------------------
/*
About vite :
vite is a build tool ,react js runs on runtime , if changed  -> updates tooo
vite is used to achive runtimechanges : real time changes on screen is runtime
vite has bundler(compressor) and compiler
We will use Vite to achieve boiler plate of the React
Vite controls the React now , all the processees inside of react is now controlled by vite
Vite ka bundler understands jsx -> jsx means js inside the html
jsx->  < jscode inside the html tag />
Functional component -> <jsx/>
 */



//-------------------------------
/* dependencies : usefull After deployment also
dev-dependencies : useful only at the time of the developement

*/
