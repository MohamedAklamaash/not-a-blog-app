"use client"
import {useState,useEffect} from 'react';
import Link from 'next/link';
import Button from '../UI/Button';
import Routes from '../UI/Routes';
import { navLinks } from '@/constants';
import clsx from 'clsx';
import MobileMenu from './MobileMenu';
import useMenuActiveHook from '@/hooks/useMenuActiveHook';
import {User} from "@prisma/client";
import { signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
function Navbar({user}:{user:User}) {
  const [isScrolling, setisScrolling] = useState<boolean>(false);
  const [openTheDialog, setopenTheDialog] = useState<boolean>(false);
  const router = useRouter();
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
                {
                    !user &&(
                        <>
                            <Button
                            text='LOG IN'
                            onclick={signIn}
                            aria='Login Button'
                            />
                            <Button
                            text='Sign Up'
                            onclick={()=>{
                                router.push('/access');
                            }}
                            aria='Sign Up Button'
                        />
                        </>
                    )
                }
                {
                    user&& (
                        <div
                        className=' flex items-center justify-center gap-2 cursor-pointer '
                        onClick={(e)=>{
                            e.stopPropagation();
                            setopenTheDialog(!openTheDialog);
                        }}
                        >
                            <Image
                            src={user.image as string}
                            alt={user.name as string}
                            className=' rounded-full  object-cover'
                            width={80}
                            height={80}
                            />
                            <h1 className="text-lg">{user.name}</h1>
                            {
                                openTheDialog && (
                                    <div
                                    className=' flex flex-col gap-7 justify-center  items-center absolute mt-[24rem] bg-black/20 w-72 h-72 z-10 shadow-2xl p-10 '
                                    >
                                        <Button
                                        text='Log Out'
                                        onclick={signOut}
                                        aria='This is a sign out Button'
                                        />
                                        <Button 
                                        text='Create a Post' 
                                        onclick={()=>null} 
                                        aria='Create a post btn'
                                        />
                                        <Button 
                                        text='My Posts' 
                                        onclick={()=>null} 
                                        aria='My Posts'
                                        />
                                    </div>
                                )
                            }
                        </div>
                    )
                }
            </div>
            <div className=' hidden max-md:inline-block'>
                <MobileMenu user={user}/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar