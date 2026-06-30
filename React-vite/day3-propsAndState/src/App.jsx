import React, { useState } from 'react'


const App = () => { // functional component

  let [count, setCount]=useState(0); // def value of count =0 ,updates everytime as set function runs
  console.log(count);
  
  let [flag,setFlag] = useState(true); // updates everytime when setflag function rtuns , updated by the set function
  console.log(flag);






  return (
    <div>
      <h1>Count is : {count}</h1>

      <button
        onClick={()=>{ // onclick function and a callback funcion and inside it setcount fun: it will call setclick functiomn
        setCount(count+=1);// updates the count and rerenders the app function
      }}
      >
        Increment
      </button>

      <button onClick={()=>{ // onclick function => callback => set fucntion
        setFlag(false);
      }}></button>
    </div>
  )
}

export default App
/* rafce=> Reactarrowfunctionexportcomponent */
/*
components: functions called in html tags
*/
