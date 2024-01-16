import React from 'react'
import { getCurrentUser } from '@/actions/getCurrentUser';
import CreateForm from '@/components/shared/CreateForm';
export default async function CreatePost() {
  const user = await getCurrentUser();
  return <CreateForm user={user}/>
}
