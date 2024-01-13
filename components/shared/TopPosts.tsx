"use client"
import React from 'react';
import BlogCard from './BlogCard';
import { blogData } from '@/constants/blogData';
import { useState } from 'react';
import Button from '../UI/Button';
import Link from 'next/link';
import Image from 'next/image';
import Overlay from '../UI/Overlay';
import Tag from '../UI/Tag';
export default function TopPosts() {
  const topPostArr = blogData.filter((blog)=>blog.topPost === true);
  const [visibleBlogs, setvisibleBlogs] = useState<number>(3);
  const showMoreBlogs = ()=>{
    setvisibleBlogs((prev)=>prev+3);
  }
  return (
    <section
    aria-labelledby='top-posts'
    >
      <main
      className=' w-full text-center'
      >
        <h2
        id=' top-posts'
        className=' text-center text-2xl font-extrabold uppercase text-tertiary inline-block px-2 mb-10 '
        >
          Top Posts
        </h2>
      </main>
      <div className="flex h-col flex-col gap-12 items-center">
        {
          topPostArr.map((post,index)=>{
            return(
              <>
                  <Link
                  href={{
                    pathname: `blog/${post.id}`,
                    query:{...post}
                  }}
                  >
                    <article
                    key={index}
                    >
                      <div 
                      className="relative cursor-pointer"
                      >
                        <Image
                        src={post.image_path}
                        alt={post.title}
                        width={800}
                        height={800}
                        className=' object-cover'
                        />                        
                      {/* <Overlay/> */}
                      </div>
                      <div 
                      className="w-full flex justify-center"
                      >
                        <Tag text={post.tags}/>
                      </div>
                      <h3
                      className=' text-2xl uppercase font-extrabold text-tertiary '
                      >
                        {post.title}
                      </h3>

                      <div className="flex gap-3 justify-center mt-2 ">
                        <span className=' font-light '>
                          By:{`${post.authorName}`}
                        </span>
                        <span
                        className=' italic'
                        >
                          {`${post.publishDate}`}
                        </span>
                      </div>
                    </article>
                  </Link>
              </>
            )
          })
        }
      </div>

    </section>
  )
}
