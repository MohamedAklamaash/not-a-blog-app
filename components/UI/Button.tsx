import React from 'react'
import clsx from 'clsx';
import { ButtonProps } from '@/types';
const Button = ({text,onclick,aria,action,type}: ButtonProps) => {
  return (
    <button 
    className={
      clsx(
            "bg-primary py-2 px-4 rounded-lg hover:bg-primary/80 duration-500 inline-block text-white ",
            action && " absolute top-5 z-[2] right-5 bg-red-600 px-5 py-1 text-white rounded-md hover:bg-red-500 "
      )
    }
    onClick={onclick}
    aria-label={aria}
    type={type}
    >
        {text}
    </button>
  )
}

export default Button