import React, { useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'

const App = () => {
  let [toggle,setToggle] =useState(false)

  return (
    <div
      className='h-screen bg-indigo-300 border-b border-gray-500 flex justify-center items-center gap-4'
    >
      {toggle ? <Login setToogle={setToggle} /> : <Register setToggle = {setToggle}/>}
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
