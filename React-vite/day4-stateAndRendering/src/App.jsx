import React , {useState} from "react";
const App = ()=>{

  let [count,setCount] = useState(0);

  let [flag,setFlag] = useState(true);



  return(
    <div className="bg-indigo-400">
      <h1 className="bg-red-" className="text-9xl"> Count is : {count}</h1>
      <button onClick={()=>{
        setCount((prev)=>{
          prev+=1;
          return prev; //expilcit return
        });
      }}>INCRE</button>

      <button onClick={()=>{
        setFlag(false);
        setCount(count+=10);
        console.log(flag);
      }}>inc by 10</button>

      <button onClick={()=>{
        setCount(count-count);
      }}>Reset</button>

      <button onClick={()=>{
        setCount(count-=1)
      }}>dec</button>
    </div>
  );
};

export default App;


//notes
 {/*  <button onClick={()=>{
        setCount(count+1); // on call , re renders the whole jsx functional component
        setCount(count+1); // on call , re renders the whole jsx functional component
        setCount(count+1); // on call , re renders the whole jsx functional component
      }}>INCREMENT</button> */}


/*  setCount((prev)=>prev+1) /implicit return */
