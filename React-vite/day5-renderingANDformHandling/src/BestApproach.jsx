import React from 'react'
import {useState} from "react"

const BestApproach = () => {
    let[formData,setFormData] = useState({});

    let handleChange = (e)=>{
        setFormData({...formData,
            [e.target.name]:e.target.value
        })
    }
    return (
    <div>
        <input
        name='name'
        onChange={handleChange}
        className='h-10 w-50 bg-amber-200'
        type='name'placeholder='name'/>
        <input name="email" onChange={handleChange}
        className='h-10 w-50 bg-amber-200'/>
        <input name='password'  onChange={handleChange}
        className='h-10 w-50 bg-amber-200' />
    </div>
    )
}

export default BestApproach
