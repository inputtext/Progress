import React from 'react'

const UserCard = ({user,index,deleteUser,updateUser}) => {
    return (
    <div className= 'p-4 border-3 border-indigo-400 rounded-3xl flex flex-col gap-3 bg-indigo-100'>
        <div className='h-60 flex'>
            <img
            className='object-fit h-full rounded-2xl'
            src={user.image}
            alt="" />
        </div>
        <div className='flex flex-col gap-2'>
            <h1>{user.name}</h1>
            <p className='text-sm'>{user.email}</p>
            <p className='text-sm' >{user.contact}</p>
            <div className='flex flex-col gap-3 justify-center items-center'>
                <button
                onClick={()=>{
                    updateUser(index)
                }}
                className='bg-purple-200 w-25 rounded p-3 cursor-pointer'>Update</button>
                <button
                onClick={()=>{
                    deleteUser(index)
                }}
                className='bg-red-300 w-25 rounded p-3 cursor-pointer'>Delete</button>
            </div>
        </div>
    </div>
    )
}

export default UserCard
