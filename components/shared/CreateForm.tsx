" use client"
import { User } from '@prisma/client';
import React from 'react';
import Form from '../UI/Form';
import Input from '../UI/Input';
import { useEdgeStore } from '@/lib/EdgeStore';
import { useEffect , useState } from 'react';
import Button from '../UI/Button';
import { SingleImageDropzone } from '../UI/SingleImageDropZone';

export default function CreateForm({user}:{user:User}) {
  const [file, setfile] = useState<File>();
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
              <SingleImageDropzone />
            </>
          )
        }
      </div>
    </div>
  )
}
