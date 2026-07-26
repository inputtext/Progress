import React from 'react'
/* import { useState } from 'react'; */
import { useRef } from 'react';

const Form = () => {

    let formRef =useRef({}); //useRef fetches the real dom element
    console.log(formRef);


    let handleSubmit =(e)=>{
        e.preventDefault();
        console.log(formRef.current.productName.value);
        console.log(formRef.current.price.value);
        console.log(formRef.current.Category.value);
        console.log(formRef.current.img.value);
    }



    return (
    <div>
        <form className='flex flex-col gap-4 m-10 p-5 bg-purple-300 w-90 rounded-2xl border-b  '>
            <input
            ref={(e)=>{formRef.current.productName= e}} // pura element ie input , we are sending into the object via this line , formRef->current->making key as productName and setting that as the key, where e is the actual dom element
            name="prdname"
            className='bg-red-200 rounded p-3 m-2'
            type='text'
            placeholder='Product name'
            />

            <input
            ref={(e)=>{formRef.current.price=e}}
            // e=Whole input
            //setting the whole input as a price keyin the object
            name ="price"
            className='bg-red-200 rounded p-3 m-2'
            type='text'
            placeholder='Product price'
            />

            <span>Select category : </span>
            <select
            ref={(e)=>{formRef.current.Category=e}}
            className='bg-red-200 rounded p-3 m-2'>
                <option value="Men">MEN</option>
                <option value="WOMen">WOMEN</option>
                <option value="Kids">Kids</option>
            </select>

            <input
            ref={(e)=>{formRef.current.img=e}}
            className='bg-red-200 rounded p-3 m-2'
            type="text"
            placeholder='Image'
            />
            <button onClick={handleSubmit} className='p-3 m-2 bg-red-300 rounded-2xl '>Create</button>
        </form>

    </div>
    )
}

export default Form

/* notes
ref={(e)=>{formRef.current.productName= e}}
 e is the actual input DOM element.
 We store that element inside formRef.current
 under the key "productName".
 */
