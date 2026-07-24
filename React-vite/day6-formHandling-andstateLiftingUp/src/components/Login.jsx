import React from 'react'

const Login = ({setToogle}) => {
    return (
    <div className='bg-indigo-200 w-100 p-5 drop-shadow-2xl flex justify-center flex-col rounded-xl gap-5'>
        <h3 className='flex flex-col items-center justify-center p-2.5 '>Login Page</h3>
        <form className='flex flex-col gap-2.5 ' action="">
            <input className='p-5 border-b border-indigo-400 hover:bg-indigo-300 rounded-xl shadow-xl' type="text" placeholder='Email' />
            <input className='p-5 border-b border-indigo-400 hover:bg-indigo-300 rounded-xl shadow-xl' type="text" placeholder='Password' />
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
