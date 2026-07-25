import React, { useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import BrutalistLogin from './components/BrutalistLogin'
import BrutalistRegister from './components/BrutalistRegister'

const App = () => {
  let [toggle,setToggle] =useState(false);
  let [userData,setUserData]= useState([]); //statelifting up : UseState of the register form ko iddhar laa ke fir as a prop pass kar diye , both userData and setUserData
  console.log(userData);

  return (
    <div
      className='h-screen bg-indigo-300 border-b border-gray-500  flex justify-center items-center gap-4'
    >
      {toggle ? <Login setToogle={setToggle} /> : <Register setUserData={setUserData}  setToggle = {setToggle}/>} {/* ternary operator  and caling the functional component login and register*/}
      {/* {toggle? <BrutalistLogin setToggle={setToggle} />: <BrutalistRegister setToggle={setToggle}/> } */}
    </div>
  )
}

export default App



/*  notes :
const App = () => {
  const [showLogin, setShowLogin] = useState(true)

  return (
    <div
      className='h-screen bg-indigo-400 border-b border-gray-500 flex justify-center items-center gap-4'
    >
      <button onClick={() => setShowLogin(true)}>Login</button>
      <button onClick={() => setShowLogin(false)}>Register</button>
      {showLogin ? <Login /> : <Register />}
    </div>
  )
}
   */
