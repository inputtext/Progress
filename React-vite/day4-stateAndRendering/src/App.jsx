import React , {useState} from "react";

const App = ()=>{

  let [count,setCount] = useState(0);

  let [flag,setFlag] = useState(true);

  let [reset,setReset] =useState(0);

  return(
    <div>
      <h1> Count is : {count}</h1>
      <button onClick={()=>{
        setCount(count+=1);
      }}>INCREMENT</button>

      <button onClick={()=>{
        setFlag(false);
        setCount(count+=10);
        console.log(flag);
      }}>Flag</button>

      <button onClick={()=>{
        setReset();
        setCount(count-count);
        console.log(reset);
      }}>Reset</button>
    </div>
  );
};

export default App;
