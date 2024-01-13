"use client"
import {useState,useEffect} from 'react';
import Link from 'next/link';
import Button from '../UI/Button';
import Routes from '../UI/Routes';
import { navLinks } from '@/constants';
import clsx from 'clsx';
import MobileMenu from './MobileMenu';
import useMenuActiveHook from '@/hooks/useMenuActiveHook';
function Navbar() {
  const [isScrolling, setisScrolling] = useState<boolean>(false);
  useEffect(()=>{
    const handleScroll = () =>{
        if(window.scrollY > 0){
            setisScrolling(true)
        }else{
            setisScrolling(false);
        }
    }
    window.addEventListener("scroll",handleScroll);
    return()=>{
        window.removeEventListener("scroll",handleScroll);
    }
  },[]);
  return (
    <nav
    className={
        clsx(`py-4 w-full`,
            isScrolling&&"fixed top-0 left-0 bg-white shadow-lg z-10 ",
            !isScrolling&&"pb-6"
        )
    }
    >
        <div className='  w-[95%] mx-auto max-w-[1450px] flex items-center justify-between pb-5 border-b border-gray-100 '>
            <div className='flex-1'>
                <Link href={`/`}>
                    <h1
                    className=' text-secondary font-extrabold text-3xl'
                    >
                        Blog <span className=' text-primary'>App</span>
                    </h1>
                </Link>
            </div>
            <ul className=' flex items-center justify-center gap-16 flex-2 max-md:hidden'>
                {navLinks.map((link,index)=>{
                    const isActive = useMenuActiveHook(link.route);
                    return(
                        <li
                        key={index}
                        >
                            <Routes label={link.label} route={link.route} isActive={isActive}/>
                        </li>
                    )
                })}
            </ul>
            <div
            className=' flex flex-1 justify-end gap-5 max-md:hidden'
            >
                <Button
                text='LOG IN'
                onclick={()=>null}
                aria='Login Button'
                />
                <Button
                text='Sign Up'
                onclick={()=>null}
                aria='Sign Up Button'
                />
            </div>
            <div className=' hidden max-md:inline-block'>
                <MobileMenu/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar