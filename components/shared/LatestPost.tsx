"use client"
import { useState } from "react";
import { blogData } from "@/constants/blogData";
import BlogCard from "./BlogCard";
import Button from "../UI/Button";

export default function LatestPost() {
  const latestPosts = blogData.filter((blog)=>blog.latestPost === true); 
  const [visibleBlogs, setvisibleBlogs] = useState<number>(4);
  const showMoreBlogs = ()=>{
    setvisibleBlogs((prev)=> prev + 3);
  }
  return (
    <section
    className="col-span-2"
    aria-labelledby="latest-post"
    >
        <div
        className=" w-full text-center"
        >
            <h2
            id="latest-post"
            className=" text-center text-2xl font-extrabold text-tertiary uppercase inline-block px-2 mb-10 "
            >
                Latest Posts
            </h2>
        </div>
        <div
        className=" flex flex-col gap-10 h-full"
        >
            {
                latestPosts.slice(0,visibleBlogs).map((post,index)=>{
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
                visibleBlogs < latestPosts.length && (
                    <div
                    className=" flex justify-center"
                    >
                        <Button onclick={showMoreBlogs} text="Show More" aria="Show More Blog Posts"/>
                    </div>
                )
            }
        </div>
    </section>
  )
}
