"use client"
import { FormProps } from '@/types';
import React from 'react';
import { useRef,FormEvent } from 'react';

function Form({children,action,className,onSubmit}:FormProps) {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
    className={className}
    onSubmit={onSubmit}
    ref={ref}
    action={async (formData)=>{
        await action(formData);
        ref?.current?.reset();
    }}
    >
        {children}
    </form>
  )
}

export default Form