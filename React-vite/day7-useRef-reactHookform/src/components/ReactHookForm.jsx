import React from 'react'
import {useForm} from 'react-hook-form'

const ReactHookForm = () => {

    let
    { //destructuring the required things from the object with methods
        register,
        handleSubmit,
        reset,
        formState:{errors},
    } = useForm();
    /* console.log(data) */; //gives an object with methods






    return (
    <div>
        <form onSubmit={handleSubmit((data)=>{
            console.log(data)
            reset();
        })}
        className='flex flex-col gap-4 m-10 p-5 bg-purple-300 w-90 rounded-2xl border-b'
        >
            <h1 className='flex flex-col justify-center items-center'>REACT HOOK FORM </h1>
            <input
            {...register("prdname")}
            name="prdname"
            className='bg-red-200 rounded p-3 m-2'
            type='text'
            placeholder='Product name'
            />

            <input
            {...register("prdprice")}
            name ="price"
            className='bg-red-200 rounded p-3 m-2'
            type='text'
            placeholder='Product price'
            />

            <span>Select category : </span>
            <select
            {...register("categories")}
            className='bg-red-200 rounded p-3 m-2'>
                <option value="Men">MEN</option>
                <option value="WOMen">WOMEN</option>
                <option value="Kids">Kids</option>
            </select>

            <input
            {...register("images")}
            className='bg-red-200 rounded p-3 m-2'
            type="text"
            placeholder='Image'
            />
            <button className='p-3 m-2 bg-red-300 rounded-2xl '>Create</button>
        </form>
    </div>
    )
}

export default ReactHookForm
