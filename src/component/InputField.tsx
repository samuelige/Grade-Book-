import React from 'react'
import { I_InputData } from './CustomForm'


const InputField = ({type, name, value, placeholder, handleChange}: I_InputData) => {

    return (
        <input className='w-full h-10 border-2 border-blue-800 rounded-2xl pl-4 outline-none' type={type} name={name} value={value} placeholder={placeholder} onChange={(e) => handleChange(e)}/>
    )
}

export default InputField
