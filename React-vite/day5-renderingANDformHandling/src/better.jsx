import React, { useState } from 'react'

const Better = () => {
    let [formData, setFormData] = useState({
        name: "",
        email: "",
        pass: ""
    });



    console.log(formData);

    return (
        <div className='flex flex-col gap-5 w-50 p-4 bg-rose-300'>
            <input onChange={(e)=>{
                setFormData({...formData,name:e.target.value});
            }} />
            <button className='border-2'>Submit</button>

            <h1>your name is : {formData.name}</h1>
            <h1>your email is : {formData.email}</h1>
            <h1>your password is : {formData.pass}</h1>
        </div>
    )
};

export default Better
