import React from 'react';
import Button from '@/components/UI/Button';
import Image from 'next/image';
import Link from 'next/link';
import Overlay from '@/components/UI/Overlay';

export default function page() {
  return (
    <section>
      <div
      className=' relative h-[500px] w-full'
      >
        <Image
        src="/assets/images/contact.jpg"
        alt=''
        fill
        className=' object-cover '
        />
        <Overlay/>
          <h1 className="flex absolute w-full h-full justify-center items-center text-4xl font-extrabold uppercase text-white">
            Contact Us
          </h1>
      </div>
      <div 
      className="p-10 leading-8 text-lg mt-10 relative m-auto rounded-lg text-center "
      >
        <h1
        className=' text-4xl font-extrabold w-full text-center uppercase text-primary mb-10 '
        >
          Let's Discuss
        </h1>
        <form action="" method="post"
        className=' flex flex-col w-full gap-5'
        >
          <div 
          className="flex gap-7 max-md:flex-col"
          >
            <input type="text" name="" placeholder='Name' id="" 
            className=' px-1 py-4 border-gray-300 w-full rounded-md text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primary outline-none '
            />
            <input type="email" name="" placeholder='email' id="" 
            className=' px-1 py-4 border-gray-300 w-full rounded-md text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primary outline-none '
            />
          </div>
          <div 
          className="flex gap-7 max-md:flex-col"
          >
            <input type="text" name="" placeholder='Subject' id="" 
            className=' px-1 py-4 border-gray-300 w-full rounded-md text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primary outline-none '
            />
            <input type="tel" name="" placeholder='Phone Number' id="" 
            className=' px-1 py-4 border-gray-300 w-full rounded-md text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primary outline-none '
            />
          </div>
          <textarea 
          name="message" id="" placeholder='Message' rows={10}
          className=' rounded-lg px-1 py-4 border-gray-300 w-full p-4 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primary outline-none '
          />
          <div
          className=' flex justify-center'
          >
            <Button text='Submit' aria='Submit Contact Form'/>
          </div>
        </form>
        <div
        className=' flex items-center justify-center w-full h-screen'
        >
          <iframe className=' w-[1300px] h-[600px]' frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Coimbatore+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
      </div>
    </section>
  )
}
