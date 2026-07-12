import React, { useState } from 'react'
import Card from './components/Card';
import Contact from './components/Contact';
import About from './components/About';

const Web = () => {

    let [name,setName] = useState("");
    console.log(name);
    let [email,setEmail] =useState("");
    console.log(email);
    let [password,setPassword] =useState("");
    console.log(password);







    return(
        <div className='flex flex-col gap-5 w-50 p-4 bg-rose-300 align-middle justify-between'>
            <input
                onChange={(e)=>{
                    setName(e.target.value);
                }}
                className='border-2'
                type="text"
                placeholder='Name'
            />
            <input
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                className='border-2'
                type="text"
                placeholder='Email'
            />
            <input
                onChange={(e)=>{
                    setPassword(e.target.value);
                }}
                className='border-2'
                type="text"
                placeholder='PassWord'
            />
            <button className='border-2'>Submit</button>

            <h1>your name is : {name}</h1>
            <h1>your email is : {email}</h1>
            <h1>your pasword is : {password}</h1>
        </div>
    )
};

export default Web
