import React from 'react'
import Link from 'next/link';
import Tag from '@/components/UI/Tag';
import {FaSquareXTwitter,FaSquareInstagram,FaSquareSnapchat} from "react-icons/fa6";
import {FaFacebook} from "react-icons/fa";
export default function page({searchParams}:{searchParams:BlogData}) {
  const post = searchParams;
  
  return (
    <div
    className=' relative w-full'
    >
        <div
        className=' gap-3 object-cover flex items-center justify-center '
        >
            <img src={`${post.authorImage}`} alt="author Image" className='h-[72px] w-[72px] rounded-full object-cover' />
            <h2
            className=' text-tertiary '
            >
                <span className="text-xl">{post.authorName}</span>
                <span className="italic"> {post.publishDate}</span>
            </h2>
        </div>
        <div
        className='flex justify-center '
        >
            <Tag text={post.tags}/>
        </div>
        <div className='  '>
            <button type="button"
            className=' absolute right-0 mr-10  max-md:mr-[1.4px]'
            aria-label='Back to Home'
            >
                <Link href={`/`} >
                    {" <--"}
                </Link>
            </button>
        </div>
        <section>
            <main className="w-[95%] mx-auto flex max-md:flex-col items-center justify-center flex-reverse">
                <h1
                className=' text-tertiary text-4xl font-semibold'
                >
                {post.title}
                </h1>
                <img src={post.image_path} alt={post.title} className=' mt-10 w-[800px] h-[800px] max-md:h-[400px] object-cover ' />
            </main>
            <main className=' flex items-center justify-center w-[95%] mx-auto mt-10'>
                <p className=' font-bold text-tertiary text-lg'>{post.paragraph}</p>
            </main>
        </section>
    </div>
  )
}
