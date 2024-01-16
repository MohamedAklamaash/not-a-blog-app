"use client"
import {useState,useEffect} from 'react';
import {CgMenuGridO,CgClose} from "react-icons/cg";
import {FaSquareXTwitter,FaSquareInstagram,FaSquareSnapchat} from "react-icons/fa6";
import {FaFacebook} from "react-icons/fa";
import Button from '../UI/Button';
import { navLinks } from '@/constants';
import Link from 'next/link';
import Routes from '../UI/Routes';
import useMenuActiveHook from '@/hooks/useMenuActiveHook';
import { signIn, signOut } from 'next-auth/react';
import { User } from '@/types';
export default  function MobileMenu({user}:User) {
  const [openMobileMenu, setopenMobileMenu] = useState<boolean>(false);
  const mobileMenuHandler = ()=>{
    setopenMobileMenu(!openMobileMenu)
  }
  return (
    <>
        <div
        className=' md:hidden duration-200 cursor-pointer'
        onClick={mobileMenuHandler}
        >
            {openMobileMenu ? (
                <CgClose
                size={25}
                />
            ):(
                <CgMenuGridO
                size={25}
                />
            )}
            {
                openMobileMenu ? (
                    <div
                    onClick={()=>setopenMobileMenu(false)}
                    className=' w-full  fixed top-0 left-0 h-screen bg-black/25 z-50'
                    >
                        <div 
                        onClick={(e)=>e.stopPropagation()}
                        className=' absolute h-screen left-0 top-0 w-60 bg-white z-[999]  px-5 overflow-y-auto overflow-x-hidden  border-r flex flex-col gap-10 '
                        >
                            <div
                            className=' border-b py-5 '
                            >
                                <div className='flex-1'>
                                    <Link href={`/`}>
                                        <h1
                                        className=' text-secondary font-extrabold text-3xl'
                                        >
                                            Blog <span className=' text-primary'>App</span>
                                        </h1>
                                    </Link>
                                </div>
                            <div 
                            className="flex gap-5 text-secondary flex-1 justify-center text-xl mt-[40%]"
                            >
                                <FaSquareInstagram/>
                                <FaSquareSnapchat/>
                                <FaFacebook/>
                                <FaSquareXTwitter/>
                            </div>
                        </div>
                        <ul 
                        className="flex items-center justify-center flex-col mt-5 gap-10 py-5 border-b"
                        >
                            { navLinks.map((link,index)=>{
                                const isActive = useMenuActiveHook(link.route);
                                return(
                                    <li key={index}
                                    >
                                        <Routes 
                                        label={link.label} route={link.route} isActive={isActive}
                                        onclick={()=>setopenMobileMenu(!openMobileMenu)}
                                    />
                                    </li>
                                );
                            })}
                        </ul>
                        {
                            user && (
                                <div className=' flex gap-3 h-24'>
                                    <h3 className="text-lg">{user.name}</h3>
                                    <img src={user.image as string} alt="user's image" width={100} height={100} className=' rounded-full' />
                                </div>
                            )
                        }
                        {
                            !user ?(
                                <div 
                                className="flex flex-1 gap-5 flex-col justify-center items-center"
                                >
                                    <Button text='Log In' onclick={signIn} aria='Sign In Button'/>
                                    <Button text='Sign Up' onclick={signIn} aria='Sign Up Button'/>
                                </div>
                            ):(
                                <div className='flex flex-col items-center gap-3 justify-center pb-3'>
                                    <Button text='Create a Post' onclick={()=>null} aria='Create a post btn'/>
                                    <Button text='My Posts' onclick={()=>null} aria='My Posts'/>
                                    <Button text='Log Out'  onclick={signOut} aria='Sign Out button'/>
                                </div>
                            )
                        }
                        </div>
                    </div>
                ):""
            }
        </div>  
    </>
  )
}
