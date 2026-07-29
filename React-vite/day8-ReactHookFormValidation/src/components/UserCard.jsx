import React from 'react'

const UserCard = () => {
    return (
    <div className= 'p-4 border-3 border-indigo-400 rounded-3xl flex flex-col gap-3 bg-indigo-100'>
        <div className='h-60 flex'>
            <img
            className='object-fit h-full rounded-2xl'
            src="https://images.unsplash.com/photo-1780715017688-a50312a5a249?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D"
            alt="" />
        </div>
        <div className='flex flex-col gap-2'>
            <h1>Name:</h1>
            <p className='text-sm'>Email:</p>
            <p className='text-sm' >Contact:</p>
            <div className='flex flex-col gap-3 justify-center items-center'>
                <button className='bg-purple-200 w-25 rounded p-3'>Update</button>
                <button className='bg-red-300 w-25 rounded p-3'>Delete</button>
            </div>
        </div>
    </div>
    )
}

export default UserCard
