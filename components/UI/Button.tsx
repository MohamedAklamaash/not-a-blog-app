import React from 'react'

const Button = ({text,onclick,aria}: ButtonProps) => {
  return (
    <button 
    className={` bg-primary py-2 px-4 rounded-lg hover:bg-primary/80 duration-500 inline-block text-white `}
    onClick={onclick}
    aria-label={aria}
    >
        {text}
    </button>
  )
}

export default Button