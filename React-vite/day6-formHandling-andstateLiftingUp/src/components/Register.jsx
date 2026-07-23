import React from 'react'

const Register = ({setToggle}) => {
    return (
    <div className='bg-indigo-200 w-100 p-5  flex justify-center flex-col rounded-xl gap-5'>
        <h3 className='flex flex-col items-center justify-center p-2.5 '>Register Page</h3>
        <form className='flex flex-col gap-2.5 ' action="">

            <input className='p-5 border-b border-indigo-400 hover:bg-indigo-300 rounded-xl shadow-xl' type="text" placeholder='Name' />
            <input className='p-5 border-b border-indigo-400 hover:bg-indigo-300 rounded-xl shadow-xl' type="text" placeholder='Email' />
            <input className='p-5 border-b border-indigo-400 hover:bg-indigo-300 rounded-xl shadow-xl' type="text" placeholder='Password' />
            <button className='p-3 text-white bg-indigo-600 rounded-xl'>Register</button>
        </form>
        <p className='flex flex-col justify-center items-center'>Have an Account?
            <span className='text-indigo-500 cursor-pointer'
                onClick={()=>{
                        setToggle(true);
                    }}>Login here</span></p>
    </div>
    )
}

export default Register
