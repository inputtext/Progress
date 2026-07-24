import React, { useState } from 'react'

const Register = ({setToggle}) => {

    let [formData,setFormData]= useState({});
    let [userData,setUserData]= useState([]);

    let handleChange = (e)=>{
        let {name,value} = e.target;// name and value aaya target se / name aur value nikale , extracted the name from the html name="name" and value from the inpuuted by user
        setFormData({...formData,[name]:value}); //nikala hua idhar de diya
    };
    let handleSubmit = (e)=>{
        e.preventDefault();
        setUserData([...userData,formData]);
        //set function updates the state and rerenders the parent component 


    }






    return (
    <div className='bg-indigo-200 drop-shadow-2xl w-100 p-5  flex justify-center flex-col rounded-xl gap-5'>
        <h3 className='flex flex-col items-center justify-center p-2.5 '>Register Page</h3>
        <form onSubmit={handleSubmit} className='flex flex-col gap-2.5 ' action="">

            <input
            name='name'
            onChange={handleChange}
            className='p-5 border-b border-indigo-400 hover:bg-indigo-300 rounded-xl shadow-xl'
            type="text"
            placeholder='Name'
            />
            <input
            name='email'
            onChange={handleChange}
            className='p-5 border-b border-indigo-400 hover:bg-indigo-300 rounded-xl shadow-xl'
            type="text"
            placeholder='Email'
            />
            <input
            name='password'
            onChange={handleChange}
            className='p-5 border-b border-indigo-400 hover:bg-indigo-300 rounded-xl shadow-xl'
            type="password"
            placeholder='Password'
            />
            <button className='p-3 text-white bg-indigo-600 rounded-xl'>Register</button>
        </form>
        <p className='flex flex-col justify-center items-center'>Have an Account?
            <span className='text-indigo-500 cursor-pointer'
            onClick={()=>{
            setToggle((prev) =>!prev);
            }}>Login here</span></p>
    </div>
    )
}

export default Register
