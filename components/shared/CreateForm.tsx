" use client"
import { User } from '@prisma/client';
import React from 'react';
import Form from '../UI/Form';
import Input from '../UI/Input';
import { useEdgeStore } from '@/lib/EdgeStore';
import { useEffect , useState } from 'react';
import Button from '../UI/Button';
import { SingleImageDropzone } from '../UI/SingleImageDropZone';
import { createPost } from '@/actions/blogActions';

export default function CreateForm({user}:{user:User}) {
  const [file, setfile] = useState<File | null | undefined>(null);
  const edgestore = useEdgeStore();
  const [image_path, setimage_path] = useState<string | undefined>("");
  const uploadImageHandler = async()=>{
    if(file){
      const res = await edgestore.edgestore.publicFiles.upload({file});
      setimage_path(res.url);
    }
  }
  useEffect(()=>{
    if(file){
      uploadImageHandler();
    }
  },[file]);
  
  return (
    <div
    className=' mt-8 mx-auto w-full max-w-3xl px-4  '
    >
      <div
      className=' bg-white py-8 shadow rounded-lg px-10 '
      >
        <h1 
        className="text-center text-2xl font-extrabold mb-10"
        >
          Create a Post 📝
        </h1>
        {
          !user && (
            <h2
            className=' text-center text-xl font-extrabold uppercase '
            >
              Please Sign Up Or Login to create a Post
            </h2>
          )
        }
        {
          user && (
            <>
              <SingleImageDropzone
              onChange={(file)=>{
                setfile(file)
              }}
              value={file}
              width={100}
              height={100}
              />
              <Form
              action={createPost}
              className=' flex flex-col gap-5 mt-5 '
              onSubmit={()=>setfile(undefined)}
              >
                <Input 
                  type="hidden"
                  name='image'
                  value={image_path}
                />
                <Input
                type = "text"
                name='title'
                placeholder='Enter Title'
                />
                <textarea
                required
                name='description'
                rows={10}
                placeholder='Write Here ....'
                className=' text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6 border w-full border-gray-200 p-2 rounded-md py-1.5 ' 
                ></textarea>
                <select 
                name="category"
                required
                className=' text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6 border w-full border-gray-200 p-2 rounded-md py-1.5 ' 
                >
                  <option value="" disabled selected>Choose Tag</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Culture">Culture</option>
                  <option value="Discovery">Discovery</option>
                  <option value="Discovery">Discovery</option>
                  <option value="Wanderlust">Wanderlust</option>
                </select>
                <Input 
                name='email'
                type='hidden'
                value={user?.email || ""}
                />
                <Button
                type='submit'
                text='Create'
                aria='Create the Blog'
                />
              </Form>
            </>
          )
        }
      </div>
    </div>
  )
}
