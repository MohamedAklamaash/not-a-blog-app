import { blogData } from "@/constants/blogData";
import Tag from "../UI/Tag";
import Overlay from "../UI/Overlay";
import Link from "next/link";
import Image from "next/image";
export default function Hero() {
  const featuredData = blogData.filter((blog)=>blog.featured === true);
  const topFeatured = featuredData.slice(0,1);
  const bottomFeatured = featuredData.slice(1,4);
  return (
    <main>
      <section className=" relative">
        <div className=" w-[[95%] mx-auto max-w-[1450px] z-10 "
        >
          {topFeatured.map((post,index)=>{
            return(
              <article
              key={index}
              className=" flex flex-col gap-6 mb-5 text-center relative "
              >
                <h2 
                className="text-6xl font-extrabold uppercase text-tertiary"
                >
                  {post.title}
                </h2>
                <Link href={{
                  pathname:`blog/${post.id}`,
                  query:{...post}
                }}>
                  <div className="flex items-center justify-center gap3 font-light text-tertiary">
                    <div className=" w-10 h-10 rounded-full bg-black"></div>
                    <span className="p-2">{post.authorName}</span>
                    <span className=" italic">,{post.publishDate}</span>
                  </div>
                  <div className=" relative max-h-[600px] overflow-hidden shadow-xl">
                    <img src={post.image_path} alt={`${post.title}`} className=" object-cover w-full h-full"/>
                    <Overlay/>               
                  </div>
                </Link>
                {/* <Tag text={post.tags}/> */}
              </article>
            )
          })}
          <div className="grid text-center grid-cols-3 gap-8 max-lg:grid-cols-1">
            {
              bottomFeatured.map((posts,id)=>{
                return(
                <article key={id}>
                  <Link href={{
                    pathname:`blog/${posts.id}`,
                    query:{...posts}
                  }}>
                    <div
                    className=" relative overflow-hidden h-72 shadow-xl w-full "
                    >
                      <img src={posts.image_path} alt={posts.title} className=" w-full h-full" />
                      <Overlay/>
                    </div>
                    <Tag text={posts.tags} />
                    <h1 className=" text-xl py-5 uppercase font-extrabold text-tertiary">
                      {posts.title}
                    </h1>
                    <span className=" text-tertiary text-md">
                      {posts.publishDate}
                    </span>
                  </Link>
                </article>
                )
              })
            }
          </div>
        </div>
      </section>
    </main>
  )
}
