import React from 'react';

export default function Tag({text}:TagProps) {
  
  return (
    <>
        <span 
        className="uppercase bg-primary py-3 px-1 inline-block text-center self-center my-3 text-white rounded-md text-md"
        >
            {text}
        </span>
    </>
  )
}
