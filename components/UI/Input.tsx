"use client"

import clsx from 'clsx';
import { inputProps } from '@/types';

function Input({name,type,placeholder,value}:inputProps) {

  return (
    <>
        <input 
        type={type} placeholder={placeholder} value={value} name={name} required
        className=' text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6 border w-full border-gray-200 p-2 rounded-md py-1.5 ' 
        />
    </>
  )
}

export default Input;