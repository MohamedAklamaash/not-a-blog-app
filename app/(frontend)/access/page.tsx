"use client"
import {useState,useEffect} from 'react';
import {signIn,useSession} from "next-auth/react";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {GithubLoginButton,GoogleLoginButton,FacebookLoginButton} from "react-social-login-buttons"
export default function AccessPage() {
  const session = useSession();
  const router = useRouter();
  const [isLoading, setisLoading] = useState<boolean>(false);
  useEffect(()=>{
    if(session.status === "authenticated"){
      router.push('/');
    }
  },[session.status,router]);
  const socialAction = (action:string)=>{
    setisLoading(true);
    signIn(action,{
      redirect:false
    }).then((callback)=>{
      if(callback?.error){
        return;
      }
      if(callback?.ok){
        router.push('/');
      }
    }).finally(()=>{
      setisLoading(false);
    })
  }
  return (
    <div
    className=' my-24 sm:mx-auto  sm:max-w-4xl px-5  '
    >
      <div 
      className="bg-white shadow sm:rounded-lg flex gap-5 justify-between h-96 overflow-hidden "
      >
        <div 
        className="mt-6 flex gap-2 flex-col justify-center items-center mx-auto  "
        >
          <Link href={"/"}
          className=' mb-5 '
          >
            <h1
            className=' text-3xl font-extrabold text-secondary'
            >
              Blog <span className=' text-primary ' > App</span>
            </h1>
          </Link>
          <span
          className=' text-sm'
          >
            Login OR SignUp with the links below
          </span>
          <GoogleLoginButton onClick={()=>{
            socialAction("google");
          }} />
          <GithubLoginButton 
          onClick={()=>{
            return;
          }}
          />
          <FacebookLoginButton
          onClick={()=>{
            return;
          }}
          />
        </div>
        <Image
        src={"/assets/images/post4.jpg"}
        alt='bg-pic'
        fill
        className=' z-[-10] bg-transparent object-cover'
        priority={false}
        />
      </div>
    </div>
  )
}
