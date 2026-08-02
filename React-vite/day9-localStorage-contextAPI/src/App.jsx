import React, { useState } from 'react'
import Navbar from './components/Navbar'
import UserCard from './components/UserCard'
import Form from "./components/Form"

const App = () => {


  localStorage.setItem("name","kanojiya");
  let naam= localStorage.getItem("name");
  console.log(naam);

  let obj ={
    name : "piyush",
    age  : 22,
    address : "NA"
  };

  localStorage.setItem("user",JSON.stringify(obj));
  let lsd=localStorage.getItem("user");
  console.log(JSON.parse(lsd));//object as an output
  console.log(/* JSON.parse */(lsd));//string as an output




  let[toggle,setToggle] =useState(false);
   let [users,setUsers] =useState([]); //StateLifting up : pasted the users state her einstead of the form to transfer that data into the childs of the app
   let [editIndex,setEditIndex] = useState(null);

   const deleteUser = (index)=>{
    setUsers((prev)=>prev.filter((elem,i)=>i !== index));
   }

   const updateUser = (index)=>{
    setEditIndex(index);
    setToggle(false);
   }

  return (
    <div className='h-screen p-5 flex flex-col gap-4'>
      <Navbar setToggle={setToggle} setEditIndex={setEditIndex}></Navbar>

      {toggle?
      (<div className='flex p-5 gap-5 flex-wrap'>
        {
          users.map((elem,index)=>{/*  passed the user for each element/user in the array in usercard */
            return <UserCard key={index} user={elem} index={index} deleteUser={deleteUser} updateUser={updateUser}/>
          })
        }
      </div>)
      :
      (<div className='flex flex-col justify-center items-center '>
        <Form setUsers={setUsers} setToggle ={setToggle} editIndex={editIndex} setEditIndex={setEditIndex} userToEdit={users[editIndex]}></Form>
      </div>)}
    </div>
  )
}

export default App
