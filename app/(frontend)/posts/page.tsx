"use client"

import React from 'react';
import { blogData } from '@/constants/blogData';
import BlogCard from '@/components/shared/BlogCard';
import Link from 'next/link';
import Button from '@/components/UI/Button';
import { useState } from 'react';
export default function page() {
  const posts = blogData;
  const [visibleBlogs, setvisibleBlogs] = useState<number>(4);
  const showMoreBlogs = ()=>{
    setvisibleBlogs((prev)=> prev + 3);
  }
  return (
    <div
    className=' w-full flex items-center justify-center mt-10'
    >
        <div
        className=" flex flex-col gap-10 h-full cursor-pointer"
        >
            {
                posts.slice(0,visibleBlogs).map((post,index)=>{
                    return(
                        <div
                        key={index}
                        >
                            <BlogCard post={post} index={index} key={index} />
                        </div>
                    )
                })
            }
            {
                visibleBlogs < posts.length && (
                    <div
                    className=" flex justify-center"
                    >
                        <Button onclick={showMoreBlogs} text="Show More" aria="Show More Blog Posts"/>
                    </div>
                )
            }
        </div>
    </div>
  )
}
