import React from 'react'
import {useForm} from "react-hook-form"

const Form = () => {
    let {register,
        handleSubmit,
        reset,
        formState:{errors},
    } =useForm({
        mode:"onChange",
    });


    console.log(errors);


    return (
    <div className='flex flex-col gap-5 w-100 h-auto     bg-amber-200 p-5 justify-center items-center rounded-xl'>
        <h1>Create user</h1>
        <form onSubmit={handleSubmit((data)=>{
            console.log(data);//this gives the data onto the console after submitting the form in the form of object
            reset(); //this resets the form after submission
        })}
        className='flex flex-col gap-3 w-75'>


            <input
            {...register("name",{
                required:"Name is required", //errors.name.message == name is required
                minLength : {
                    value : 20,
                    message :"min 6 letters are req"
                },
                maxLength : {
                    value : 20,
                    message :"max 20 letters are req"
                },
            })
            }
            className=' border-amber-300 bg-orange-300 rounded p-2'
            type='text'
            placeholder='Name'
            />
            {errors.name && <p className='text-red-500 rounded-xl '>{errors.name.message}</p>} {/* error.name === ..register("name") */}


            <input
            {...register("email",{
                required:"Email is required", //errors.email.message == Email is required
                pattern :{
                    value:  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message : "pls enter a valid email"
                }
            }
            )}
            className=' border-amber-500 bg-orange-300 rounded p-2'
            type='email'
            placeholder='Email'
            />
            {errors.email && <p className='text-red-500 rounded-xl  border-0'>{errors.email.message}</p>}


            <input
            {...register("contact",{
                required:"Contact number is required", //errors.contact.message
                minLength : {  // for validating the 10 digits of mobile number
                    value : 10,
                    message: "minimum 10 digits are required"
                },
                maxLength: {
                    value: 10,
                    message : "Max 10 digits are required"
                },
            })}
            className=' border-amber-300 bg-orange-300 rounded p-2'
            type='number'
            placeholder='Contact'
            />
            {errors.contact && <p className='text-red-500 rounded-xl '>{errors.contact.message}</p>}


            <input
            {...register("image",{
                required: "img url is required"//errors.image.message ==img url is required
            })
            }
            className=' border-amber-300 bg-orange-300 rounded p-2'
            type='url'
            placeholder='image'
            />
            {errors.image && <p className='text-red-500 rounded-xl '>{errors.image.message}</p>}


            <button className='p-3 bg-indigo-200 rounded-xl cursor-pointer' >Add user</button>
        </form>
    </div>
    )
}

export default Form



/*
notes
{...register("name",{//js code in {} register has onchange , value and name , required and all things build in
                required:"Name is required" //validation+ an error whichhis " name is required "" . stored in the formState"
            })}


{errors.email && <p className='bg-red-800 rounded-xl p-1 w-fit'>please provide email</p>} :  if the left side is truthy , then render right side , if the errors.name = {} or required , it will render the p tag
 */
