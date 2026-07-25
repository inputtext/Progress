import React, { useState } from 'react'

const Register = ({setToggle ,setUserData}) => {

    let [formData,setFormData]= useState({
        name : "piyush",
        email : "piyush@gmail.com",
        password : "password"
    });


    let handleChange = (e)=>{
        let {name,value} = e.target;// name and value aaya target se / name aur value nikale , extracted the name from the html name="name" and value from the inpuuted by user
        setFormData({...formData,[name]:value}); //nikala hua idhar de diya
    };

    let handleSubmit = (e)=>{
        e.preventDefault();
        let updatedUserData =(prev)=>[...prev,formData]; //previous leeke usmei new data input kar
        setUserData(updatedUserData);
        console.log(updatedUserData);
        //set-function updates the state and rerenders the parent component
        // Refreshing the form after submitting
        setFormData({
            name:"",
            email: "",
            password: ""
        }); //after this , call it on the register button using onChange={handleSubmit} even
    };

    return (
    <div className='bg-indigo-200 drop-shadow-2xl w-100 p-5  flex justify-center flex-col rounded-xl gap-5'>
        <h3 className='flex flex-col items-center justify-center p-2.5 '>Register Page</h3>
        <form onSubmit={handleSubmit} className='flex flex-col gap-2.5 ' action="">

            <input
            required // validation
            value={formData.name} // 2way binding : displays the defualt name in the form , react knows what is in the form , the name we are taking from the react by using the keyword value
            name='name'
            onChange={handleChange}
            className='p-5 border-b border-indigo-400 hover:bg-indigo-300 rounded-xl shadow-xl'
            type="text"
            placeholder='Name'
            />
            <input
            required //validation
            value={formData.email}
            name='email'
            onChange={handleChange}
            className='p-5 border-b border-indigo-400 hover:bg-indigo-300 rounded-xl shadow-xl'
            type="text"
            placeholder='Email'
            />
            <input
            required //validation
            value={formData.password}
            name='password'
            onChange={handleChange}
            className='p-5 border-b border-indigo-400 hover:bg-indigo-300 rounded-xl shadow-xl'
            type="password"
            placeholder='Password'
            />
            <button  className='p-3 text-white bg-indigo-600 rounded-xl'>Register</button>
        </form>
        <p className='flex flex-col justify-center items-center'>Have an Account?
            <span className='text-indigo-500 cursor-pointer'
            onClick={()=>{
                setToggle((prevState)=>!prevState)
            }}>Login here</span></p>
    </div>
    );
};

export default Register




/*userCard needs all the usersData
we can only share props between the parent and their childrens , not vice versa and not between siblings as well
statelifting up: Whenevere their is a need of the data to be shared within multiple files , we keep that data in the parent component */


//2 way binding &
