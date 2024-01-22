"use client"

import React from 'react'
import CreateForm from '@/components/shared/CreateForm';
import { User } from '@prisma/client';
import {getCurrentUser} from "@/actions/getCurrentUser";
export default async function CreatePost() {
  const user:User = {
    id: "1",
    name:"akla",
    email:"aklamaash78@gmail.com",
    emailVerified:null,
    image:""
  }
  console.log(await getCurrentUser());
  
  return (
    <div>
      {
        user && (
          <CreateForm user={user}/>
        )
      }
    </div>
  )
}
