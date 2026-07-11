import React ,{useState} from "react";

const App = ()=>{
    let [count,setCount] =useState(0);



    return (
        <div>
            <h1>count is : {count}</h1>
            <button onClick={()=>{
                setCount(count+=1);
            }}>INCREMENT</button>

            <button onClick={()=>{
                setCount(count-count);
            }}>RESET</button>

            <button onClick={()=>{
                setCount(count+=10);
            }}>increment by 10</button>
        </div>
    )
}


export default App;
