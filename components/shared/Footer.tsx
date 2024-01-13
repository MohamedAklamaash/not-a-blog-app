"use client"
import {CgMenuGridO,CgClose} from "react-icons/cg";
import {FaSquareXTwitter,FaSquareInstagram,FaSquareSnapchat} from "react-icons/fa6";
import useMenuActiveHook from "@/hooks/useMenuActiveHook";
import { navLinks } from "@/constants";
import Routes from "../UI/Routes";
import Link from "next/link";
import {FaFacebook} from "react-icons/fa"
export default function Footer() {
  return (
    <div
    className=" w-full py-5 bg-tertiary mt-10 "
    >
        <div 
        className="w-[95%] mx-auto max-w-[1450px]"
        >
            <div
            className=" flex items-center justify-center border-b max-md:flex-col gap-8 border-gray-300 border-opacity-20"
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
            <ul
            className=" flex-1 flex items-center justify-center text-white max-md:flex-col gap-6 md:gap-10"
            >
                { navLinks.map((link,index)=>{
                    const isActive = useMenuActiveHook(link.route);
                    return(
                        <li key={index}
                        >
                            <Routes 
                            label={link.label} route={link.route} isActive={isActive}
                        />
                        </li>
                    );
                })}
            </ul>
            <div className="flex gap-6 text-white flex-1 justify-end text-2xl max-md:mb-5"
            >
                <FaSquareInstagram/>
                <FaSquareSnapchat/>
                <FaFacebook/>
                <FaSquareXTwitter/>
            </div>
            </div>
            <div className=" text-white font-semibold text-center mt-[4%] md:mt-7 text-xl">
                <h1>
                    All Rights Reserved by Mohamed Aklamaash
                </h1>
            </div>
        </div>
    </div>
  )
}
