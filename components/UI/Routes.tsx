import React from 'react'
import Link from 'next/link';
import clsx from "clsx";

const Routes = ({route,label,isActive,onclick}:routeProps) => {
  return (
    <Link 
    href={`${route}`}
    onClick={onclick}
    className={
        clsx(
            isActive&&"text-primary",
        )
    }
    >
        {label}
    </Link>
  )
}

export default Routes