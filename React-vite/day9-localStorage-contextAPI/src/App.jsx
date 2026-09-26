import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import UserCard from './components/UserCard'
import Form from "./components/Form"

const App = () => {


  /* LOCAL STORAGE */
  useEffect(() => {
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
  }, []);

  const getStoredUsers = () => {
    try {
      return JSON.parse(localStorage.getItem("users")) || [];
    } catch {
      return [];
    }
  }


 // let [users,setUsers] =useState(getStoredUsers); ismei users aa rahe hai pure


    /* States */
    let[toggle,setToggle] =useState(true);
    let [users,setUsers] =useState(getStoredUsers); //StateLifting up : pasted the users state her einstead of the form to transfer that data into the childs of the app
    let [editIndex,setEditIndex] = useState(null); // for update functinality

    const deleteUser = (index)=>{ // this index is comming from the usercard , usercard=>{index}=>giving user clicked on
      setUsers((prev)=>{ // runs atlast(async) , prev is the current value of the arr , prev=[user1, ...users]
        let arr = prev.filter((elem,i)=>i !== index); // returning all the users except the clicked one, sync code
        localStorage.setItem("users",JSON.stringify(arr)); // updating the local storage after deleting the user which was clicked get via index, this local storage executes first because its a sync code
        return arr;
      });
    }

    const updateUser = (index)=>{
      setEditIndex(index); //checked on which user it is clicked via index got from the UserCard.jsx
      setToggle(false); // made the value of setToggle false so that we can edit the user
    }

  return (
    <div className='h-screen p-5 flex flex-col gap-4'>
      <Navbar setToggle={setToggle} setEditIndex={setEditIndex}></Navbar>

      {toggle?
      (<div className='flex p-5 gap-5 flex-wrap'>
        {
          users.map((elem,index)=>{/*  passed the user for each element/user in the array in usercard */
            return <UserCard
            key={index} // setiing primary key for identifying update and delete , in every reusable comp , their is a key prop , it cant be used as drilling the prop , because every comp has it uniquely
            user={elem} // passed elem as an user
            index={index} // prop drilling the index into the usercard created , because identifying which user has clicked for delete
            deleteUser={deleteUser}    // prop drilling
            updateUser={updateUser}/>  // prop drilling
          })
        }
      </div>)
      :
      (<div className='flex flex-col justify-center items-center '>
        <Form  users={users} setUsers={setUsers} setToggle ={setToggle} editIndex={editIndex} setEditIndex={setEditIndex} userToEdit={users[editIndex]}></Form>
      </div>)}
    </div>
  )
}

export default App
