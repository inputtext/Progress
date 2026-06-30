import React from "react";
import About from "./About";

let App =()=>{ // this is a functional component

  /*  let ui = React.createElement("div",{},[
    React.createElement("h1",{},"hello"),
    React.createElement("h2",{},"hi their"), //normal React
    React.createElement("h3",{},"lol")
  ]
  ); */

  //babel code
  return(
  <div>
    <h1>Hi their </h1>
    <h2>hello</h2>
    <h3>lol</h3>
    <About width="500px" age={90} height="100" elem={<h1>hello</h1>}>
      <h1>children</h1> {/* this is just like the html , tag ke andar ka children hai */}
    </About>
  </div>)
};

export default App;


{/* /* bable converts this => <h1>hi their </h1> to => let h1 =React.createElement("h1",null,"hi their "); */

/* JSX -> javaScript XML , xml = markuplangauges , here its html  */


/*
components :
Components =functions
*/ }

{/* ;// we can write the html inside the js via jsx , this is the power of the compiler babel and jsx file */}
{/* send the properties to the props via width="500px" */}
