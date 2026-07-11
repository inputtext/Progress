import React, { useState } from 'react'

const App = () => {
  let [count,setCount] = useState(0);
  let [user,setUser] = useState("PK")


  return (
    <div>
      <h1>Count is : {count}</h1>
      <h1>Name is : {user}</h1>
      <button onClick={()=>{
        setCount(count+=1);
      }} >increment</button>
      <button onClick={()=>{
        setUser("piyush");
      }} >Change name </button>
    </div>
  )
}

export default App
