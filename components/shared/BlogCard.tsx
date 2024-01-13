import React from 'react';
import Image from 'next/image';
import {AiOutlineArrowRight} from "react-icons/ai";
import Tag from '../UI/Tag';
import Overlay from '../UI/Overlay';
import Link from 'next/link';

export default function BlogCard({post,index}:{post:BlogData,index:number}) {
  return (
    <article
    className=' rounded-xl relative overflow-hidden'
    key={index}
    >
        <div
        className=' md:w-[1000px] w-[300px] h-[450px] relative'
        >
            <Image 
            src={post.image_path} 
            alt={post.title}
            fill
            className=' object-cover '
            />
            {/* <Overlay/> */}
        </div>
        <div
        className=' absolute w-full h-full z-2 top-0 p-5 flex flex-col justify-between'
        >
            <div>
                <Tag text={post.tags} />
                <h3 className="font-extrabold text-3xl uppercase text-white">
                    {post.title}
                </h3>
            </div>
        </div>
        <Link
        href={{
            pathname: `blog/${post.id}`,
            query:{...post}
        }}
        className=' absolute text-white bg-tertiary bottom-0 right-0 p-3  rounded-tl-lg '
        >
            <AiOutlineArrowRight size={30}/>
        </Link>
    </article>
  )
}
