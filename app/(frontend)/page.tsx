import React from 'react'
import Hero from '@/components/shared/Hero';
import LatestPost from '@/components/shared/LatestPost';
import TopPosts from '@/components/shared/TopPosts';
export default function Home() {
  return (
    <>
      <Hero/>
      <div
      className=' p-2 grid grid-cols-3 max-lg:grid-cols-1 lg:gap-10 max-w-[1450px] w-[95%] overflow-hidden h-fit mt-10 '
      >
        <LatestPost />
        <TopPosts />
      </div>
    </>
  )
}
