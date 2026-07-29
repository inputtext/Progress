import React from 'react'

const Navbar = ({setToggle}) => {
    return (
    <div className='p-5 flex item-center justify-between bg-purple-300 rounded-2xl '>
        <div>
            <img className='rounded-full'  width={35}  src="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" alt="" />
        </div>
        <div className='flex justify-between gap-10 font-semibold'>
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
        </div>
        <button
        onClick={()=>{
            setToggle(prev=>!prev)
        }}
        className='p-2 bg-purple-500 rounded-xl cursor-pointer'>Create user</button>

    </div>
    )
}

export default Navbar
