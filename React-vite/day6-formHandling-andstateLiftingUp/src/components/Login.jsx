import React, { useState } from 'react'

const Login = ({setToogle}) => {

    let [formData,setFormData] =useState({
        email:"exmaple@gmail.com",
        password : "1234567"
    });

    let [userData,setUserData] =useState([]);


    let handleChange =(e)=>{
        let {name,value} =e.target;
        setFormData({...formData,[name]:value}); // jiss bhi field pe clikc honga wahi change hongi
    }

    let handleSubmit = (e)=>{
        e.preventDefault();
        setUserData(...userData,formData); //user ka data from data mei push kar rahe
    }


    return (
    <div className='bg-indigo-200 w-100 p-5 drop-shadow-2xl flex justify-center flex-col rounded-xl gap-5'>
        <h3 className='flex flex-col items-center justify-center p-2.5 '>Login Page</h3>
        <form onChange={handleSubmit} className='flex flex-col gap-2.5 ' action="">
            <input
            required
            name='email'
            onChange={handleChange}
            value={formData.email}
            className='p-5 border-b border-indigo-400 hover:bg-indigo-300 rounded-xl shadow-xl'
            type="text"
            placeholder='Email' />
            <input
            required
            name='password'
            onChange={handleChange}
            value={formData.password}
            className='p-5 border-b border-indigo-400 hover:bg-indigo-300 rounded-xl shadow-xl'
            type="text"
            placeholder='Password' />
            <button className='p-3 text-white bg-indigo-600 rounded-xl active:bg-indigo-900'>Login</button>
        </form>
        <p className='flex flex-col justify-center items-center '>Didn't have an Account? <span className='text-indigo-500 cursor-pointer'
        onClick={()=>{
            setToogle(prev=>!prev)
        }}>Register here</span></p>
    </div>
    )
}

export default Login
