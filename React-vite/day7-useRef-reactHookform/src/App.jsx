import React, { useRef } from 'react'
import Form from "./components/Form"
import ReactHookForm from './components/ReactHookForm';

const App = () => {

  let inpRef =useRef();
  console.log(inpRef);



  return (
    <div className='flex flex-col justify-center items-center bg-purple-950 h-screen gap-5'>
      <h1 className='text-white'>THIS IS FORM HANDLING</h1>
      <ReactHookForm/>

      {/*  <input ref={inpRef} type="text" placeholder='text' />
      <button onClick={()=>{
        console.log(inpRef.current.value); //this solves re-rendering , gets the data from input
      }}>submit</button> */}
    </div>
  )
}

export default App



// useRef & React HOOK Form
/*
useRef is a hook that poinyts to the Real dom element  */
