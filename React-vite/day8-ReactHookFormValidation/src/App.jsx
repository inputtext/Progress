import React, { useState } from 'react'
import Navbar from './components/Navbar'
import UserCard from './components/UserCard'
import Form from "./components/Form"

const App = () => {

  let[toggle,setToggle] =useState(false);

  return (
    <div className='h-screen p-5 flex flex-col gap-4'>
      <Navbar setToggle={setToggle}></Navbar>

      {toggle?
      (<div className='flex p-5'>
        <UserCard></UserCard>
      </div>)
      :
      (<div className='flex flex-col justify-center items-center '>
        <Form></Form>
      </div>)}
    </div>
  )
}

export default App
