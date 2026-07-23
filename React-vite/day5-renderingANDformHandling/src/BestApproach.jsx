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
        <input onChange={handleChange}
        className='h-10 w-50 bg-amber-200' />
        <input onChange={handleChange}
        className='h-10 w-50 bg-amber-200'/>
        <input onChange={handleChange}
        className='h-10 w-50 bg-amber-200' />
    </div>
    )
}

export default BestApproach
